let result = document.getElementById('result');

function clearResult() {
  result.value = '';
}

function appendValue(value) {
  result.value += value;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
