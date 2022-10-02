const one=document.getElementById('thumb_one')
const two=document.getElementById('thumb_two')
const three=document.getElementById('thumb_three')
const four=document.getElementById('thumb_four')
const lightbox=document.querySelector('.lb');
let inc=document.getElementById('inc')
let value=0


one.addEventListener('click', function(){
    document.getElementById('hero').src='image-product-1.jpg'
    one.style.opacity='75%'
    one.style.border='2px solid hsl(26, 100%, 55%)'
    two.style.opacity='1'
    two.style.border='none'
    three.style.opacity='1'
    three.style.border='none'
    four.style.opacity='1'
    four.style.border='none'
})
two.addEventListener('click', function(){
    document.getElementById('hero').src='image-product-2.jpg';
    two.style.opacity='75%'
    two.style.border='2px solid hsl(26, 100%, 55%)'
    one.style.opacity='1'
    one.style.border='none'
    three.style.opacity='1'
    three.style.border='none'
    four.style.opacity='1'
    four.style.border='none'
})
three.addEventListener('click', function(){
    document.getElementById('hero').src='image-product-3.jpg'
    three.style.opacity='75%'
    three.style.border='2px solid hsl(26, 100%, 55%)'
    one.style.opacity='1'
    one.style.border='none'
    two.style.opacity='1'
    two.style.border='none'
    four.style.opacity='1'
    four.style.border='none'
})
four.addEventListener('click', function(){
    document.getElementById('hero').src='image-product-4.jpg'
    four.style.opacity='75%'
    four.style.border='2px solid hsl(26, 100%, 55%)'
    one.style.opacity='1'
    one.style.border='none'
    three.style.opacity='1'
    three.style.border='none'
    two.style.opacity='1'
    two.style.border='none'
})
document.getElementById('hero').addEventListener('click', function(){
    if(innerWidth>950){
        lightbox.style.display='block'
    }
    else{
        lightbox.style.display='none'
    }
})
const cancel=document.getElementById('close')

cancel.addEventListener('mouseenter',() => {
    cancel.src='close.svg'
})

cancel.addEventListener('mouseleave',() => {
    cancel.src='icon-close.svg'
})
cancel.addEventListener('click',() => {
    lightbox.style.display='none'
})
inc.innerHTML=value
const minus=document.getElementById('minus')
const plus=document.getElementById('plus')

plus.addEventListener('click', function(){
    inc.innerHTML=value++
})
minus.addEventListener('click', function(){
    if(value>=0){
        inc.innerHTML=value--
    }
})

const open=document.getElementById('menu')
const menuu=document.getElementById('meniu')
const close=document.getElementById('cloxe')

open.addEventListener('click', ()=>{
    menuu.style.width='60%';
})
close.addEventListener('click', ()=>{
    menuu.style.width='0';
})
var slideIndex= 1;
showSlides(slideIndex);

function plusSlides(n){

    showSlides(slideIndex +=n);

}
function showSlides(n){
    var i;

    var slides=document.getElementsByClassName('mySlides')
    if(n== undefined){
        n= ++slideIndex
    }

    if(n > slides.length){
        slideIndex= 1
    }

    if(n < 1){
        slideIndex=slides.length
    }

    for (i = 0; i < slides.length; i++){

        slides[i].style.display='none'

    }
    slides[slideIndex -1].style.display='block';
}

var slideIndexx= 1;
showSlide(slideIndexx);

function Plus(n){

    showSlide(slideIndexx +=n);

}
function showSlide(n){
    var i;

    var slide=document.getElementsByClassName('mySlide')
    if(n== undefined){
        n= ++slideIndexx
    }

    if(n > slide.length){
        slideIndexx= 1
    }

    if(n < 1){
        slideIndexx=slide.length
    }

    for (i = 0; i < slide.length; i++){

        slide[i].style.display='none'

    }
    slide[slideIndexx -1].style.display='block';
}
one.addEventListener('mouseenter', ()=>{
    one.style.opacity='75%'
})
one.addEventListener('mouseleave', ()=>{
    one.style.opacity='1'
})
two.addEventListener('mouseenter', ()=>{
    two.style.opacity='75%'
})
two.addEventListener('mouseleave', ()=>{
    two.style.opacity='1'
})
three.addEventListener('mouseenter', ()=>{
    three.style.opacity='75%'
})
three.addEventListener('mouseleave', ()=>{
    three.style.opacity='1'
})
four.addEventListener('mouseenter', ()=>{
    four.style.opacity='75%'
})
four.addEventListener('mouseleave', ()=>{
    four.style.opacity='1'
})

const add=document.getElementById('add')
const To_cart=document.getElementById('To')
To_cart.addEventListener('click', function(){
    if(value>0){
    add.innerHTML=inc.innerHTML
    add.style.display="block"
    }
    else{
        add.style.display="none"
    }
})
const carte=document.getElementById('carte')
const cart=document.getElementById('cart')
const inner=document.getElementById('inner')
const alt=document.getElementById('alt')
const empty=document.getElementById('empty')
const kulosa=document.getElementById('kulosa')



carte.addEventListener('click',function(){
    cart.style.display='block'
    if(add.style.display="block"&&value>0){
        inner.style.display='block'
        alt.innerHTML=`$125 × ${value-1}`
        alt.style.marginTop='0'
        alt.style.color=' hsl(219, 9%, 45%)'
        empty.style.display='none'
    }
    else{
        empty.style.display='block'
        inner.style.display='none'
    }
})
kulosa.addEventListener('mouseenter',()=>{
    kulosa.src='close.svg'
})
kulosa.addEventListener('mouseleave',()=>{
    kulosa.src='icon-close.svg'
})
kulosa.addEventListener('click',()=>{
    cart.style.display='none'
});
const del=document.getElementById('delete')
del.addEventListener('click', ()=>{
    inner.style.display="none"
    empty.style.display='block'
    add.style.display='none'
    
})
const pre=document.getElementById('pre')
const next=document.getElementById('next')

pre.addEventListener('mouseenter',()=>{
    pre.src='previous.svg'
})

pre.addEventListener('mouseleave',()=>{
    pre.src='icon-previous.svg'
})


next.addEventListener('mouseenter',()=>{
    next.src='next.svg'
})

next.addEventListener('mouseleave',()=>{
    next.src='icon-next.svg'
})
