var slider = document.getElementById("quantity");
var output = document.getElementById("range-output");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

lowercase = document.getElementById("lowercase").checked;
uppercase = document.getElementById("uppercase").checked;
numbers = document.getElementById("numbers").checked;
symbols = document.getElementById("symbols").checked;