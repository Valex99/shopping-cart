import { watchData } from "./watchData";
// Risk: If watchData[index] is undefined (e.g., the index is out of bounds), attempting to access .title
// will throw a runtime error: TypeError: Cannot read properties of undefined.

// Utilizes the optional chaining operator (?.) to safely access the title property. If watchData[dataIndex] is undefined or null,
// the expression short-circuits and returns undefined without throwing an error. ￼

export default function duplicateWatches(watchesArray) {
  const originalLength = watchesArray.length;
  const totalCopies = 2; // Number of times to duplicate the original array
  const maxId = Math.max(...watchesArray.map((watch) => watch.id));
  const duplicatedWatches = [];

  // For loop to run it twice
  for (let copyIndex = 1; copyIndex <= totalCopies; copyIndex++) {
    watchesArray.forEach((watch, index) => {
      const newId = maxId + index + 1 + (copyIndex - 1) * originalLength;
      const dataIndex = (copyIndex - 1) * originalLength + index;

      duplicatedWatches.push({
        ...watch,
        id: newId,
        title: watchData[dataIndex]?.title || `Watch ${newId}`,
        price:
          watchData[dataIndex]?.price || (Math.random() * 100 + 50).toFixed(2),
      });
    });
  }

  // Combine original array with duplicated array
  return [...watchesArray, ...duplicatedWatches];
}

// Code used to duplicate array
// ARRAY DUPLIATION
// export default function duplicateWatches(watchesArray) {
//   // Find out what the highest unique id is
//   const maxId = Math.max(...watchesArray.map((watch) => watch.id));

//   // Duplicate each watch with modified properties
//   const duplicatedWatches = watchesArray.map((watch, index) => {
//     return {
//       ...watch,
//       id: maxId + index + 1,
//       title: watchData[index].title, //Import an object with names and prices
//       price: watchData[index].price, // Do the same for price
//     };
//   });
//   // Combine original array with duplicated array
//   return [...watchesArray, ...duplicatedWatches];
// }
