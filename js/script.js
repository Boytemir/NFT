$(document).ready(function (){

    // header-container__menu start
    $('.header-container__menu-btn').click(function(){
        $('.header-container__menu-link').slideToggle(400)
    })
    // header-container__menu finish

    // counter start
    $('.namber').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter:$(this).text()
        },{
            duration: 1000,
            easing: 'swing',
            step:function(now){
                $(this).text(Math.ceil(now));
            }
        })
    })
    // counter finish
})


let navMenuX = document.querySelector('.nav-menu-x');
let faBars = document.querySelector('.fa-bars');
let navBarMenu = document.querySelector('.nav-bar__menu');

faBars.addEventListener('click', () => {
    navMenuX.style.right = '0px';
    navBarMenu.style.opacity = '1';
})

navMenuX.addEventListener('click', () => {
    navMenuX.style.right = '-100%';
    navBarMenu.style.opacity = '0';
})

navBarMenu.addEventListener('click', (e) => {
    e.stopPropagation();
})