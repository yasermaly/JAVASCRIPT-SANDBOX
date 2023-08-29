// getCurrentPosition()
function curSuccess(pos) {
  console.log(pos);

  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // uses GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached postion
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()
const target = {
  latitude: 42.9847534,
  longitude: -42.9847534,
};
function watchSuccess(pos) {
  console.log(pos);
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reached your destination');
    navigator.geolocation.clearWatch(id);
  }
}

const watchOptions = {
  enableHighAccuracy: true, // uses GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached postion
};

const id = navigator.geolocation.getWatchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
