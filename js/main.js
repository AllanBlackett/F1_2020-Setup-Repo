let rangeslider = document.getElementsByClassName("rangeslider");
// let output = document.getElementById("demo");
// // let output2 = document.getElementById("demo2");

// output.innerHTML = rangeslider.value;
// output2.innerHTML = rangeslider.value;




// rangeslider.oninput = function() {
//   output.innerHTML = this.value;
//   document.getElementById("demo2").innerHTML = this.value;
// }

for(let i=0; i<(rangesliders.length); i++) {
  rangesliders[i].addEventListener('input', function() {
    document.getElementById(this.getAttribute('id')+'score').innerText = this.value;
  });
}