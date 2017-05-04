window.onload = function() {
  var buttonOne = document.getElementById('buttonOne');
  buttonOne.addEventListener('click', function() {
    alert('you have clicked button one')
  });

  var buttonTwo = document.getElementById('buttonTwo');
    buttonTwo.addEventListener('click', function() {
      var par = document.createElement("p");
      par.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
      document.getElementById('information').appendChild(par);
   });

    var buttonThree = document.getElementById('buttonThree');
    buttonThree.addEventListener('click', function() {
      var par2 = document.getElementsByTagName("p")[0];
      document.getElementById('information').removeChild(par2)
    }
                                 )

}
