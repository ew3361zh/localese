let metroAreaCenterCoordinates = [44.95, -93.28] //lat, lon
let zoomLevel = 11.5 //large city - zoom levels start at 1 (whole world), got to 20 (few city blocks)

//create map
let map = L.map('local_mpls').setView(metroAreaCenterCoordinates, zoomLevel) //leaflet function and variable from js library imported in html

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let audio = new Audio('bde1.mp3')
let audio2 = new Audio('bde2.mp3')

pronunciations =  [
    {
    "name": "Bde Maka Ska", 
    "about": "Lake for canoeing, swimming & windsurfing, with adjacent parks & trails for biking, skating & more.", 
    "coordinates": [44.94573489633746, -93.31118480553445], 
    "pronunciation1": `<a href="BdeMakaSka1.mp3">Top Voted 'Bde Maka Ska' Pronunciation mp3</a>`,
    "pronunciation2": `<a href="BdeMakaSka1.mp3">Second Highest Voted Pronunciation mp3</a>`,
    "pronunciation3": `<a href="record.cloud.net">Record Your Own Pronunciation!</a>`
    }, 
    {
    "name": "Minnehaha Falls", 
    "about": "Cycling, walking & seasonal wading pools are big draws to this park and its cascading falls.", 
    "coordinates": [44.91599840365733, -93.21087189428759],
    // "localese": AUDIO FILE(s)
    }, 
    {
    "name": "Keewaydin", 
    "about": "Keewaydin is a neighborhood in the Nokomis community in Minneapolis, MN.", 
    "coordinates": [44.91010006236746, -93.23553587490214], 
    // "localese": AUDIO FILE(s)
    }, 
    {
    "name": "Lake Nokomis", 
    "about": "Human-made lake with boat & kayak rentals, plus swimming beaches, waterside parks & bike trails.", 
    "coordinates": [44.90924420591274, -93.24206041757895],
    // "localese": AUDIO FILE(s)
    }, 
    {
    "name": "Wenonah", 
    "wabout": "Wenonah is a neighborhood on the southeast side of Minneapolis, MN.", 
    "coordinates": [44.9018873462013, -93.2323261270297],
    // "localese": AUDIO FILE(s) 
    },
    {
    "name": "Larpenteur Ave", 
    "wabout": "Avenue stretching from Eastern Minneapolis through St. Paul, MN", 
    "coordinates": [44.99231193672893, -93.19996666697156],
    // "localese": AUDIO FILE(s) 
    },
    {
    "name": "Bottineau", 
    "wabout": "Bottineau is a neighborhood in the Northeast community of Minneapolis, MN.", 
    "coordinates": [45.00816362466276, -93.26811125933746],
    // "localese": AUDIO FILE(s) 
    },
    {
    "name": "Armatage", 
    "wabout": "Armatage is a neighborhood in the Southwest community of Minneapolis, MN.", 
    "coordinates": [44.89792331426037, -93.31078894889139],
    // "localese": AUDIO FILE(s) 
    },
    {
    "name": "Gaviidae Common", 
    "wabout": "Gaviidae Common is a shopping mall in downtown Minneapolis, MN", 
    "coordinates": [44.97738155718557, -93.2713889026823],
    // "localese": AUDIO FILE(s) 
    },
    {
    "name": "Edina", 
    "wabout": "Edina is a city in Hennepin County, MN.", 
    "coordinates": [44.88971719914871, -93.35017478705458],
    // "localese": AUDIO FILE(s) 
    },
]

pronunciations.forEach( function(info) {
    let coordinates = info.coordinates
    let name = info.name
    let about = info.about
    let hear1 = info.pronunciation1
    let hear2 = info.pronunciation2
    let hear3 = info.pronunciation3
    let popupString = `<b>${name}</b><br>About: ${about}
                        <br><img src="bullhorn.png" alt="Bullhorn Icon in Black" title="Bullhorn", height="20px" width="20px">${hear1}<br>
                        <br><img src="bullhorn.png" alt="Bullhorn Icon in Black" title="Bullhorn", height="20px" width="20px">${hear2}<br>
                        <br><img src="bullhorn.png" alt="Bullhorn Icon in Black" title="Bullhorn", height="20px" width="20px">${hear3}`
    let marker = L.marker(coordinates)
        .bindPopup(popupString)
        .addTo(map)
})