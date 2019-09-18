let data = [
    {
        "date":1538337600000,
        "temperature":{"night":-3,"day":2},
        "cloudiness":"Ясно",
        "snow":false,
        "rain":false},
      
        {"date":1538424000000,
         "temperature":{"night":0,"day":4},
         "cloudiness":"Облачно",
         "snow":false,
         "rain":true},
         
         {"date":1538510400000,
          "temperature":{"night":0,"day":1},
          "cloudiness":"Облачно",
          "snow":true,
          "rain":true
          }
      ];

let jsonData = JSON.stringify(data);
let weather = JSON.parse(jsonData);

for (let i = 0; i < weather.length; i++) {
    console.log(weather[i]);

    let boxForDate = document.createElement("div");
    let box = document.getElementById(`${i+1}_item`);
    box.append(boxForDate);
    boxForDate.append(weather[i]);
}
    
    
    