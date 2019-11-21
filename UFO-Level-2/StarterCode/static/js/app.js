// from data.js

var tableData = data;

// LEVEL-2:

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
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

 var filteredData = tableData;

 if(inputDate) {

   filteredData = filteredData.filter(fecha => fecha.datetime === inputDate);

  console.log(filteredData);
  
 }
 if(inputCity) {

  filteredData = filteredData.filter(ciudad => ciudad.city === inputCity);

 console.log(filteredData);
 
}

if(inputState) {

  filteredData = filteredData.filter(estado => estado.state === inputState);

 console.log(filteredData);
 
}

if(inputCountry) {

  filteredData = filteredData.filter(pais => pais.country === inputCountry);

 console.log(filteredData);
 
}

if(inputShape) {

  filteredData = filteredData.filter(forma => forma.shape === inputShape);

 console.log(filteredData);
 
}
  tablaNueva(filteredData);

});


  
