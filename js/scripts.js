var Answer = function () {
  var one =parseInt(document.Number.one.value);
  var two =parseInt(document.Number.two.value);
  var three =parseInt(document.Number.three.value);

  var output = document.getElementById('output');


  if (one >= two + three || two >= one + three || three >= one + two) {
    alert("The inputed measurements cannot form a triangle");
  }else if (one===two || two===three || one===three){
    alert("This is an isosceles triangle");
  }else if (one===two && two===three){
     alert("This is an equilateral triangle");
  }else {
    alert("SCALENE TRIANGLE");
  }
  }
