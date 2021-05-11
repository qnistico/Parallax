$( document ).ready(function() {
    new WOW().init();
  });

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let small_planet = document.getElementById('small_planet');
let planet_top_left = document.getElementById('planet_top_left');
let planet_top_right = document.getElementById('planet_top_right');
let planet_middle_left = document.getElementById('planet_middle_left');
let planet_middle_right = document.getElementById('planet_middle_right');
let btn = document.getElementById('btn');
let hero_content = document.getElementById('hero_content');
/*
let c1_flex_child = document.getElementById('c1_flex_child');
let c1_img = document.getElementById('c1_img');
*/


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.5 + 'px';
    small_planet.style.top = value * 0.84 + 'px';
    planet_top_left.style.top = value * 0.25 + 'px';
    planet_middle_left.style.top = value * 0.618 + 'px';
    planet_middle_left.style.left = value * -0.318 + 'px';
    planet_middle_right.style.top = value * .618 + 'px';
    planet_top_right.style.top = value * 0.618 + 'px';
    hero_content.style.marginBottom = value * -1+ 'px';
    /*
    c1_flex_child.style.marginTop = value * 0.25 + 'px';
    c1_img.style.marginTop = value * -0.25 + 'px';
    */
    
})

var timeoutId
window.addEventListener('scroll', function() {
  let value = window.scrollY;
  clearTimeout(timeoutId);
  
  small_planet.style.animationPlayState = 'paused';
  planet_top_left.style.animationPlayState = 'paused';
 planet_middle_left.style.animationPlayState = 'paused';
 planet_middle_right.style.animationPlayState = 'paused';
 planet_top_right.style.animationPlayState = 'paused';
 hero_content.style.animationPlayState = 'paused';

  
  timeoutId = setTimeout(function() {
    small_planet.style.animationPlayState = 'running';
    planet_top_left.style.animationPlayState = 'running';
   planet_middle_left.style.animationPlayState = 'running';
   planet_middle_right.style.animationPlayState = 'running';
   planet_top_right.style.animationPlayState = 'running';
   hero_content.style.animationPlayState = 'running';
  }, 100)

})

$(window).scroll(function() {
  if ($(window).scrollTop() >= 1) {
      $('.navbar').css('background', 'black');
  } else {
      $('.navbar').css('background', 'transparent');
  }
  
});