// declaring classes in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

//class
class Something {
  constructor(name) {
    this.name = name; //no variable need to declear ahead of time
    this.myName = 7;
  }

  //function
  hello() {
    console.log(this.name)
  }

}

//creating new object
const s = new Something('tim');
s.hello();

// for practice
// Create a subclass
class SubClass extends Something {
  constructor(){
    super('asd');
  }

  static myFunction(){
    console.log("I am static");
  }
}

const subclass = new SubClass();
subclass.hello();

// add a property after the object has been instantiated
// class cannot have private variables
subclass.a = "hello world";
console.log(subclass.a);

// add a static function
// static function doesn't have to be instantiated in order to be use
//SubClass.myFunction();

// //prototype presiste after the exceution 
// SubClass.prototype.test = 4;
// const newTest = new SubClass();
// console.log(newTest);