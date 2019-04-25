// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row `tr` for each ufo sighting object
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    // Use d3 to append 1 cell per ufo sighting value
    Object.entries(ufoSighting).forEach(([key, value]) => {
      // Append a cell to the row for each value in the object
      var cell = tbody.append("td");
      cell.text(value);
    });
});

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

// Define filter function to trigger when the button is clicked
function filter() {
  console.log("A button was clicked!");

  // Use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}


// Attach an event to the filter function
button.on("click", filter);