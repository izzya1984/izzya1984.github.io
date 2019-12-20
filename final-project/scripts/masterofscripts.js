WebFont.load({
    google: {
      families: [
         'Alex Brush'
      ]
    }
  });

  WebFont.load({
    google: {
      families: [
         'Poppins'
      ]
    }
  });
 
 
  const imagesToLoad = document.querySelectorAll('img[data-src]');

  const imgOptions={
      threshold:3,
      rootMargin: "0px 0px 50px 0px"
  };
  
  const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
  };
  
  if('IntersectionObserver' in window) {
      const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
          if(item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
          }
        });
      });
      imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
      });
    } else {
      imagesToLoad.forEach((img) => {
        loadImages(img);
      });
    }
    const requestURL = 'https://izzya1984.github.io/final-project/temples.json';

    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
          console.table(jsonObject);  // temporary checking for valid response and data parsing
          const temples = jsonObject['temple'];
    
          for (let i = 0; i < temples.length; i++) { //read through it
            if (temples[i].city == 'Lubbock') { //if the name is equal to
              let eCard = document.createElement('section');
              let eventTitle = document.createElement('h3');
              let phone = document.createElement('p');
              let eve2 = document.createElement('p');
              let eve3 = document.createElement('p');
              let eve4= document.createElement('p');
              let eve5 = document.createElement('p');
              let eve6 = document.createElement('p');
              let eve7 = document.createElement('p');
              let pic = document.createElement('img');
    
              
              eventTitle.textContent = '2020  Lubbock Temple Closures: ';
              phone.textContent =  'Phone: '+ temples[i].phone;
              
              eve2.textContent =  temples[i].closures[1];
              
              eve3.textContent =  temples[i].closures[2];
              
              eve4.textContent =  temples[i].closures[4];
              
              eve5.textContent =  temples[i].closures[5];
              
              eve6.textContent =  temples[i].closures[6];
              pic.setAttribute('src', 'images/' + temples[i].photo);
    
              eCard.appendChild(eventTitle);
              eCard.appendChild(eve2);
              eCard.appendChild(eve3); 
              
              eCard.appendChild(eve4);
              eCard.appendChild(eve5);
              eCard.appendChild(eve6); 
              eCard.appendChild(pic);
              // let threetowns= new array towns[1,3,4];
              document.querySelector('div.lubbock').appendChild(eCard);
              
              eCard.appendChild(phone);
            }
        
        }
             
          }
          
          
          );
          const requestURL2 = 'https://izzya1984.github.io/final-project/temples.json';
    
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
          console.table(jsonObject);  // temporary checking for valid response and data parsing
          const temples = jsonObject['temple'];
    
          for (let i = 0; i < temples.length; i++) { //read through it
            if (temples[i].city == 'Medford') { //if the name is equal to
              let eCard = document.createElement('section');
              let eventTitle = document.createElement('h3');
              let phone = document.createElement('p');
              let eve2 = document.createElement('p');
              let eve3 = document.createElement('p');
              let eve4= document.createElement('p');
              let eve5 = document.createElement('p');
              let eve6 = document.createElement('p');
              let eve7 = document.createElement('p');
              let pic = document.createElement('img');
    
              
              eventTitle.textContent = '2020 Medford Temple Closures: ';
              phone.textContent =  'Phone: '+ temples[i].phone;
              
              eve2.textContent =  temples[i].closures[1];
              
              eve3.textContent =  temples[i].closures[2];
              
              eve4.textContent =  temples[i].closures[4];
              
              eve5.textContent =  temples[i].closures[5];
              
              eve6.textContent =  temples[i].closures[6];
              pic.setAttribute('src', 'images/' + temples[i].photo);
    
              eCard.appendChild(eventTitle);
              eCard.appendChild(eve2);
              eCard.appendChild(eve3); 
              
              eCard.appendChild(eve4);
              eCard.appendChild(eve5);
              eCard.appendChild(eve6); 
              eCard.appendChild(pic);
              // let threetowns= new array towns[1,3,4];
              document.querySelector('div.medford').appendChild(eCard);
              
              eCard.appendChild(phone);
            }
        
        }
             
          }
          
          
          );
          const requestURL3 = 'https://izzya1984.github.io/final-project/temples.json';
    
          fetch(requestURL)
            .then(function (response) {
              return response.json();
            })
            .then(function (jsonObject) {
                console.table(jsonObject);  // temporary checking for valid response and data parsing
                const temples = jsonObject['temple'];
          
                for (let i = 0; i < temples.length; i++) { //read through it
                  if (temples[i].city == 'Kansas City') { //if the name is equal to
                    let eCard = document.createElement('section');
                    let eventTitle = document.createElement('h3');
                    let phone = document.createElement('p');
                    let eve2 = document.createElement('p');
                    let eve3 = document.createElement('p');
                    let eve4= document.createElement('p');
                    let eve5 = document.createElement('p');
                    let eve6 = document.createElement('p');
                    let eve7 = document.createElement('p');
                    let pic = document.createElement('img');
          
                    
                    eventTitle.textContent = '2020  Kansas City Temple Closures: ';
                    phone.textContent =  'Phone: '+ temples[i].phone;
                    
                    eve2.textContent =  temples[i].closures[1];
                    
                    eve3.textContent =  temples[i].closures[2];
                    
                    eve4.textContent =  temples[i].closures[4];
                    
                    eve5.textContent =  temples[i].closures[5];
                    
                    eve6.textContent =  temples[i].closures[6];
                    pic.setAttribute('src', 'images/' + temples[i].photo);
          
                    eCard.appendChild(eventTitle);
                    eCard.appendChild(eve2);
                    eCard.appendChild(eve3); 
                    
                    eCard.appendChild(eve4);
                    eCard.appendChild(eve5);
                    eCard.appendChild(eve6); 
                    eCard.appendChild(pic);
                    // let threetowns= new array towns[1,3,4];
                    document.querySelector('div.kcmo').appendChild(eCard);
                    
                    eCard.appendChild(phone);
                  }
              
              }
                   
                }
                
                
                );
                const requestURL4 = 'https://izzya1984.github.io/final-project/temples.json';
    
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
          console.table(jsonObject);  // temporary checking for valid response and data parsing
          const temples = jsonObject['temple'];
    
          for (let i = 0; i < temples.length; i++) { //read through it
            if (temples[i].city == 'Philadelphia') { //if the name is equal to
              let eCard = document.createElement('section');
              let eventTitle = document.createElement('h3');
              let phone = document.createElement('p');
              let eve2 = document.createElement('p');
              let eve3 = document.createElement('p');
              let eve4= document.createElement('p');
              let eve5 = document.createElement('p');
              let eve6 = document.createElement('p');
              let eve7 = document.createElement('p');
              let pic = document.createElement('img');
    
              
              eventTitle.textContent = '2020  Philadelphia Temple Closures: ';
              phone.textContent =  'Phone: '+ temples[i].phone;
              
              eve2.textContent =  temples[i].closures[1];
              
              eve3.textContent =  temples[i].closures[2];
              
              eve4.textContent =  temples[i].closures[4];
              
              eve5.textContent =  temples[i].closures[5];
              
              eve6.textContent =  temples[i].closures[6];
              pic.setAttribute('src', 'images/' + temples[i].photo);
    
              eCard.appendChild(eventTitle);
              eCard.appendChild(eve2);
              eCard.appendChild(eve3); 
              
              eCard.appendChild(eve4);
              eCard.appendChild(eve5);
              eCard.appendChild(eve6); 
              eCard.appendChild(pic);
              // let threetowns= new array towns[1,3,4];
              document.querySelector('div.phillycheessesteak').appendChild(eCard);
              
              eCard.appendChild(phone);
            }
        
        }
             
          }
          
          
          );
    
          
          const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5525577&units=imperial&APPID=fdf9c5673f1c6f86e17c71e1acc931f8";
          fetch(apiURL)
            .then((response) => response.json())
            .then((jsObject) => {
            // console.log(jsObject);
              
            document.getElementById('currently').textContent = jsObject.weather[0].description;
            //try
            document.getElementById('temperature').textContent = jsObject.main.temp ;
            
            document.getElementById('humidity').textContent = jsObject.main.humidity ;
            
            document.getElementById('windS').textContent = jsObject.wind.speed ;
           
          
            //calc wind chill
            var temp = jsObject.main.temp ;
          var wSpeed = jsObject.wind.speed ;
          var windChill = 35.74 + 0.6215 * temp + (0.4275 * temp- 35.75) * Math.pow(wSpeed, 0.16);
          
          document.getElementById("wChill").textContent = parseInt(windChill);
          
          });
          
          const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=5740099&units=imperial&APPID=fdf9c5673f1c6f86e17c71e1acc931f8";
          fetch(apiURL2)
            .then((response) => response.json())
            .then((jsObject) => {
            // console.log(jsObject);
              
            document.getElementById('currently2').textContent = jsObject.weather[0].description;
            //try
            document.getElementById('temperature2').textContent = jsObject.main.temp ;
            
            document.getElementById('humidity2').textContent = jsObject.main.humidity ;
            
            document.getElementById('windS2').textContent = jsObject.wind.speed ;
           
          
            //calc wind chill
            var temp = jsObject.main.temp ;
          var wSpeed = jsObject.wind.speed ;
          var windChill = 35.74 + 0.6215 * temp + (0.4275 * temp- 35.75) * Math.pow(wSpeed, 0.16);
          
          document.getElementById("wChill2").textContent = parseInt(windChill);
          
          });
    
          
          const apiURL3 = "https://api.openweathermap.org/data/2.5/weather?id=4393217&units=imperial&APPID=fdf9c5673f1c6f86e17c71e1acc931f8";
          fetch(apiURL3)
            .then((response) => response.json())
            .then((jsObject) => {
            // console.log(jsObject);
              
            document.getElementById('currently3').textContent = jsObject.weather[0].description;
            //try
            document.getElementById('temperature3').textContent = jsObject.main.temp ;
            
            document.getElementById('humidity3').textContent = jsObject.main.humidity ;
            
            document.getElementById('windS3').textContent = jsObject.wind.speed ;
           
          
            //calc wind chill
            var temp = jsObject.main.temp ;
          var wSpeed = jsObject.wind.speed ;
          var windChill = 35.74 + 0.6215 * temp + (0.4275 * temp- 35.75) * Math.pow(wSpeed, 0.16);
          
          document.getElementById("wChill3").textContent = parseInt(windChill);
          
          });
          
          const apiURL4 = "https://api.openweathermap.org/data/2.5/weather?id=4560349&units=imperial&APPID=fdf9c5673f1c6f86e17c71e1acc931f8";
          fetch(apiURL4)
            .then((response) => response.json())
            .then((jsObject) => {
            // console.log(jsObject);
              
            document.getElementById('currently4').textContent = jsObject.weather[0].description;
            //try
            document.getElementById('temperature4').textContent = jsObject.main.temp ;
            
            document.getElementById('humidity4').textContent = jsObject.main.humidity ;
            
            document.getElementById('windS4').textContent = jsObject.wind.speed ;
           
          
            //calc wind chill
            var temp = jsObject.main.temp ;
          var wSpeed = jsObject.wind.speed ;
          var windChill = 35.74 + 0.6215 * temp + (0.4275 * temp- 35.75) * Math.pow(wSpeed, 0.16);
          
          document.getElementById("wChill4").textContent = parseInt(windChill);
          
          });
           
    
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numeric'};
    document.getElementById("currentdate").textContent= new Date().toLocaleDateString('en-US', options);
      