import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://localhost:5001/mealstogo-22cfe/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};
export const locationTransform = (result) => {
  console.log(`result`, result);
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
