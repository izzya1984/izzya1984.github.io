var temp = parseFloat(document.getElementById('temperature').textContent);
var wSpeed = parseFloat(document.getElementById('windS').textContent);
var windChill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(wSpeed, 0.16);

document.getElementById("wChill").textContent = parseInt(windChill);
//console.log(windChill);
function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("hide");
} 
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numeric'};
document.getElementById("currentdate").textContent= new Date().toLocaleDateString('en-US', options);

WebFont.load({ google: {families: [ 'Slabo 27px']}});

  WebFont.load({ google: {families: ['Rubik']}});
 
  WebFont.load({ google: { families: ['Liu Jian Mao Cao']}});
 
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

  var day = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  
  var today = weekday[day.getDay()];
  if(today=="Friday"){
    //  console.log("I'll make you banana pancakes")
    document.getElementById("pancakes").innerHTML ="Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion." ;
  }