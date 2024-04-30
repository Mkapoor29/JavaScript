// // 
// // A class lists the data and methods that every ClassName has.
// // A class is a kind of template for creating concrete objects of that type.
// // Each concrete objcet is called instance.
// // the process of creating an instance is performed by special function called a constructor. We pass values to the constuctor for any internal state that we want to initialisze the new instance.
// class Professor
//   {
//     // properties
//     name;
//     teaches;
    
//     constructor(names, teaches)
//     {
//       this.name = names;
//       this.teaches = teaches;
//     }
//     // method
//     introduceSelf(){
//       return (`Hello my name is ${this.name} and I teach ${this.teaches}`)
//     }
//   }

// let prof1 = new Professor('Abc','Physics');
// let prof2 = new Professor('Def','Maths');
// let prof3 = new Professor('Ghi','Chemistry');
// let prof4 = new Professor('Jkl','Geography');

// console.log(prof1.introduceSelf());


// 1) to create a class, you use the class keyword and then specify the name of class
// class Train
// {
//   // 2) Inside the curly braces ,the first piece of code that is defined is contructor. Constructor is a special function of a class
//   constructor(source, destination, running)
//   {
//     // 3) Inside constructor we assigned the passed-in 'source' parameter's value to this.source
//     this.source = source
//     this.destination = destination;
//     this.running = running;
//   }
//   isRunning()
//   {
//     console.log('Is running?: , ', this.running);
//   }
//   toggleRunning()
//   {
//     this.running = !this.running;
//   }
//   sourceStatus()
//   {
//     return ('I run from ', this.source);
//   }
//   destinationStatus()
//   {
//     return ('I go to ', this.destination);
//   }
//   introduce()
//   {
//     console.log('I run from ', this.source , 'And I go to ', this.destination, '.', 'Currently I am running?: ', this.running);
//   }
//   // getSelf() prints out the properties on the object instance it is called on.
//   getSelf()
//   {
//     console.log(this);
//   }

//   // The getPrototype() console logs the prototype of the object instance of the Train class. The prototype holds all the properties shared by all the object instances of the Train class. To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, the object instance inside of which this method is invoked.
//   getPrototype()
//   {
//     var proto = Object.getPrototypeOf(this);
//     console.log(proto);
//   }
// }

// let train1 = new Train('Amritsar', 'New Delhi', true);
// console.log(train1.introduce());
// train1.getSelf();
// train1.getPrototype();
// train1.isRunning();


// class Train {
//   constructor(color, lightsOn) {
//       this.color = color;
//       this.lightsOn = lightsOn;
//   }
//   toggleLights() {
//       this.lightsOn = !this.lightsOn;
//   }
//   lightsStatus() {
//       console.log('Lights on?', this.lightsOn);
//   }
//   getSelf() {
//       console.log(this);
//   }
//   getPrototype() {
//       var proto = Object.getPrototypeOf(this);
//       console.log(proto);
//   }
// }
// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}