
//This function uses destructuring for argument parsing. But it has a problem:
//it crashes when the caller passes an option object without an enable property.
// Since all options have defaults, we'd like to not crash in this case.
//Can you think of a clean way to fix this problem?



function go(options) {
  let {
    speed = 4,
    enable: { hyperdrive=false, frobnifier=true} = {hyperdrive:true, frobnifier:false}
  } = options;

  console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
}

go({speed:5});

function lastIndexOf(arr, elt, start=arr.length) {
  for (let i = start - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));

function replace(array, from, to, elements) {
  //array.splice.apply(array, [from, to - from].concat(elements));
  array.splice(from,to-from,...elements);
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
//Warning : quand on fait un console.log comme ça la valeur testArray il essaie de me le foutre en String.
console.log("test Array "+testArray);
console.log(testArray);

function copyReplace(array, from, to, elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to));
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));
