# todoList-with-webpack

## Project Description
 > "To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. You will build a simple website that allows for doing that, and you will do it using ES6 and Webpack!


## Things done so far:

### 1. Create list structure

- Use custom-built Webpack boilerplate
- Implement app structure using classes
- Populate to-do list dynamically on page load
- Implement event listener using promise
- Configure repository to deploy from Webpack output directory

### 2. Make list interactive

- Track task status
- Implement Web Storage API for local storage of tasks


### 3. Adding Functionalites

- I remove all hardcoded items from the tasks `array`.
- I created a new JavaScript file for the new functionality.
- Implemented a function for adding a new task `(add a new element to the array)`.
- Implemented a function for editing task descriptions.
- Implemented a function for deleting a task `(remove an element from the array)`.
- Implemented a function for the "Clear all completed" button `(use filter() method)`.
- By default new tasks have the property completed set to false and the property index set to the value of the new` array length`.
- Deleting a task updates all remaining items' indexes, so they represent the current list order and are unique.
- All changes to the To Do List are saved in `local storage`.

## Built With

- Major languages: HTML, CSS, JS
- Technologies used: Lighthouse, Webhint, Stylelint, ESLint, Webpack


## Getting Started

To get a local copy up and running, follow the steps below in your terminal.

### Prerequisites

- Node.js
- npm

### Setup

Clone the project on CMD:

```
git clone https://github.com/alexander16108/todo-List.git
```

### Install

There are currently no production dependencies.

Install the development dependencies:

```
npm install
```

### Usage

The assets are in the `src` directory.

The output is in the `dist` directory.

<!-- ### Run tests

To run the entire test suite:

```
npm test
```
 -->
### Deployment

To build the website:

```
npm run build
```

To serve the website directly:

```
npm run start
```


## Screenshot of the page

![image](https://user-images.githubusercontent.com/60612329/134668112-861c82a2-d279-4602-872b-f44ac385fb1f.png)


### Live Version Link

 [Live Version](https://alex-todolist.netlify.app/)


### Contributors

***👤Alexander Mayowa Odufuye***

 GitHub : [@alexander16108](https://github.com/alexander16108)
 
 LinkedIn : [Alexander Odufuye]()
 
 

### 🤝 Contributing
Contributions, issues, and feature requests are welcome!

Feel free to check the issues page.

#### Show your support
Give a ⭐️ if you like this project!

#### Acknowledgments
- Microverse.org for assigning us this project

- The Amazing staff for working round the Clock to make our journey free of bumps.

- The amazing code reviewers for making us improve every day :thumbsup:

### Licence 

This Project is MIT licensed
