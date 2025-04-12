export async function fetchWatches() {
  const response = await fetch(
    "https://dummyjson.com/products/category/mens-watches"
  );
  if (!response.ok) throw new Error("Failed to fetch data");
  const data = await response.json();
  //console.log(data);
  return data
}
