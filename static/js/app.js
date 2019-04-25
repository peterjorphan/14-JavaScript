// LEVEL 1: Automatic Table and Date Search

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create function using d3 to append one table row `tr` for each ufo sighting object
function createTable (ufoSighting) {
  var row = tbody.append("tr");
  // Use d3 to append 1 cell per ufo sighting value
  Object.entries(ufoSighting).forEach(([key, value]) => {
    // Append a cell to the row for each value in the object
    var cell = row.append("td");
    cell.text(value);
  });
};

// Call the function to build the talbe for the entire set
data.forEach(createTable);

// Define filter function to trigger when the button is clicked
function filter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputField = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputField.property("value");
  console.log(inputValue);

  if (inputValue === '') {
    var filteredData = tableData;
  }
  else {
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  }
  
  console.log(filteredData);

  // Clear table
  // tbody.selectAll("td").remove()
  // tbody.selectAll("tr").remove()
  tbody.html('')
  
  // Recreate table using function
  filteredData.forEach(createTable);
};

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Attach events to the filter function
button.on("click", filter);
