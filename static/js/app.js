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
