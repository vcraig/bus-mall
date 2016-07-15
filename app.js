// Bus Mall
// global variables
var productArray = [];
var totalClicksCounter = 0;
var currentIndicies = [];
var firstIndex = 0;
var secondIndex = 0;
var thirdIndex = 0;
var resultsButton = document.getElementById('resultsbutton');
var barChart;
var chartDrawn = false;

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
var water_can = new Product('water can','img/water-can.jpg');
var wine_glass = new Product('wine glass','img/wine-glass.jpg');
var chair = new Product('chair','img/chair.jpg');
var cthulhu = new Product('cthulhu','img/cthulhu.jpg');
var dogduck = new Product('dogduck','img/dogduck.jpg');
var pen = new Product('pen','img/pen.jpg');
var petsweep = new Product('petsweeper','img/petsweep.jpg');
var tauntaun = new Product('tauntaun','img/tauntaun.jpg');
var baby = new Product('baby','img/baby.png');
var dragon = new Product('dragon','img/dragon.png');
var scissors = new Product('scissors','img/scissors.png');
var shark = new Product('shark','img/shark.png');
var unicorn = new Product('unicorn','img/unicorn.png');
var bubblegum = new Product('bubblegum','img/bubblegum.jpg');
var breakfast = new Product('breakfast','img/breakfast.png');

// make array of three unique random numbers, unique against prior array.
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
  currentIndicies = [firstIndex, secondIndex, thirdIndex];
  return currentIndicies;
}

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
    chartArrays();
  }
  else {
    resultsButton.style.display = 'block';
    alert('You have completed your tasks successfully. Thank you for your help!');
  }
}

//Event listener
resultsButton.addEventListener('click', function(){
  makeChart();
  resultsButton.style.display = 'none';
});

function randIndex() {
  return Math.floor(Math.random() * productArray.length);
}

// =================
//MAKE CHART
// Arrays to hold chart data
var products = [];
var clicked = [];
var displayed = [];
var percentClicked = [];

function chartArrays() {
  for (var i = 0; i < productArray.length; i++) {
    products[i] = productArray[i].name;
    clicked[i] = productArray[i].clickCount;
    displayed[i] = productArray[i].displayCount;
    percentClicked[i] = (productArray[i].clickCount / productArray[i].displayCount).toFixed(2);
    localStorage.clicked = JSON.stringify(clicked);
    localStorage.displayed = JSON.stringify(displayed);
    localStorage.percentClicked = JSON.stringify(percentClicked);
  }
}
var data = {
  labels: products,
  datasets : [ {
    label: 'Number of Displays',
    backgroundColor: '#637BFF',
    data : displayed
  },
    {
      label: 'Number of Clicks',
      backgroundColor: '#FFD963',
      data: clicked
    }
]};

function makeChart() {
  var ctx = document.getElementById('resultschart').getContext('2d');
  barChart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      title: {
        display: true,
        text: 'Products Selected - This Test Session'
      }
    }
  });
  chartDrawn = true;
}
