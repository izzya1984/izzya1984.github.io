const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=fdf9c5673f1c6f86e17c71e1acc931f8";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
//  console.log(jsObject); 

   var day= 1;
   for( let i = 0; i <jsObject.list.length; i++){
        if(jsObject.list[i].dt_txt.includes("18:00:00")){ 
            document.getElementById('temp' + day).textContent = jsObject.list[i].main.temp;
     
   var weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
   var fDay = new Date(jsObject.list[i].dt_txt);      
    
   document.getElementById('tIcon' + day).setAttribute('src', 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '.png'); 
    

      
        document.getElementById("day" + day).textContent = weekDays[fDay.getDay()];

        day++;
    }
         }
   });
    
 