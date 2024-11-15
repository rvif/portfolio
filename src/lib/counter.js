const SITE_ID = "rvif-portfolio.netlify.app";

export const incrementVisitCount = async () => {
  try {
    const response = await fetch(`https://hits.sh/${SITE_ID}.json`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Visit count data:", data);
    return data.hits || 0;
  } catch (error) {
    console.error("Error with visit counter:", error);
    return 0;
  }
};

export const getVisitCount = incrementVisitCount;
