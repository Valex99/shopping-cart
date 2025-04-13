// USING PROMISE ALL
export async function fetchWatches() {
  try {
    // Initiate both fetch request simultaneously
    const [mensResponse, womensResponse] = await Promise.all([
      fetch("https://dummyjson.com/products/category/mens-watches"),
      fetch("https://dummyjson.com/products/category/womens-watches"),
    ]);

    // Check if both responses are OK
    if (!mensResponse.ok || !womensResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse both responses as JSON
    const [mensData, womensData] = await Promise.all([
      mensResponse.json(),
      womensResponse.json(),
    ]);

    // Combine the products from both categories
    const combinedWatches = [...mensData.products, ...womensData.products];

    // Return the combined array
    console.log(combinedWatches);
    return combinedWatches;
  } catch (error) {
    console.error("Error fetching watches: ", error);
    throw error;
  }
}
