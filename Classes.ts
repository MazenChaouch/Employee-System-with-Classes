// class syntax typescript
class Person {
  // properties of Person
  name: string;
  protected age: number;
  private address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  greet(): string {
    return `${this.name} is ${this.age} ${this.address} `;
  }
}

class worker extends Person {
  start() {
    return `${this.age} ${/*this.address*/ ""}`;
  }
}
class manager extends worker {}

const marwen = new Person("Marwen", 25, "nabeul");
const mazen = new manager("Mazen", 24, "nabeul");

// console.log(marwen.greet());

// getters and setters
class User {
  private name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  get _name() {
    return this.name;
  }
  set _name(name: string) {
    this.name = name;
  }
}

const user = new User("Mazen", "m.chaouch007@gmail.com");
user._name = "Marwen";
// console.log(user._name);

// inheritance

class Admin extends User {
  delete() {
    return "deleting!";
  }
}

const admin = new Admin("Youssef", "Youssef@mail.com");

admin._name = "Zahra";

console.log(admin._name);

console.log(admin.delete());

abstract class Shape {
  abstract calculateArea(): number;
  describe(): string {
    return `Area: ${this.calculateArea()} `;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const wheele = new Circle(5);

console.log(wheele.describe());

abstract class Vehicle {
  abstract speed: number;

  running() {
    return `you are running at speed :${this.speed}`;
  }
}

class Car extends Vehicle {
  speed: number;
  constructor(speed: number) {
    super();
    this.speed = speed;
  }
}

class Bike extends Vehicle {
  speed: number;
  plate: string;
  constructor(speed: number, plate: string) {
    super();
    this.speed = speed;
    this.plate = plate;
  }

  wheelie(): string {
    return "great Wheelie!";
  }
}
const ford = new Car(120);
const honda = new Bike(98, "G123G4");

console.log(honda.running());
console.log(honda.plate);
console.log(ford.running());
