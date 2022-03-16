// URL to SpaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console
// The d3.json().then() method ensures that the data is received before executing the arrow function (finish before moving on to the next code)
d3.json(url).then(receivedData => 
        console.log(receivedData));

// use indexing to retrieve only the first element in the array returned from the API call
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// access the properties within the object using .append to extract the full name of the first site
d3.json(url).then(spaceXResults => 
    console.log(spaceXResults[0].full_name));

// access the latitude of the Vandenberg Airforce Base
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));   

// Skill Drill: Use map() to print only the latitude and longitude coordinates of each SpaceX launch station
// NOT WORKING
