import { watchData } from "./watchData";

export default function duplicateWatches(watchesArray) {
  // Find out what the highest unique id is
  const maxId = Math.max(...watchesArray.map((watch) => watch.id));

  // Duplicate each watch with modified properties
  const duplicatedWatches = watchesArray.map((watch, index) => {
    return {
      ...watch,
      id: maxId + index + 1,
      title: watchData[index].title, //Import an object with names and prices
      price: watchData[index].price, // Do the same for price
    };
  });
  // Combine original array with duplicated array
  return [...watchesArray, ...duplicatedWatches];
}
