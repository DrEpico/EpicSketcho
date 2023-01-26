# EpicSketcho
Canvas Grid Creator
This code creates a grid of div elements that can be used as a canvas for drawing or coloring. The grid can be customized by selecting the number of rows and columns and the color of the pen.


Features
-Creates a grid of div elements with a specified number of rows and columns.
-Allows for customization of the grid size by providing button options for different canvas sizes.
-Allows for customization of the pen color by providing button options for different pen colors.
-Allows for drawing on the canvas by hovering over the div elements with the mouse.

How to use
-Select the desired canvas size by clicking on the corresponding button.
-Select the desired pen color by clicking on the corresponding button.
-Begin drawing on the canvas by hovering over the div elements with the mouse.
-Click on the reset button to clear the drawing.

Code Review by ChatGPT
-The code uses querySelectorAll to select all elements with the specified class, which is a more efficient way of selecting multiple elements with the same class.
-The addEventListener functions are written in a way that allows the user to draw on the canvas by hovering over the div elements with the mouse while holding down the left mouse button.
-The code uses a for loop to create the grid of div elements and sets the max-width of the container depending on the canvas size selected.
-The code uses arrow functions for the event listeners for more concise and cleaner code.

Additional enhancements
Add more color options for the pen.
Add ability to save the drawing.

