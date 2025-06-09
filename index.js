// 1. Return the first two drivers from array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers from array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array that stores both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Returns a function that multiplies the fare
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Doubles the fare
const fareDoubler = createFareMultiplier(2);

// 6. Triples the fare
const fareTripler = createFareMultiplier(3);

// 7. Selects either first or last two drivers based on callback
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}



