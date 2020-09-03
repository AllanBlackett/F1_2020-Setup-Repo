// let rangeslider = document.getElementsByClassName("rangeslider");
// let output = document.getElementById("demo");
// // let output2 = document.getElementById("demo2");

// output.innerHTML = rangeslider.value;
// output2.innerHTML = rangeslider.value;




// rangeslider.oninput = function() {
//   output.innerHTML = this.value;
//   document.getElementById("demo2").innerHTML = this.value;
// }


var sliders = document.getElementsByClassName("slider");

for(var i=0; i<(sliders.length); i++) {
  sliders[i].addEventListener('input', function() {
    document.getElementById(this.getAttribute('id')+'score').innerText = this.value;
  });
}