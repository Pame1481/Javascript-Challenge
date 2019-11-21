// from data.js

var tableData = data;

// LEVEL-1:

var tbody = d3.select("tbody");

function tablaNueva(tableData) {
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

tablaNueva(tableData);

var button = d3.select("#filter-btn");

button.on("click", function () {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputDate = inputElement.property("value");
  
  console.log(inputDate);
 

  var filteredData = tableData.filter(fecha => fecha.datetime === inputDate);

  console.log(filteredData);
  
  tablaNueva(filteredData);

});