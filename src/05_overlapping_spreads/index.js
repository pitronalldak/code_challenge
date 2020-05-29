// Given the array of integers, replace every element with it's neighbouring numbers, then find the duplicate numbers
// and sum them up. It is guaranteed that provided integers are unique, which means they will not repeat.
//
// For example for the input: -3,5,8,-1,6,11
// resulting array after replacement would be -4,-2,4,6,7,9,-2,0,5,7,10,12 and duplicate numbers are -2,7 and the
// result will be 5.

exports.overlappingSpreads = function(data) {
  const map = {};
  let res = 0;

  data.reduce((acc, curr) => {
    if (map[curr - 1]) {
      res = res + curr - 1;
    } else {
      map[curr - 1] = true;
    }

    if (map[curr + 1]) {
      res = res + curr + 1;
    } else {
      map[curr + 1] = true;
    }

    acc.push(curr - 1);
    acc.push(curr + 1);
    return acc;
  }, []);

  return res;
};
