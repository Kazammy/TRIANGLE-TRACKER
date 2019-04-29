var Answer = function () {
  var one =parseInt(document.Number.one.value);
  var two =parseInt(document.Number.two.value);
  var three =parseInt(document.Number.three.value);

console.log(one);
console.log(two);
console.log(three);
  var output = document.getElementById('output');


  if (one >= two + three || two >= one + three || three >= one + two) {
    alert("The inputed measurements cannot form a triangle");
  }else if (one===two || two===three || one===three){
    alert("This is an equilateral triangle");
  }else if (one===two && two===three && three!==one || one===two && two!==three && three===one || one!==two && two===three && three===one){
     alert("This is an isoscoles triangle");
  }else {
    alert("SCALENE TRIANGLE");
  }
  }
