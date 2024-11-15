const NAMESPACE = "portfolio-rvif";
const KEY = "visits";

// Create the counter if it doesn't exist
const createCounter = async () => {
  try {
    await fetch(
      `https://api.countapi.xyz/create?namespace=${NAMESPACE}&key=${KEY}&value=0`
    );
  } catch (error) {
    console.error("Error creating counter:", error);
  }
};

export const getVisitCount = async () => {
  try {
    const response = await fetch(
      `https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`
    );
    const data = await response.json();
    return data.value || 0;
  } catch (error) {
    console.error("Error getting count:", error);
    return 0;
  }
};

export const incrementVisitCount = async () => {
  try {
    const response = await fetch(
      `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`
    );
    const data = await response.json();

    // If counter doesn't exist, create it and try again
    if (data.error) {
      await createCounter();
      const retryResponse = await fetch(
        `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`
      );
      const retryData = await retryResponse.json();
      return retryData.value;
    }

    return data.value;
  } catch (error) {
    console.error("Error incrementing count:", error);
    return 0;
  }
};
