export const getAllBrands = async () => {
    const res = await fetch('/data/brands.json');
    const data = await res.json();
    return data;
}