let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

let key = "71da4f442d2b08d1c0861421b8052a33"; 

let getWeather = () => {
  let cityValue = cityRef.value;
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.weather || data.weather.length == 0) {
          throw new Error("Invalid weather data");
        }
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1; 
let year = date.getFullYear();

let sunrise = new Date(data.sys.sunrise * 1000);
let sunset = new Date(data.sys.sunset * 1000);

let sunriseTime = `${sunrise.getHours().toString().padStart(2, '0')}:${sunrise.getMinutes().toString().padStart(2, '0')}`;
let sunsetTime = `${sunset.getHours().toString().padStart(2, '0')}:${sunset.getMinutes().toString().padStart(2, '0')}`;

let visibility = data.visibility;
let humidity = data.main.humidity;

result.innerHTML = `
<div class="header">
  <h2 class="city-name long-text">${data.name}</h2>
  <h4 class="date">${day}/${month}/${year}</h4>
</div>
<h4 class="desc">${data.weather[0].description}</h4>
<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;

let htmlString = `
  <h1>${data.main.temp}&#176;C</h1>
  <div class="temp-container">
      <div>
          <h4 class="title">min</h4>
          <h4 class="temp">${data.main.temp_min}&#176;C</h4>
      </div>
      <div>
          <h4 class="title">max</h4>
          <h4 class="temp">${data.main.temp_max}&#176;C</h4>
      </div>
  </div>
  <div class="info-container">
      <div>
          <h4 class="title">Sunrise</h4>
          <h4 class="sunrise">${sunriseTime}</h4>
      </div>
      <div>
          <h4 class="title">Sunset</h4>
          <h4 class="sunset">${sunsetTime}</h4>
      </div>
      <div>
          <h4 class="title">Visibility</h4>
          <h4 class="visibility">${visibility / 1000} km</h4>
      </div>
      <div>
          <h4 class="title">Humidity</h4>
          <h4 class="humidity">${humidity}%</h4>
      </div>
  </div>
`;

result.innerHTML += htmlString;

      })
      .catch((error) => {
        console.error(error);
        result.innerHTML = `<h3 class="msg">An error occurred: ${error.message}</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
