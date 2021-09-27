//Sidebar
document.querySelector(".hamburger-menu").
addEventListener("click",()=>{
    document.querySelector(".container").classList
    .toggle("change");
})

var cookie_box = document.getElementById('cookie_box'),
     activeBtn = document.getElementById('activeBtn');

 activeBtn.addEventListener('click', function() {
     //UTC is time set by the world time standard
     document.cookie = "CookieBy=Sarika Shete; expires=" + new Date(2022, 0, 1).toUTCString();
     //This cookies expires after 30 days
     document.cookie = "Name=Sarika; max-age=" + 60 * 60 * 24 * 30;
     document.cookie = "LastName=Shete; max-age=" + 60 * 60 * 24 * 30;

     if (document.cookie) {
         //Hide the popup box
         cookie_box.classList.add('hide');
     } else {
         //If we block cookie setting then show this massege
         alert("cookie not set! Please allow this site from your browser cookie setting");
     }

 })

 function getCookieName(name) {
     var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
     return r ? r[1] : '';
 }
 var getCookieName = getCookieName('CookieBy');
 //alert(getCookieName)
 if (getCookieName === 'Sarika Shete') {
     //All time hide the popup box
     cookie_box.classList.add('hide');
 }