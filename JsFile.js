let data = [
        {"date":1568917988603,
         "temperature":{"night":-4,"day":10},
         "cloudiness":"Облачно",
         "snow":false,
         "rain":true},

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

function dayOfWeek(day, i) {
    let date = new Date (day.date);
    let dateNow = new Date();
    let dayWeek = date.getDay();
    if (dateNow.getFullYear() == date.getFullYear() && dateNow.getMonth() == date.getMonth() && dateNow.getDate() == date.getDate()) {
        dayWeek = "сегодня";
    }
    switch(dayWeek) {
        case 0: dayWeek = "воскресенье"; break;
        case 1: dayWeek = "понедельник"; break;
        case 2: dayWeek = "вторник"; break;
        case 3: dayWeek = "среда"; break;
        case 4: dayWeek = "четверг"; break;
        case 5: dayWeek = "пятница"; break;
        case 6: dayWeek = "суббота"; break;
    }
    
    let boxForDayOfWeek = document.createElement("div");
    let box = document.getElementById(`${i+1}_item`);
    box.append(boxForDayOfWeek);
    boxForDayOfWeek.append(dayWeek);
}

function dayOfMonth (day, i) {
    let date = new Date (day.date);
    let month = date.getMonth();
    switch(month) {
        case 0: month = "января"; break;
        case 1: month = "февраля"; break;
        case 2: month = "марта"; break;
        case 3: month = "апреля"; break;
        case 4: month = "мая"; break;
        case 5: month = "июня"; break;
        case 6: month = "июля"; break;
        case 7: month = "августа"; break;
        case 8: month = "сентября"; break;
        case 9: month = "октября"; break;
        case 10: month = "ноября"; break;
        case 11: month = "декабря"; break;
    }
    let boxForDayOfWeek = document.createElement("div");
    let box = document.getElementById(`${i+1}_item`);
    box.append(boxForDayOfWeek);
    boxForDayOfWeek.append(date.getDate() +" " + month);
}

function temperatureDay(day, i) {
    let temeprature = day.temperature.day;
    let boxForTemperatureDay = document.createElement("div");
    let box = document.getElementById(`${i+1}_item`);
    box.append(boxForTemperatureDay);
    boxForTemperatureDay.append("Днем +" + +temeprature);
}

function temperatureNight(day, i) {
    let temeprature = day.temperature.night;
    let boxForTemperatureNight = document.createElement("div");
    let box = document.getElementById(`${i+1}_item`);
    box.append(boxForTemperatureNight);
    boxForTemperatureNight.append("Ночью " + +temeprature);
}

function precipitation(day , i) {
    
    if (day.snow == false && day.rain == false) {
        let boxForPrecipitation = document.createElement("div");
        let box = document.getElementById(`${i+1}_item`);
        box.append(boxForPrecipitation);
        boxForPrecipitation.append("Без осадков");
    }
    else if (day.snow == false && day.rain == true) {
        let boxForPrecipitation = document.createElement("div");
        let box = document.getElementById(`${i+1}_item`);
        box.append(boxForPrecipitation);
        boxForPrecipitation.append("Дождь");
    } else {
        let boxForPrecipitation = document.createElement("div");
        let box = document.getElementById(`${i+1}_item`);
        box.append(boxForPrecipitation);
        boxForPrecipitation.append("Дождь со снегом");
    }
}



for (let i = 0; i < weather.length; i++) {
    console.log(weather[i]);

    dayOfWeek(weather[i], i);
    dayOfMonth(weather[i], i);
    temperatureDay(weather[i], i);
    temperatureNight(weather[i], i);
    precipitation(weather[i], i);
}
    
    
    