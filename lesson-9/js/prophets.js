
 const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

 fetch(requestURL)
   .then(function (response) {
     return response.json();
   })
   .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
     const prophets = jsonObject['prophets'];
     for (let i = 0; i < prophets.length; i++ ) {
         let card= document.createElement('section');
         console.log(card);
         let h2 = document.createElement('h2');
         console.log(h2);
         console.log("all good");//everything works till this point
 
         
         h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
         
        card.appendChild(h2);
         
         document.querySelector('div.cards').appendChild(card);
     }
   });