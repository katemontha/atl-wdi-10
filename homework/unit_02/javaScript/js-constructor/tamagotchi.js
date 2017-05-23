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
  this.puke = function () {
    //the instructions say to use the foodInTummy property again but I went ahead an assumed it meant health because it was the only one unused...
    this.health--;
    console.log('Health = ' + this.health);
    console.log(this.name + ' isn\'t feeling so well... "Blughhh!"' )
  }
  this.yawn = function () {
    this.restedness--;
    console.log(this.name + " has current restedness of: " + this.restedness)
    console.log("*Yawn*");
  }
}

//create new Tamagotchis
var newTamagotchi1 = new Tamagotchi('Cam', 'human');
var newTamagotchi2 = new Tamagotchi('Bruno', 'pup');


//test out your Tamagotchies below via console.logs
newTamagotchi1.puke();
newTamagotchi2.yawn();
