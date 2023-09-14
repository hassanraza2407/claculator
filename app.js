function display(value) {
  document.getElementById('result').value += value;
}

function allClear() {
  document.getElementById('result').value = '';
}

function deletelastcharacter() {
  var display = document.getElementById('result');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  var display = document.getElementById('result');
  try {
      var result = eval(display.value);
      display.value = result;
  } catch (error) {
      display.value = 'Error';
  }
}