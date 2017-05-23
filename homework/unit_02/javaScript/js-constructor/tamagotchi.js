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
    console.log(this.name + "'s food = " + this.foodInTummy);
    console.log(this.name + ' says "WAHH!!!"');
  };
  this.puke = function () {
    //the instructions say to use the foodInTummy property again but I went ahead an assumed it meant health because it was the only one unused...
    this.health--;
    console.log(this.name + "'s health = " + this.health);
    console.log(this.name + ' isn\'t feeling so well... "Blughhh!"' )
  };
  this.yawn = function () {
    this.restedness--;
    console.log(this.name + " has current restedness of: " + this.restedness)
    console.log(this.name + ' is yawning...');
  };
  this.start = function () {
    var tamagotchi = this;
    this.hungerTimer = setInterval(function() {
      tamagotchi.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      tamagotchi.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      tamagotchi.puke();
    }, 20000);
  };
  this.stop = function () {
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  }
};

//create new Tamagotchis
var newTamagotchi1 = new Tamagotchi('Bruno', 'pup');
var newTamagotchi2 = new Tamagotchi('Cam', 'human');


//test out your Tamagotchies below via console.logs
newTamagotchi1.yawn();
newTamagotchi2.start();
