console.log(cityGrowths);

// We will need to:
// 1. Sort the cities in descending order of population growth.
// 2. Select only the top five cities in terms of growth.
// 3. Create separate arrays for the city names and their population growths.
// 4. Use Plotly to create a bar chart with these arrays.

// 1. 
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// 2.
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// 3.  **parseInt(city.Increase_from_2016) converts strings into integers; it's good practice to explicitly transform, or cast, strings into numbers
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityNames);
console.log(topFiveCityGrowths);

//4. 
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  // The variable data encloses trace in an array to meet Plotly's format requirement
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
