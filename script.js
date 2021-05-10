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

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.5 + 'px';
   // moon.style.top = value * .75 + 'px';
    small_planet.style.top = value * 0.35 + 'px';
    planet_top_left.style.top = value * -0.1 + 'px';
    planet_middle_left.style.top = value * 0.618 + 'px';
    planet_middle_left.style.animationPlayState = 'paused';

    planet_middle_left.style.left = value * -0.318 + 'px';
    planet_middle_right.style.top = value * .618 + 'px';
    planet_top_right.style.top = value * 0.618 + 'px';
    hero_content.style.marginBottom = value * -1+ 'px';
})

