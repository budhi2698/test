const prompt = require("prompt-sync")();


const number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}













//One-Way Data Binding: Unidirectional flow of data, either from the model to
//  the view or from the view to the model.
//<div>{{ dataFromModel }}</div>

// Two-Way Data Binding: Bidirectional flow of data, allowing automatic 
// synchronization between the model and the view.
//<input [(ngModel)]="dataFromModel">














// Two-Way Data Binding: Angular allows automatic synchronization of data between 
// the model (in the code) and the view (UI), reducing the need for manual 
// manipulation of the DOM.

// Modularity: Applications are built in a modular fashion, allowing developers
//  to organize code into reusable components. This promotes maintainability and 
//  scalability.

// Dependency Injection: Angular's dependency injection system makes it easier to 
// manage and test components by injecting dependencies rather than hard-coding 
// them.

// Directives: Angular introduces custom HTML tags and attributes, known as 
// directives, to extend HTML's functionality. Directives can be used to create 
// reusable components, attach behavior to elements, and manipulate the DOM.

// Services: Angular services provide a way to organize and share code across 
// different components. They are often used for tasks like fetching data from 
// a server or handling application-wide logic.

// Routing: Angular includes a powerful routing system that enables the creation 
// of SPAs with multiple views. It allows for navigation between different 
// components without requiring a full page reload.

// Forms: Angular provides a robust set of tools for handling forms, including 
// two-way data binding, form validation, and the ability to track form changes.









//sql 
//SELECT column1, column2 FROM table_name WHERE condition;
//INSERT INTO table_name (column1, column2) VALUES (value1, value2);
//UPDATE table_name SET column1 = value1 WHERE condition;
//DELETE FROM table_name WHERE condition;














//frewo
// Angular is a popular open-source web application framework maintained by Google 
// and a community of developers. It is used for building dynamic, single-page web 
// applications (SPAs) and provides a comprehensive set of tools and features for 
// front-end development. Angular is written in TypeScript, a superset of 
// JavaScript, and it extends HTML with additional syntax to create dynamic and 
// interactive user interfaces.















//framework.
// A framework is a pre-built structure or set of tools that provides a foundation 
// for developing software applications. It includes reusable code, libraries, and 
// conventions that help developers build and organize their code in a standardized 
// way. Frameworks aim to streamline the development process by offering a 
// structured approach to common tasks and challenges.














//npm install -g @angular/cli
//ng new project name?
//cd navigate your project 
//ng serve

// to generate component:
// cd your project
//ng generate component name

// to generate service
// ng generate service data

/// to create new 
// ng new p/N

















// Web APIs (HTTP/RESTful APIs): These are APIs that use the HTTP protocol and are accessible over the web. RESTful APIs, in particular, follow the principles of Representational State Transfer (REST) and are widely used for web development.

// SOAP APIs: Simple Object Access Protocol (SOAP) APIs use XML as their message format and can be transported over various protocols, including HTTP and SMTP. SOAP APIs are often used in enterprise-level applications.

// RPC APIs: Remote Procedure Call (RPC) APIs allow communication between different processes or applications on a network. They enable one program to request a service from another program.

// Library-Based APIs: These APIs provide a set of functions or procedures that a developer can use to perform specific tasks without exposing the underlying code. For example, standard libraries in programming languages often provide APIs.

// Hardware APIs: These APIs allow software to interact with hardware components. For instance, an operating system might provide APIs for applications to access printer functionality.

// Database APIs: These APIs provide a way for software to interact with databases. SQL (Structured Query Language) is often used for this purpose.

// Open APIs (Public APIs): APIs that are made available to developers and the public. They are designed to be easily accessible and are often documented for third-party developers to use.

// Internal APIs (Private APIs): APIs that are used within an organization and are not exposed to external developers. They facilitate communication and integration between different internal systems.