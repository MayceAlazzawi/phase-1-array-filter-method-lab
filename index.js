// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


const findMatching = (arr, string) => arr.filter((driver) => {
    if ( driver === string) {
       return driver;
    } if ( driver.toLowerCase() === string.toLowerCase()) {
      return driver;
    }
  })
;
console.log(findMatching(drivers, 'Bobby'));

// returns a driver if beginning provided letters match

function fuzzyMatch(arr,str) {
    const startswith = arr.filter((word) => word.startsWith(str));
    console.log(startswith)
    return startswith;
}
fuzzyMatch(drivers, "S");

function matchName(arr, str) {
  const contains = arr.filter((word) => {
    if ( word.name === str) {
      return word
    }
  });
  return contains;
}
matchName(drivers, 'Bobby')
