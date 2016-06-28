#Plan for Bus Mall

Process from Nadia
after my pseudo
Get 3 random boxes
Click function
  Get console log that tells you which image slot you are clicking on
  console log the name of the object your're on
  get random
  start tabulating values
    tabulate viewed items
    tabul clicked items
    


## Business Reqs
* Orient to a lean startup who watches expenditures
* GOAL of web site: do market analysis on proposed products to test customer interest.
* Front end users: focus group participants, market analysts
* CREDIT Doug for image files

## Tech reqs
- consistent readable names for classes, functions, variables
- FOR A BETTER RESULT:
    - work in small chunks
    - plan your work. work your plan.
    - a-c-p frequently.

FLOW
* Look and feel - custom font, color palette, layout with SEMANTIC HTML.
* Display 3 random product images, in a row.
* Event: user click one image
* error handling for extraneous clicks
* Store click data
* Display 3 new random product images, WITHOUT repeating from prior display
* Iterate the click/storage cycle UNTIL user inputs 25 correct clicks
* After 25 correct clicks, display "show results" button AND disable user's ability to click.
* Data calcs:
    - per image - total number of clicks
    - per image - percentage of times that an image was clicked when it was displayed
    - per image - percentage of times that an image was displayed
    - calculations.
* Display data results on click of "show results link"






##Goals to complete by the start of class Tuesday morning

* Create a new repo for this weekly project called bus-mall at the root level of your ~/CF/201 directory.
* Scaffold your repo with the usual README, CSS, JS, and HTML files, plus a img/ directory.
* Retrieve the assets from the assets/ directory in the week-03 directory of our class repo and place them in your image directory.
* Write your user stories as described above and place them in a file called user-stories.md in your repo. Commit this file before coding. Utilize good Markdown style to make this document look nice.
* The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
* In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.
* Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.
* To do this, you'll want a constructor function that creates an object associated with each image, and has (at a minimum) properties for the name of the image, its filepath, the number of times it has been shown, and the number of times it has been clicked.
