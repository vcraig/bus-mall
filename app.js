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
var usb = new Product('usb','img/usb.jpg');
var water_can = new Product('water-can','img/water-can.jpg');
var wine_glass = new Product('wine-glass','img/wine-glass.jpg');
// add all other pic variables here

// display 3 random pics in a row
function show3Pics() {
//pic1st
  var pic1st = document.getElementById('pic1st');
  var pic1stRand = randIndex();
  pic1st.src = productArray[pic1stRand].path;
  pic1st.alt = productArray[pic1stRand].name;
  productArray[pic1stRand].displayCount += 1;
  pic1stImgName = productArray[pic1stRand].name;
//pic2nd
  var pic2nd = document.getElementById('pic2nd');
  var pic2ndRand = randIndex();
  pic2nd.src = productArray[pic2ndRand].path;
  pic2nd.alt = productArray[pic2ndRand].name;
  productArray[pic2ndRand].displayCount += 1;
  pic2ndImgName = productArray[pic2ndRand].name;
//pic3rd
  var pic3rd = document.getElementById('pic3rd');
  var pic3rdRand = randIndex();
  pic3rd.src = productArray[pic3rdRand].path;
  pic3rd.alt = productArray[pic3rdRand].name;
  productArray[pic3rdRand].displayCount += 1;
  pic3rdImgName = productArray[pic3rdRand].name;
}
show3Pics();

// event listener
var imageContainer = document.getElementById('image-container');
imageContainer.addEventListener('click', handleImageClick);

// click handler
function handleImageClick(event) {
  for (var i = 0; i < productArray.length; i++) {
    if (event.target.alt === productArray[i].name) {
      // console.log('event.target.alt === ',productArray[i].name);
      productArray[i].clickCount += 1;
      console.log('productArray[i].clickCount ', productArray[i].clickCount);
    }
  }
  if (totalClicksCounter < 25) {
    show3Pics();
    totalClicksCounter++;
    console.log('Total click count is ' + totalClicksCounter);

  }
  else {
    console.log('need to display the results button');
  }
}

function randIndex() {
  return Math.floor(Math.random() * productArray.length);
}
