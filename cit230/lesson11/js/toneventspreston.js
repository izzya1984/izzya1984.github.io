const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];

      for (let i = 0; i < towns.length; i++) { //read through it
        if (towns[i].name == 'Preston') { //if the name is equal to
          let eCard = document.createElement('section');
          let eventTitle = document.createElement('h3');
          let eve1 = document.createElement('p');
          let eve2 = document.createElement('p');
          let eve3 = document.createElement('p');
          let pic = document.createElement('img');

          eCard.className = 'townevents';
          
          eventTitle.textContent = '2020 Events: ';
          eve1.textContent =  towns[i].events[0];
          
          eve2.textContent =  towns[i].events[1];
          
          eve3.textContent =  towns[i].events[2];
          pic.setAttribute('src', 'images/' + towns[i].photo);

          eCard.appendChild(eventTitle);
          eCard.appendChild(eve1);
          eCard.appendChild(eve2);
          eCard.appendChild(eve3); 
          eCard.appendChild(pic);
          // let threetowns= new array towns[1,3,4];
          document.querySelector('div.events').appendChild(eCard);
        }}
      });