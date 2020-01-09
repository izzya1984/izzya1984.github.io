const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=fdf9c5673f1c6f86e17c71e1acc931f8";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  // console.log(jsObject);
    
  document.getElementById('currently').textContent = jsObject.weather[0].description;
  //try
  document.getElementById('temperature').textContent = jsObject.main.temp ;
  
  document.getElementById('humidity').textContent = jsObject.main.humidity ;
  
  document.getElementById('windS').textContent = jsObject.wind.speed ;
 // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
//const desc = jsObject.weather[0].description;  // note how we reference the weather array
//ument.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//document.getElementById('icon').setAttribute('alt', desc);
 

  //calc wind chill
  var temp = jsObject.main.temp ;
var wSpeed = jsObject.wind.speed ;
var windChill = 35.74 + 0.6215 * temp + (0.4275 * temp- 35.75) * Math.pow(wSpeed, 0.16);

document.getElementById("wChill").textContent = parseInt(windChill);

});
