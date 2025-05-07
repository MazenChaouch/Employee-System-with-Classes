abstract class Employee {
  protected name: string;
  private salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  abstract getRole(): string;
  getDetails(): string {
    return `${this.name}, ${this.getRole()}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  private _teamSize: number;

  constructor(name: string, salary: number, teamSize: number) {
    super(name, salary);
    this._teamSize = teamSize;
  }

  getRole() {
    return `Manager (${this._teamSize} team members)`;
  }

  get teamSize() {
    return this._teamSize;
  }
}

const myManager = new Manager("Alice", 75000, 5);

console.log(myManager.getDetails());

console.log(myManager.teamSize);
