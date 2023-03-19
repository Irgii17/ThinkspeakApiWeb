//Navbar
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixNav = header.offsetTop;

  if(window.pageYOffset > fixNav){
    header.classList.add('navbar-fixed');
  }else{
    header.classList.remove('navbar-fixed');
  }
  }



//hamburger
const hamburger =document.querySelector('#hamb');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});



// api url
const api_url = "https://api.thingspeak.com/channels/2057240/feeds.json?api_key=ZWKHK09B5725JMJZ&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("field-1").innerHTML = obj.field1 + ' Cm';
      document.getElementById("field-2").innerHTML = obj.field2 + ' lux';
    });
}, 1000);


