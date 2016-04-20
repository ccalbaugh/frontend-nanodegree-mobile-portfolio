Changes in main.js:

changePizzaSizes()
1. `var pizzaContainer = document.querySelectorAll(".randomPizzaContainer");` used this to encapsulate the document query in a variable and put outside the for loop so it wouldn't query the document on every iteration of the loop.
2. Completely removed the determineDX function

updatePositions()
1. take phase out of the for loop so it's not being calculated every iteration
2. created a phaseArray to store the 5 different positions
3. created a new for loop to iterate through and push those positions into phaseArray