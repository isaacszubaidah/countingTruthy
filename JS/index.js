// to count truthy values 
function countTruthy(arr) {
  console.log(arr, "arr")
  let count = 0;
  for (let item of arr) {
    if (item) {
      count++;
    }
  }
  return count;
}

// button click
function countAndDisplay() {
  const inputElement = document.getElementById('inputValues');
  const result = document.getElementById('result');
  const inputValues = inputElement.value.split(',').map(value => value.trim());
  const truthyCount = countTruthy(inputValues);

  result.textContent = `Number of truthy values: ${truthyCount}`;
}

// event listener for button
document.getElementById('getTruthyValues').addEventListener('click', countAndDisplay);