// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


console.log(data);

data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

var button = d3.select("#filter-btn");


var form = d3.select("#form");


button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {

  
  d3.event.preventDefault();
  
  
  var inputElement = d3.select("#datetime");

  
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  tbody.html("")
  console.log(filteredData);
  filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
};