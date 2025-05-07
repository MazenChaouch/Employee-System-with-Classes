# Employee Management System Assignment

## Problem Description

Design a TypeScript system with an abstract Employee class to store name, salary, and role, and a Manager class that inherits from it, including team size in the role description. Implement encapsulation, inheritance, and a method to return formatted employee details.

## Tasks

1. **Create an Abstract Employee Class**

   - Define an abstract class named `Employee`.
   - Add a constructor that takes two parameters: `name` (a string) and `salary` (a number).
   - Use the `protected` access modifier for the `name` property so it can be accessed by derived classes.
   - Use the `private` access modifier for the `salary` property to restrict direct access.
   - Declare an abstract method `getRole()` that returns a string. This method will be implemented by derived classes to specify the employee's role.
   - Implement a method `getDetails()` that returns a string in the format: `<name>, <role>, Salary: <salary>`. Use the `getRole()` method to get the role.

2. **Create a Manager Class**

   - Define a class named `Manager` that extends the `Employee` class.
   - Add a private property `_teamSize` (a number) to store the number of team members the manager oversees.
   - Create a constructor that takes three parameters: `name` (string), `salary` (number), and `teamSize` (number).
   - Call the parent class's constructor to initialize `name` and `salary`.
   - Initialize the `_teamSize` property with the `teamSize` parameter.
   - Implement the `getRole()` method to return a string in the format: `Manager (<teamSize> team members)`.
   - Add a getter method `teamSize` to allow read-only access to the `_teamSize` property.

3. **Test Your Code**
   - Create an instance of the `Manager` class with sample data (e.g., name: "Alice", salary: 75000, teamSize: 5).
   - Call the `getDetails()` method on the manager instance and print the result to the console.
   - Access the `teamSize` getter and print the team size to the console.
   - Verify that the output matches the expected format (e.g., "Alice, Manager (5 team members), Salary: 75000" for `getDetails()` and 5 for `teamSize`).

## Guidelines

- Use TypeScript syntax and ensure proper use of access modifiers (`protected`, `private`).
- Pay attention to inheritance and how the `super` keyword is used to call the parent class's constructor.
- Test your code thoroughly to ensure it works as expected.
- If you encounter errors, debug them by checking the TypeScript compiler messages or console output.
