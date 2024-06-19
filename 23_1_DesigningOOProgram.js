/*
          animal
          /  \
        Cat     Bird
        /  \      |
  HouseCat Tiger  Parrot
*/
class Animal
{
  constructor(color = 'yellow', energy = 100)
  {
    this.color = color;
    this.energy= energy;
  }
  isActive()
  {
    if(this.energy <= 0)
      this.sleep();
    else 
    {
      this.energy -= 20;
      console.log( this.energy );
    }
  }
  sleep()
  {
    this.energy += 20;
    console.log( "Energy is increasing, currently at: ", this.energy );
  }
  getColor()
  {
    console.log(this.color);
  }
    
}
class Cat extends Animal
{
  constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy)
  {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }
  makeSound()
  {
    console.log( this.sound );
  }
          
}
class Bird extends Animal
{
  constructor(sound = 'chirp' , canFly = true , color, energy)
  {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound()
  {
    console.log(1);
    console.log( this.sound );
  }
}
class HouseCat extends Cat
{
  constructor(houseCatSound = 'meow',sound , canJumpHigh , canClimbTrees , color, energy )
  {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option)
  {
    if(option)
    {
      super.makeSound();
    }
    console.log(this.houseCatSound);        
  }
}
class Tiger extends Cat
{
  constructor(tigerSound = 'Roar!, ', sound, canJumpHigh, canClimbTrees, color, energy)
  {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
   makeSound(option)
   {
          if(option)
          {
            super.makeSound();
          }
    console.log(this.tigerSound);
   }
}

class Parrot extends Bird
{
  constructor(canTalk = false, sound, canFly, color, energy)
  {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option)
   {
          if(option)
          {
            super.makeSound();
          }
          if(this.canTalk)
          {
            console.log("Im a talking parrot.");
          }
   }
}


// var birdy = new Bird();
// birdy.makeSound();

var polly = new Parrot(true); // passing true to constructor so that polly can talk
polly.makeSound(); // Im a talking parrot.
polly.makeSound(true); // chirp, Im a talking parrot.

var fiji = new Parrot(false);
fiji.makeSound(true); // chirp
fiji.makeSound(); // undefined

console.log(polly.color);
console.log(polly.energy);

polly.isActive();

var penguin = new Bird('shriek' , false, 'black and white', 200);
console.log(penguin.sound);
console.log(penguin.canFly);
console.log(penguin.color);
console.log(penguin.energy);
penguin.isActive();

var leo = new HouseCat();
leo.makeSound(); // meow
leo.makeSound(true); // purr, meow

var tigger = new Tiger();
tigger.makeSound(false); // Roar!
tigger.makeSound(true); // purr, Roar!
