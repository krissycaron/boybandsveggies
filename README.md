
#BoyBands and Veggies

### Image

(https://github.com/krissycaron/boybandsveggies/blob/master/BoyBands_veggies.png)



#### Link to the Assignment
[Boybands and Veggies](https://github.com/nashville-software-school/front-end-milestones/blob/master/2-the-static-web/exercises/SW_JS_BOYBANDS.md)

#### Languages Used
- Markdown
- Html
- CSS 
- Javascript

#### Objectives

1. Loop through two arrays using a for loop in JS.
2. Out put the Arrays to the DOM in there own <div> elements. 

##### boilerplate code given for assignment

###### HTMl

```
<div id="boy-bands">
</div>

<div id="vegetables">
</div>
```

###### javascript

```
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById(???);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = ???;

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>
  currentBand = ???;

  
  // Add the veggie names into the correct <div>
  currentVeggie = ???;

}
```






