// Define the variables for the searchZip and searchButton elements
// const searchZip = document.querySelector(".zip_text");
// const searchButton = document.querySelector(".zip_button");

// Define the map and searchManager variables
let map, searchManager;

// // Define the event listener for the searchButton
// searchButton.addEventListener("click", ()=>{
//     // Clear any existing entities on the map
//     map.entities.clear();
//     // Get the value of the searchZip input field and pass it to the geocodeQuery function
//     geocodeQuery(searchZip.value);
//     getChargingStations(searchZip.value);
// });

// Define the getMap function
function getMap() {
    map = new Microsoft.Maps.Map(document.getElementById('Map'), {
        credentials: 'ApHe6VjWjdcpRgnX1GyXMg2pKn4T2uvRsjO9Fsv9U2xrhp-vkGjxHYF9JDbziwB1'
    });
}

// // Define the geocodeQuery function
// function geocodeQuery(query){
//     //Checks the user input to see if it is a 5 digit code
//     var isnum = /^\d+$/.test(query);
//     if(isnum && query.length == 5){
//         if(!searchManager){
//             Microsoft.Maps.loadModule("Microsoft.Maps.Search", function (){
//                 searchManager = new Microsoft.Maps.Search.SearchManager(map);
//                 geocodeQuery(query);
//             });
//         }else{
//             let searchRequest = {
//                 //The location on the map 
//                 where: "Zip Code " + query,
//                 callback: function(ret){
//                     if(ret && ret.results && ret.results.length > 0){
//                         var pin = new Microsoft.Maps.Pushpin(ret.results[0].location);
//                         map.entities.push(pin);

//                         map.setView({bounds: ret.results[0].bestView});
//                     };
//                 },
//                 errorCallback: function(exception){
//                     alert("No results found");
//                 }
//             };
//             searchManager.geocode(searchRequest);
//         };
//     };
// };

// // Define the function to retrieve the charging station data for the given zip code
// function getChargingStations(query) {
//     fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=ELEC&zip=${query}&api_key=Jjo0RAf7gFpOR5l10wLEnV81zgxXnfs3SI2khXgM `)
//     .then(response => response.json())
//     .then(data => {
//       // Parse the JSON response to extract the relevant information for each charging station
//       const chargingStations = data.fuel_stations.map(station => ({
//         location: new Microsoft.Maps.Location(station.latitude, station.longitude),
//         name: station.station_name,
//       }));

//       // Create a layer and add it to the map
//       const layer = new Microsoft.Maps.Layer();
//       map.layers.insert(layer);

//       // Counter for number of EVs
//       var evCount = 0;
      
//       // Loop through the array of charging station objects and create a pushpin for each one
//       chargingStations.forEach(station => {
//         const pushpin = new Microsoft.Maps.Pushpin(station.location, {
//           title: station.name,
//         });
//         layer.add(pushpin);
//         evCount += 1;
//       });

//       // Display the number of EVs on the page
//       const evCountSection = document.getElementById("EVs");
//       evCountSection.textContent = "Electric Vehicle Charger Locations in Area: " + evCount;
//     });
// }