// Bus Mall

// global variables
var productArray = [];
var counter = 0;

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
// add all other pic variables here

// display 3 random pics in a row
function show3Pics() {
  var pic1 = document.getElementById('pic1');
  var pic2 = document.getElementById('pic2');
  var pic3 = document.getElementById('pic3');
  pic1.src = productArray[randIndex()].path;
  pic2.src = productArray[randIndex()].path;
  pic3.src = productArray[randIndex()].path;
}
show3Pics();

// event listener
var imageContainer = document.getElementById('image-container');
imageContainer.addEventListener('click', handleImageClick);

// on click
function handleImageClick(event) {
  //add more things -- tally total clicks, which pic clicked, incerment number times each pic shown  -- SEE CODE PEN
  if (counter < 25) {
    show3Pics();
    counter++;
    console.log('click count is ' + counter);
    // add to this.clickCount = 0;
  }
  else {
    console.log('need to display the results button');
  }
}

function randIndex() {
  return Math.floor(Math.random() * productArray.length);
}
