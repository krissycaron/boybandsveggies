var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = 0;

// Keep track of which veggie we're on in the loop
var currentVeggie = 0;

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  bandElement.innerHTML += "<div>" + currentBand + "</div>";
 // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
  veggieElement.innerHTML += "<div>" + currentVeggie + "</div>";
}

//must have a getElementByID to be able pull the ID from the html code in

// boybands.innerHTML += "this is the text inside the div"; This is a setter of text inside html 
// var thing = boybands(div id).innerHTML; this is only = because it gets the thing doesnt write it /getter/



