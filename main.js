let nav = document.querySelector('nav');
let popbackground = document.querySelector('.popbackground');
let buttons = document.querySelectorAll('.portfolio div ul li a');
let buttons_array = [...buttons];
let popup = document.querySelector('.popup')
let popimg = document.querySelector('.popup img')
let poptitle = document.querySelector('.pop_text h3')
let popdesc = document.querySelector('.pop_text p')
let poplink = document.querySelector('.pop_text a')

window.addEventListener('scroll', () => {
    nav.classList.toggle('shadow', window.scrollY > 0);
});

buttons_array.forEach(button => {
    button.onclick = function () {
        var sourceimg = button.children[0]
        popimg.src = sourceimg.src
        popimg.alt = sourceimg.alt
        poptitle.innerHTML = button.dataset.title
        popdesc.innerHTML = button.dataset.desc
        poplink.href = button.dataset.href
        popbackground.classList.add('showpop')
        popup.classList.add('showpop')
    }
});

popbackground.onclick = function () {
    popbackground.classList.remove('showpop')
    popup.classList.remove('showpop')
};