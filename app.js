var display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input; // Append the value to the display
}

function clearDisplay() {
  display.value = ""; // Clear the display
}

function calculate() {
  // Switch case to handle different operations
  switch (true) {
    case display.value.includes("+"):
      var addValues = display.value.split("+");
      display.value = Number(addValues[0]) + Number(addValues[1]);
      break;

    case display.value.includes("-"):
      var subValues = display.value.split("-");
      display.value = Number(subValues[0]) - Number(subValues[1]);
      break;

    case display.value.includes("*"):
      var mulValues = display.value.split("*");
      display.value = Number(mulValues[0]) * Number(mulValues[1]);
      break;

    case display.value.includes("/"):
      var divValues = display.value.split("/");
      // Check for division by zero
      if (Number(divValues[1]) === 0) {
        display.value = "Error";
      } else {
        display.value = Number(divValues[0]) / Number(divValues[1]);
      }
      break;

    default:
      display.value = "Error"; 
      break;
  }
}
