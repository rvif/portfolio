import { resetVisitCount } from "./counter.js";

const handleReset = async () => {
  try {
    const response = await resetVisitCount();
    console.log("Counter successfully reset:", response);
  } catch (error) {
    console.error("Reset failed:", error);
  }
};

handleReset();
