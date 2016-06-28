// Bus Mall

// PUT ONE RANDOM PIC on the page!!!

var productArray = [];
var counter = 0;
// Object Constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  productArray.push(this);    // push objects into ObjectBank
}

var bag = new Product('bag','img/bag.jpg');
var banana = new Product('banana','img/banana.jpg');
var bathroom = new Product('bathroom','img/bathroom.jpg');
// add all other pic variables here


function show3Pics() {
  var pic1 = document.getElementById('pic1');
  var pic2 = document.getElementById('pic2');
  var pic3 = document.getElementById('pic3');
  pic1.src = productArray[randIndex()].path;
  pic2.src = productArray[randIndex()].path;
  pic3.src = productArray[randIndex()].path;
}
show3Pics();

//add event listener
var imageContainer = document.getElementById('image-container');
imageContainer.addEventListener('click', handleImageClick);

function handleImageClick(event) {
  //add more things -- tally total clicks, whic pic clicked, incerment number times each pic shown  -- SEE CODE PEN
  console.log('it clicked');
  counter++;
  console.log('count is ' + counter);
  if (counter > 25) {
    show3Pics();
  }
}



function randIndex() {
  return Math.floor(Math.random() * productArray.length);
}



// for (var i=0; i<26, i++) {   // for testing duplicates
// }

// Function
// generate randNum -- a random number between 0 and 19
// // look at mdn docs
//
// Function // this func is to put one random pic on the page
// get the string value that corresponds to imageBank array index randNum
// access the DOM id "pic1"
// fill the img element with: "src="string value" ""
// append "src="string value" ""
