let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let small_planet = document.getElementById('small_planet');
let planet_top_left = document.getElementById('planet_top_left');
let planet_top_right = document.getElementById('planet_top_right');
let planet_middle_left = document.getElementById('planet_middle_left');
let planet_middle_right = document.getElementById('planet_middle_right');
let planet_bottom_right = document.getElementById('planet_bottom_right');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value * .75 + 'px';
    small_planet.style.top = value * 2 + 'px';
    planet_top_left.style.top = value * 0.5 + 'px';
    planet_middle_left.style.left = value * 1.5 + 'px';
    planet_middle_right.style.top = value * -0.618 + 'px';
    planet_top_right.style.top = value * 1.25 + 'px';
    planet_bottom_right.style.left = value * -1.5 + 'px';
    text.style.marginTop = value * 1.65 + 'px';
    btn.style.marginTop = value * 1.75 + 'px';
    mountains_front.style.marginTop = value * 0.38 + 'px';
})