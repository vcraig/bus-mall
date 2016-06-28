// Bus Mall

// global variables
var productArray = [];
var totalClicksCounter = 0;

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
var banana = new Product('usb','img/usb.jpg');
var bathroom = new Product('water-can','img/water-can.jpg');
var boots = new Product('wine-glass','img/wine-glass.jpg');
// add all other pic variables here

// display 3 random pics in a row
function show3Pics() {
//pic1st
  var pic1st = document.getElementById('pic1st');
  var pic1stRand = randIndex();
  pic1st.src = productArray[pic1stRand].path;
  productArray[pic1stRand].displayCount += 1;
  console.log(productArray[pic1stRand].name + ' displayCount is ' + productArray[pic1stRand].displayCount + ' and clickcount is ' + productArray[pic1stRand].clickCount);
//pic2nd
  var pic2nd = document.getElementById('pic2nd');
  var pic2ndRand = randIndex();
  pic2nd.src = productArray[pic2ndRand].path;
  productArray[pic2ndRand].displayCount += 1;
  // console.log(productArray[pic2ndRand].name + ' displayCount is ' + productArray[pic2ndRand].displayCount + ' and clickcount is ' + productArray[pic2ndRand].clickCount);
//pic3rd
  var pic3rd = document.getElementById('pic3rd');
  var pic3rdRand = randIndex();
  pic3rd.src = productArray[pic3rdRand].path;
  productArray[pic3rdRand].displayCount += 1;
  // console.log(productArray[pic3rdRand].name + ' displayCount is ' + productArray[pic3rdRand].displayCount + ' and clickcount is ' + productArray[pic3rdRand].clickCount);

  // picUsedPrior();
}
show3Pics();

// event listener
var imageContainer = document.getElementById('image-container');
imageContainer.addEventListener('click', handleImageClick);

// on click
function handleImageClick(event) {
  //add more things -- tally total clicks, which pic clicked, incerment number times each pic shown  -- SEE CODE PEN
  if (totalClicksCounter < 25) {
    show3Pics();
    totalClicksCounter++;
    console.log('Total click count is ' + totalClicksCounter);
    productArray[pic2ndRand].clickCount += 1;
    console.log(productArray[pic1stRand].name + ' and clickcount is ' + productArray[pic1stRand].clickCount);
    //need to associtate the click event with a specific products name and clickCount properties.

  }
  else {
    console.log('need to display the results button');
  }
}

function randIndex() {
  return Math.floor(Math.random() * productArray.length);
}
