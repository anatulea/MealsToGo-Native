const { locations: locationsMock } = require("./geocode.mock");

const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response) => {
  const city = request.query.city;

  const locationMock = locationsMock[city.toLowerCase()];
  response.json(locationMock);
};
