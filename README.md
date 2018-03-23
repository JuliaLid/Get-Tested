# Get Tested - Full-Stack App using Node, Express, and Sequelize

![logo_image](https://user-images.githubusercontent.com/31745567/37856214-3f921b84-2ec1-11e8-8551-f9a0e01192db.png)

## Project Overview:
**Problem:** Teenagers have fears and concerns regarding their sex life and contracting STDs. It’s not an easy topic of conversation with parents, and they’re the ones who control access to medical care. Internet search turns up a lot of scary-sounding symptoms, which further compound the fear.

**Solution:** Our app will be a judgement-free zone where teenagers and young adults can anonymously get information on what STD screening is recommended to them based on the type of sex they’re having. It will also provide them with a list of resources to get additional information.

## Project Requirements:
* Create a full-stack application 
* Use a Node and Express Web Server
* Be backed by a MySQL Database and ORM
* Have both GET and POST routes for retrieving and adding new data
* Be deployed using Heroku
* Have a polished frontend / UI
* Have folder structure that meets MVC Paradigm
* Incorporate a Basic Testing Framework
* Meet good quality coding standards (indentation, scoping, naming)
 
## Link to Deployed App
* [Tested](https://get-tested.herokuapp.com/)

## Cloning Instructions
1. Clone the repo.
2. Run `npm install` to install all dependencies in the root app folder on the local machine.
* It will include
3. Use mySQL Workbench to create a database `STDTEST_db`.
    * Tables will be automatically created using  `Sequelize` models when you start the server.
4. Use bash terminal to run command `npm run watch` or `node server.js` to initialize the server and establish a connection to the database.
5. Open a browser window and type `localhost:8080` as the URL.

## Technology Stack
* Front-End
    *  HTML5
    * CSS3
    * [Materialize](http://materializecss.com/) - front-end library
    * [Font Awesome](http://www.nightmarejs.org/)
    * [Google Maps API](https://developers.google.com/maps/)
    * JavaScript
    * jQuery
* Back-End
   * Node.js
    * npm packages
        * [`express`](https://www.npmjs.com/package/mysql) to handle routing.
        * [`body-parser`](https://www.npmjs.com/package/body-parser): body parsing middleware.
        * [`mysq`l](https://www.npmjs.com/package/mysql) for storing a table of survey-takers and STD testing
       * [`Sequelize`](https://www.npmjs.com/package/sequelize) for ORM
    * Testing framework and libraries
        * [Mocha](https://mochajs.org/) 
        * [Chai](http://www.chaijs.com/)
        * [Nightmare](http://www.nightmarejs.org/)
* [Heroku](https://www.heroku.com/) to deploy the app
    * JawsDB Remote Database connected to the Heroku app
## Authors

* **Julia Lidstrom** 
    * Architect, Back-End Development
* **Shannon Hart** - [GitHub](https://github.com/SilverTree18) 
    * Design, Front-End Development 
* **Nick Holmin** - [GitHub](https://github.com/niholm99)
    * Back-End Development
* **David Lopez** - [GitHub](https://github.com/dwlopez91)
    * PM, Testing
