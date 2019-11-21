// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function newTable(tableData) {
  tbody.html("");
  tableData.forEach((UFO) => {
    console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

newTable(tableData);

var button = d3.select("#filter-btn");

button.on("click", function () {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  
  console.log(inputValue);
 

  var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);
  
  newTable(filteredData);

});


  
