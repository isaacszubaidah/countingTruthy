// to count truthy values 
function getTruthy(arr) {
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
  let inputElement = document.getElementById('inputValues');
  let result = document.getElementById('result');
  let inputValues = inputElement.value.split(',').map(value => value.trim());
  let truthyCount = getTruthy(inputValues);

  result.textContent = `Number of truthy values: ${truthyCount}`;
}

// event listener for button
document.getElementById('getTruthyValues').addEventListener('click', countAndDisplay);