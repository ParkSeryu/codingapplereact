// bad
const bad = function () {
  console.log('bad');
};

// good
function good() {
  console.log('good');
}

console.log(bad());
console.log(good());
