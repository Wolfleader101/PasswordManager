var slider = document.getElementById("quantity");
var output = document.getElementById("range-output");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

function Check() {
    lowercase = document.getElementById("lowercase").checked;
    uppercase = document.getElementById("uppercase").checked;
    numbers = document.getElementById("numbers").checked;
    symbols = document.getElementById("symbols").checked;

    if (lowercase === true) {
      console.log("lowercase");
      console.log("===========================================");

      if (uppercase === true) {
        console.log("lowercase + uppercase");
        console.log("===========================================");
        
      }
      if (numbers === true) {
        console.log("lowercase + numbers");
        console.log("===========================================");
      }
      if (symbols === true) {
        console.log("lowercase + symbols");
        console.log("===========================================");
      }


    }else if (uppercase === true) {
      console.log("uppercase");
      console.log("===========================================");

      if (numbers === true) {
        console.log("uppercase + numbers");
        console.log("===========================================");
      }
      if (symbols === true) {
        console.log("uppercase + symbols");
        console.log("===========================================");
      }

      // NUMBERS, SYMBOLS
    }else if (numbers === true) {
      console.log("numbers");
      console.log("===========================================");
      if (symbols === true) {
        console.log("numbers + symbols");
        console.log("===========================================");
      }

      // SYMBOLS
    }else if (symbols === true) {
      console.log("numbers + symbols");
      console.log("===========================================");
    }

}