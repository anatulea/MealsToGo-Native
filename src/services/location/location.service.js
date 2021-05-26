import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://us-central1-mealstogo-22cfe.cloudfunctions.net/geocode?city=${searchTerm}`
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
