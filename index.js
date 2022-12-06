// Code your solution here
// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive. 
function findMatching(drivers, string) {
    var matching = [];
    for (var i = 0; i < drivers.length; i++) {
      if (drivers[i].toLowerCase().indexOf(string.toLowerCase()) !== -1) {
        matching.push(drivers[i]);
      }
    }
    return matching;
  }
  //fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters. 
  function fuzzyMatch(drivers, string) {
    var matching = [];
    for (var i = 0; i < drivers.length; i++) {
      if (drivers[i].toLowerCase().indexOf(string.toLowerCase()) === 0) {
        matching.push(drivers[i]);
      }
    }
    return matching;
  }
  // matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument. 
  function matchName(drivers, string) {
    var matching = [];
    for (var i = 0; i < drivers.length; i++) {
      if (drivers[i].name.toLowerCase().indexOf(string.toLowerCase()) !== -1) {
        matching.push(drivers[i]);
      }
    }
    return matching;
  }
