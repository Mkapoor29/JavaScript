/*
          animal
          /  \
        Cat     Bird
        /  \      |
  HouseCat Tiger  Parrot
*/
class Animal
{
  constructor(color, energy)
  {
    this.color = color;
    this.energy= energy;
  }
  isActive()
  {
    if(this.energy <= 0)
      sleep();
    this.energy -= 20;
    console.log( this.energy );
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
    this.canFly = canfly;
  }
  makeSound()
  {
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
  }
}
class Tiger extends Cat
{
  constructor(tigerSound)
  {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
  }
  if(tigerSound)
  {
    super.makeSound()
    {
      
    }
    console.log(this.tigerSound);
  }
}
class Parrat extends Bird
{
  constructor(canTalk)
  {
    super(sound, canJumpHigh, canClimbTrees, color, energy)
  }
  super.makeSound()
  {
    
  }
}
