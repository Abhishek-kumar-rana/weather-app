const apikey= "e9c8575e6598127ddd04e9d1f4b88cc2";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const tapi="https://api.openweathermap.org/data/2.5/weather?q=gumia&APPID=e9c8575e6598127ddd04e9d1f4b88cc2&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl +city+ "&APPID="+apikey);

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
        

        // document.querySelector(".weather").style.display = "none";



        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src="clear.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src="rain.png"
        }else if(data.weather[0].main == "Deizzle"){
            weatherIcon.src="drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src="mist.png"
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        document.querySelector(".weather-icon").style.display = "inline";

    }

   

} 

var city;


searchBtn.addEventListener("click",()=>{
    city=searchBox.value;
    if(city!=searchBox.value){
        document.querySelector(".weather").style.display = "none";
    }
    checkweather(searchBox.value);
})





