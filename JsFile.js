let data = [
        {"date":1568981502816,
         "temperature":{"night":-4,"day":10},
         "cloudiness":"Облачно",
         "snow":false,
         "rain":true},

        {
        "date":1569024000000,
        "temperature":{"night":-3,"day":2},
        "cloudiness":"Ясно",
        "snow":false,
        "rain":false},
      
        {"date":1569110400000,
         "temperature":{"night":0,"day":4},
         "cloudiness":"Облачно",
         "snow":false,
         "rain":true},
         
         {"date":1569196800000,
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
        dayWeek = "Сегодня";
    }
    switch(dayWeek) {
        case 0: dayWeek = "Воскресенье"; break;
        case 1: dayWeek = "Понедельник"; break;
        case 2: dayWeek = "Вторник"; break;
        case 3: dayWeek = "Среда"; break;
        case 4: dayWeek = "Четверг"; break;
        case 5: dayWeek = "Пятница"; break;
        case 6: dayWeek = "Суббота"; break;
    }
    
    let boxForDayOfWeek = document.createElement("div");
    let box = document.getElementById(`${i+1}_item`);
    box.append(boxForDayOfWeek);
    boxForDayOfWeek.append(dayWeek);
    boxForDayOfWeek.classList.add("weatherBox__daysContainer__item__week");
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
    let boxForDayOfMonth = document.createElement("div");
    let box = document.getElementById(`${i+1}_item`);
    box.append(boxForDayOfMonth);
    boxForDayOfMonth.append(date.getDate() +" " + month);
    boxForDayOfMonth.classList.add("weatherBox__daysContainer__item__day");
}

function temperatureDay(day, i) {
    let temeprature = day.temperature.day;
    let boxForTemperatureDay = document.createElement("div");
    let box = document.getElementById(`${i+1}_item`);
    box.append(boxForTemperatureDay);
    boxForTemperatureDay.append("днем +" + +temeprature + '\u00B0');
    boxForTemperatureDay.classList.add("weatherBox__daysContainer__item__temperature__day");
}

function temperatureNight(day, i) {
    let temeprature = day.temperature.night;
    let boxForTemperatureNight = document.createElement("div");
    let box = document.getElementById(`${i+1}_item`);
    box.append(boxForTemperatureNight);
    boxForTemperatureNight.append("ночью " + +temeprature + '\u00B0');
    boxForTemperatureNight.classList.add("weatherBox__daysContainer__item__temperature__night");
}

function precipitation(day , i) {

    let boxForPrecipitation = document.createElement("div");
    
    if (day.snow == false && day.rain == false) {
        let box = document.getElementById(`${i+1}_item`);
        box.append(boxForPrecipitation);
        boxForPrecipitation.append("без осадков");
    }
    else if (day.snow == false && day.rain == true) {
        let box = document.getElementById(`${i+1}_item`);
        box.append(boxForPrecipitation);
        boxForPrecipitation.append("дождь");
    } else {
        let box = document.getElementById(`${i+1}_item`);
        box.append(boxForPrecipitation);
        boxForPrecipitation.append("дождь со снегом");
    }
    boxForPrecipitation.classList.add("weatherBox__daysContainer__item__temperature__precipitation");
    
}



for (let i = 0; i < weather.length; i++) {
    console.log(weather[i]);

    dayOfWeek(weather[i], i);
    dayOfMonth(weather[i], i);
    temperatureDay(weather[i], i);
    temperatureNight(weather[i], i);
    precipitation(weather[i], i);

}
    
    
    