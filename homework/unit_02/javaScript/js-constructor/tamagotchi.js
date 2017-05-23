console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function (name, creatureType) {
  this.name = name;
  this.creatureType = creatureType;
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;

  this.cry = function () {
    this.foodInTummy--;
    console.log('Food = ' + this.foodInTummy);
    console.log(this.name + ' says "WAHH!!!"');
  }
}

//create new Tamagotchis
var newTamagotchi1 = new Tamagotchi('Cam', 'human');
var newTamagotchi2 = new Tamagotchi('Bruno', 'pup');

newTamagotchi1.cry();
newTamagotchi2.cry();

//test out your Tamagotchies below via console.logs
