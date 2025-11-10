

const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");
let target = '';

function search(e){

   e.preventDefault();
   console.log(e);
   target = searchField.value;
 
   searchField.value = '';
  featchData(target);
}

form.addEventListener("submit",search);

//searchFiled.addEventListener("submit",search);
const temperatureField = document.querySelector(".temp");
const city = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span")
//const localTime = document.querySelector(".time_location");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span")



//target = 'bangalore'

async function featchData(target) {
    try{
    let url = `https://api.weatherapi.com/v1/current.json?key=42f25c3e6b344bc292d170050251601&q=${target}& aqi=no`;
    const response=await fetch(url)
    const data = await response.json();

    //return data;
    console.log(data)

    let currentTemp = data.current.temp_c;
    let condition = data.current.condition.text;
    let locationName = data.location.name ;
    let localTime = data.location.localtime;
    let conditionEmoji = data.current.condition.icon;
    console.log(currentTemp,condition,locationName,localTime,conditionEmoji)

    updateDom(currentTemp,condition,locationName,localTime,conditionEmoji);
    }catch(error){
        console.log(error);
    }

    
}

//console.log(featchData(target))
function updateDom(temp,condition,location,time,emoji){
        temperatureField.innerText = temp;
        dateField.innerText = time;
        city.innerHTML = location;
        emojiField.src = emoji;
        weatherField.innerHTML = condition;
}