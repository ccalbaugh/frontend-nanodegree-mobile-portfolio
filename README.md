###Changes in main.js
- var pizzasDiv = document.getElementById("randomPizzas"); was declared OUTSIDE the for loop
- var movingPizzas = document.getElementById("#movingPizzas"); was declared OUTSIDE the for loop
- document.getElementById("pizzaSize").innerHTML = "Large"; was changed from querySelector
-changePizzaSizes()
-1. `var pizzaContainer = document.querySelectorAll(".randomPizzaContainer");` used this to encapsulate the document query in a variable and put outside the for loop so it wouldn't query the document on every iteration of the loop.
-2. Completely removed the determineDX function
-
-updatePositions()
-1. take phase out of the for loop so it's not being calculated every iteration
-2. created a phaseArray to store the 5 different positions
-3. created a new for loop to iterate through and push those positions into phaseArray


###Changes in index.html
- this file now uses JS WebFonts instead of a css font call
- the code in style.css was inlined in the head as well

###Changes in style.css
- vendor prefixes were added to both style.css files

###Overview
This project was created by the team at Udacity and was improved by Ccalbaugh for didactic purpose
It has a main page that serves as a portfolio with other auxiliary pages serving as highlighted projects

###Getting started
Open `Index.html` in a browser and explore from there