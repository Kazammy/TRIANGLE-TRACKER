var Answer = function () {
  var  =parseFloat(document.getElementsByName('one').value);
  var  =parseFloat(document.getElementsByName('two').value);
  var  =parseFloat(document.getElementsByName('three').value);

  var output = document.getElementById('output');

  
  if (one >= two + three || two >= one + three || three >= one + two) {
    alert("The inputed measurements cannot form a triangle");
  }else if (one===two || two===three || one===three){
    alert("This is an isosceles triangle")
  }
}
