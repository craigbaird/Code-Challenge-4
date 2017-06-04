# Code Challenge - Week 5 (Mongo Databases and Full Stack Logic - Debug)
Assignment debugging a code base I'd never seen before

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
1. Download .zip of the project
2. npm install
3. npm start
4. type localhost:5000 into a browser

## Technologies Used
- JavaScript
- jQuery
- Express
- Node
- MongoDB

## Overview

This Code Challenge is different from the rest. This time, you will need to debug an existing code base. You will need your
complete knowledge of the past 4 weeks to successfully navigate the problems that are in the code.

Keep in mind, often debugging is stressful for a couple reasons:

* The problems are not obvious, especially when you did not write the code.

* The solutions are often simple. Have confidence in your solutions and move onto the next problem.

* Debugging code bases that are not yours takes time. Take your time to work through each of the steps.


In addition to making the changes to the code base to correct the code, update this README.md file to explain your solutions.
Meaning, in your own words, explain the problem and why your solution fixes the problem.


## TODO

### Base Mode
[X] - Mongo does not seem to be connecting correctly.
      // db.js line 3: changed local host from 2701 to 27017, which is the correct port necessary to connect to the db

[X] - The models have a conflict.
      // fixed lines 20 and 21 in listings.js changing the first values to "apartments" and "houses", respectively

[X] - Index.html is not being properly served.
      // app.js line 12: added .get route to get info from index.html
      // app.js line 13: added res.sendFile to resolve path which is required on line 3

[ ] - Posting information does not seem to come up correctly on the req.body as intended.

[X] - The information from the database is not being appended to the DOM.


### Hard Mode
[X] - All the information being appended on the DOM is not lining up together in their respective row.


### Pro Mode
[ ] - Not that you need to, but if you were to post this on Heroku, it would not work correctly.
