/*Nav-bar*/
$(document).ready(function(){
    $(".ham-burger").click(function(){
        $(".nav").toggleClass("open");
        $(this).toggleClass("active");
    })
    $(".nav-link").click(function(){
        $(".nav").removeClass("open");
        $(".ham-burger").removeClass("active");
    })
})
/*Cursor*/
const cursor = document.querySelector('.cursor')
const cursor2 = document.querySelector('.cursor2')
document.addEventListener('mousemove' , function(e){
    cursor.style.cssText = cursor2.style.cssText = "top: " + e.clientY + "px;" + "left: " + e.clientX + "px;"
})
const nav_link = document.querySelectorAll('.nav-link')
nav_link.forEach(link =>{
    link.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor')
        cursor2.classList.add('link-grow_cursor2')
    })
    link.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor')
        cursor2.classList.remove('link-grow_cursor2')
    })
});
const social_media = document.querySelectorAll('.social-media')
social_media.forEach(links =>{
    links.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor')
        cursor2.classList.add('link-grow_cursor2')
    })
    links.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor')
        cursor2.classList.remove('link-grow_cursor2')
    })
});
/*Validate*/
function validate(){
    var email = document.querySelector('.txtb');
    var value = email.value;
    if(value == ''){
        email.classList.add('txtb_change');
        return false;
    }
    else{
        return true;
    }
}
/*Animation*/
document.addEventListener('scroll' , function(){
    var main_slogan = document.querySelector('.main_slogan');
    var second_slogan = document.querySelectorAll('.second_slogan');
    function loop(){
        if (isInViewport(main_slogan)){
            main_slogan.classList.add('visible');
        }
        else{
            main_slogan.classList.remove('visible');
        }
        second_slogan.forEach(el =>{
            if(isInViewport(el)){
                el.classList.add('slide-visible');
            }
            else{
                el.classList.remove('slide-visible');
            }
        });
    }
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    loop();
});




