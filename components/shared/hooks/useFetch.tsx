import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true)

            try {
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const json = await response.json()
                
                setData(json)
                setError(null)
            } catch (err) {
                err instanceof Error && setError(err.message)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {data, isLoading, error}
}