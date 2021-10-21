# SNACK-Buzz

### Project Description

```
Snack buzz is basic e-commerse app with products listed by brand , user can select the products and add to the cart.
```

### Technologies

```
React JS
Redux
Redux-saga
Json-server
```

### pre-reqisites

```
- NodeJs - 14.15.0
- Json-server (npm install -g json-server)
- Java
```

### Main Stack

```
- HTML5
- CSS
- ECMAScript 6 (ES6)
- Javascript
- Jest
- Material UI
- react-multi-C
- react-router-dom
- json-server
```

### Objective while creating the app

Objective is to showcase my skill set in programing in the are of front end development using React and related enviroment.

Below I show you the packages I developed the application with:

- React (v17.0.1)
- HTTP client: Fetch
- Unit testing: Jest
- Routes management: react-router-dom
- Components design: react-dom
- Code formatters: ES-Linter
- CSS framework: Material UI
- server : json-server

React help in building single page application using reuseable components compatable with all major browsers,

I have used create react app boiler plate code to setup the project

Json-serve - help to create a fake backing enviroment for front end development when API calls are not avaliable but the the developer is aware of the schema and to keep the work moving. This is not a production releable resourse.

Material-UI gives the basic CSS, layout to quickly build the application. I have used it for the layout part.

react-multi-carousel - provides functionality for the carousels which i have used in the application to mimick the netflix (not full just to get that feel as it is part of requirment). Compatable with react

Es-linter - help to have a check on coding standards set in the industry.

react-router-dom - help to leverage routing capacity of the application (I hvent used much of it but wanted to add in the project to show case how I can set it up.)

yarn - packaging tool got with creat react app

Redux - Used for the state managment

Redux-saga - used for API managment

## Project setup

```
npm install -g json-server
npm  install (inside project directory)
```

### Compiles and hot-reloads for development

```
npm run server (to run the server for API data in post 3000 - please keep this port available)
npm start (to run the project on post 3006 - please keep the port available)
```

### Unit test

```
npm test (I have put the set up but not ready - need more time)
```

### Full Coverage

```
npm test -- --coverage --watchAll (I have put the set up but not ready - need more time)
```

### Application functionality.

Snack buzz is an e-commers application loads with the header and body layout. In header we can find app title and cart details.
Application body has full width carousel having 4 slides can be rotated with the arrows on both side. below that we can find list of product avaliable in multiple carousel from each brand.

when we click of the select option in the each carousel card specific details of the product is visible. by clicking on the add button the cart number is updated.

### available API calls

http://localhost:3000/HeroBanner - images for hero banner
http://localhost:3000/products - provide list of all products
http://localhost:3000/cart - to view products in cart.

### Things to work on

I have stared developing this app with an intent to show case my technical skill set in setting up the project architechture and flow. In the process i have acheved it but the obvios expected behavior is not full avaliable which requiers some more time to work on which I could not pull it of. I have spend 6 hr of effort on this app to bring it to the current stage.

These are few which can be worked on.

- unit testing step up of the application is done , needed more time to write the test case. Please have a look at the structur of the code.
- Navigation setup is done, I count not build any detailed pages for that.
- When user added a product to the cart I am making a post call which increment a cart value which can be viewed in http://localhost:3000/cart .
- user can only add unique products, validation and increment of the product functionality is not yet implemented.
- carousels and layout are in RWD but there is a missing in css when user clicks a select button.
- tried to set ci enviroment in travis did not find time
- need to fix few lint errors.
