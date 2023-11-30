let text = document.getElementById('content');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill-1');
let hill4 = document.getElementById('hill-4');
let hill5 = document.getElementById('hill-5');

window.addEventListener('scroll', () => {
    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight - windowHeight;
    let scrollPercentage = (window.scrollY / documentHeight) * 100;

    if(scrollPercentage<=50){
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    hill5.style.left = value * 1.2 + 'px';
    hill4.style.left = value * -1.2 + 'px';
    hill1.style.top = value * 1.2 + 'px';
    }
});
