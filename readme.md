# staticnodejsandexpresssite
# unit6-Static Node.js and Express Site
 
<p align="center"> Authored by Ian Lyles</p>
<p align="center">Updated on April 23rd, 2021</p>

## Detailed Description
* Project Overview
From TechDegree Instructions:

"In this project, you'll create a gorgeous portfolio site to showcase the great projects you've built. The site will contain a modern landing page, an about page where you'll have a chance to share contact info, practice your elevator pitch and talk a little about yourself, and a series of project pages to show off and detail at least your first five projects from this Techdegree.

You'll create a JSON file to store all the data about the projects you've created.

You'll use Pug to complete provided templates that utilize the JSON to generate the markup that is ultimately displayed in the browser.

You'll use Node.js and Express to:

Import the required dependencies
Link the JSON with the Pug templates
Set up routes to handle requests
Set up the middleware to utilize static files like CSS
Handle errors
Set up a server to serve the project
After building this project, you should have a comfortable working knowledge of Node.js, Express and Pug, setting up a server, handling requests, working with server-side JavaScript, and building a powerful and modern back end project. And you'll have an important new skill to make you more marketable as a Full Stack JavaScript Developer."

## USING THIS APPLICATION
- This app uses node.js. If you do not already have node.js installed, visit https://nodejs.org/en/download/ and install.
- After installing node, navigate to the root directory of the cloned repo in a as Command Prompt or Git Bash.
- Type in "npm install".
- To run the application, 'npm start'


## Notes Regarding Exceeds Expectations
- Style changes in styles.css and script.js
- Run app using 'npm start'
- errors render error pages 

### Style Changes 
- Style changes occur in styles.css beginning at line 366.  
  - Header hover effect
    - Using JS, I split the letters of a string into an array of letters, then map them each to hav a span tag, then rejoin them back into a string.  Then I added mouseover and mouseleave event listeners to each span to add and remove classes to create an individual letter hover effect.     
  - Alternating Sliding Images
    - Within the project pages, I changed the classes to alternate the translateX of the images so they would be start off the visible page.   Then I have an event listener on the 'scroll' of the window and pass it a funciton that changes the classes of the images if their bounding box top crosses a point relative to the innerheight of the window object.  Once this happens, the image slides into the center by changing tranformX to 0.  
  - Buttons styling
    - I added a button styling that I created in styles.css which are changed with :hover.  
  - General CSS styling
    - Color and font styling was changed.  
    - Hover effects over project links were changed to further highlight the focused project.  
    - Text shadows and box shadows added. 


## GIT HUB
-  Repository: https://github.com/icld/Unit6Project-letsgo.git

## Support and contact details
email Ian Lyles @ <ian@icldesign.com>

## Technologies Used

* JavaScript
* Node.js
* NPM
* Express
* Pug 
* VisualStudio Code
* Git
* GitHub
* Json

### License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE..

Copyright (c) 2020 **Ian Cameron Lyles**











