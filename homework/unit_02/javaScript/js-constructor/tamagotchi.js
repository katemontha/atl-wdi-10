console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function () {
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;

  this.cry = function () {
    this.foodInTummy --;
    console.log(foodInTummy);
    console.log("WAHH!!!");
  }
}

//create new Tamagotchis
var newTamagotchi1 = new Tamagotchi();
var newTamagotchi2 = new Tamagotchi();

newTamagotchi1.cry();
newTamagotchi2.cry();

//test out your Tamagotchies below via console.logs
