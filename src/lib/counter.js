import { CounterAPI } from "counterapi";

const counter = new CounterAPI();
const NAMESPACE = "portfolio-rvif";
const KEY = "visits";

export const incrementCount = async () => {
  console.log("Starting increment...");
  return new Promise((resolve, reject) => {
    counter
      .up(NAMESPACE, KEY)
      .then((response) => {
        console.log("Increment complete:", response);
        resolve(response);
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
};

// export const resetVisitCount = async () => {
//   try {
//     // First get the current count
//     const currentCount = await counter.get(NAMESPACE, KEY);
//     console.log("Current count:", currentCount);

//     // looping to decrease the count one by one
//     let response = currentCount;
//     while (response.Count > 0) {
//       response = await counter.down(NAMESPACE, KEY);
//       console.log("Current count after decrease:", response.Count);
//     }

//     // final count
//     const finalCount = await counter.get(NAMESPACE, KEY);
//     console.log("Final count:", finalCount);
//     return finalCount;
//   } catch (error) {
//     console.error("Error resetting counter:", error);
//     throw error;
//   }
// };
