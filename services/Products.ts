export async function getLatestProducts(limit: number = 6) {
    try {
        const res = await fetch("https://fakestoreapi.com/products", {
          next: { revalidate: 60 },
        });
    
        if (!res.ok) throw new Error("Failed to fetch products");
    
        const data = await res.json();
    
        const items: any[] = Array.isArray(data) ? data : data.products ?? [];
    
        if (!items.length) return [];
    
        const hasDateField = items[0] && (items[0].createdAt || items[0].date);
        let sorted = items.slice();
    
        if (hasDateField) {
          sorted.sort((a: any, b: any) => {
            const ta = new Date(a.createdAt ?? a.date).getTime();
            const tb = new Date(b.createdAt ?? b.date).getTime();
            return tb - ta;
          });
        } else {
          sorted.sort((a: any, b: any) => {
            const ai = Number(a.id ?? 0);
            const bi = Number(b.id ?? 0);
            return bi - ai;
          });
        }
    
        return sorted.slice(0, limit);
    } catch (error) {
        console.error("getLatestProducts error:", error);
        return [];
    }
}
  