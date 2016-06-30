// Bus Mall
// global variables
var productArray = [];
var totalClicksCounter = 0;
var currentIndicies = [];
var firstIndex = 0;
var secondIndex = 0;
var thirdIndex = 0;

// Object Constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.displayCount = 0;
  this.clickCount = 0;
  productArray.push(this);    // push objects into productArray
}
var bag = new Product('bag','img/bag.jpg');
var banana = new Product('banana','img/banana.jpg');
var bathroom = new Product('bathroom','img/bathroom.jpg');
var boots = new Product('boots','img/boots.jpg');
var usb = new Product('usb','img/usb.jpg');
var water_can = new Product('water-can','img/water-can.jpg');
var wine_glass = new Product('wine-glass','img/wine-glass.jpg');
// add all other pic variables here

// make array of three unique random numbers, and don't repeat numbers from prior array.

function makeThreeIndicies() {
  var firstIndex = randIndex();
  while (firstIndex === currentIndicies[0] || firstIndex === currentIndicies[1] || firstIndex === currentIndicies[2]) {
    firstIndex = randIndex();
  }
  var secondIndex = randIndex();
  while (secondIndex === firstIndex || secondIndex === currentIndicies[0] || secondIndex === currentIndicies[1] || secondIndex === currentIndicies[2]) {
    secondIndex = randIndex();
  }
  // console.log(secondIndex, ' = secondIndex');
  var thirdIndex = randIndex();
  while (thirdIndex === firstIndex || thirdIndex === secondIndex || thirdIndex === currentIndicies[0] || thirdIndex === currentIndicies[1] || thirdIndex === currentIndicies[2]) {
    thirdIndex = randIndex();
  }
  // console.log(thirdIndex, ' = thirdIndex');
  currentIndicies = [firstIndex, secondIndex, thirdIndex];
  return currentIndicies;
}
// makeThreeIndicies();

// display 3 random pics in a row
function show3Pics() {
  var indicies = makeThreeIndicies();
  console.log(indicies);
//pic1st
  var pic1st = document.getElementById('pic1st');
  var pic1stRand = productArray[indicies[0]];
  pic1st.src = pic1stRand.path;
  pic1st.alt = pic1stRand.name;
  pic1stRand.displayCount += 1;
  pic1stImgName = pic1stRand.name;
//pic2nd
  var pic2nd = document.getElementById('pic2nd');
  var pic2ndRand = productArray[indicies[1]];
  pic2nd.src = pic2ndRand.path;
  pic2nd.alt = pic2ndRand.name;
  pic2ndRand.displayCount += 1;
  pic2ndImgName = pic2ndRand.name;
//pic3rd
  var pic3rd = document.getElementById('pic3rd');
  var pic3rdRand = productArray[indicies[2]];
  pic3rd.src = pic3rdRand.path;
  pic3rd.alt = pic3rdRand.name;
  pic3rdRand.displayCount += 1;
  pic3rdImgName = pic3rdRand.name;
}
show3Pics();

// event listener
var imageContainer = document.getElementById('image-container');
imageContainer.addEventListener('click', handleImageClick);

// click handler
function handleImageClick(event) {
  for (var i = 0; i < productArray.length; i++) {
    if (event.target.alt === productArray[i].name) {
      productArray[i].clickCount += 1;
      console.log('productArray[i].clickCount ', productArray[i].clickCount);
    }
  }
  if (totalClicksCounter < 25) {
    show3Pics();
    totalClicksCounter++;
    console.log('Total click count is ' + totalClicksCounter);
    localStorage.totalClicks = JSON.stringify(totalClicksCounter);

  }
  else {
    console.log('need to display the results button');
    var startButton = document.getElementById('hidebutton');
    // startButton.className = 'hidden';
    console.log('startButton is ', startButton);
    startButton.ID = 'blockbutton';
  }
}

function randIndex() {
  return Math.floor(Math.random() * productArray.length);
}


// button display to block
// get data arrays organized and gettable.
// calc the required array for the bar chart.
// display the chart
// error handling - clicks in container
// look and feel
// need to add reset style sheet

//Display results in table
// console.log('productArray.displayCount = ', productArray.displayCount);
// this.clickCount = 0;

// Use local storage to store your voting data! The goal is to have all of your data persist through a page refresh or through completely closing the browser. //access local storage on page load
