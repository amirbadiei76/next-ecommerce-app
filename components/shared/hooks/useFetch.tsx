import { useEffect, useRef, useState } from "react";

export function useFetch<T = unknown>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    const controller = new AbortController();

    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const json = (await res.json()) as T;

        if (isMounted.current) {
          setData(json);
        }
      } catch (err) {
        if (isMounted.current) {
          if (err instanceof DOMException && err.name === "AbortError") {
            return;
          }
          err instanceof DOMException && setError(err.message);
        }
      } finally {
        if (isMounted.current) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted.current = false;
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}
