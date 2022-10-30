
var mainimg = document.getElementById("mainimg")
var smallimg = document.getElementsByClassName("small")
console.log(smallimg);
if(smallimg&&smallimg.length>0){
    smallimg[0].onclick = function(){
        mainimg.src =smallimg[0].src
    }
    smallimg[1].onclick = function(){
        mainimg.src =smallimg[1].src
    }
    smallimg[2].onclick = function(){
        mainimg.src =smallimg[2].src
    }
    smallimg[3].onclick = function(){
        mainimg.src =smallimg[3].src
    }
     
}

// video slider document.querySelectorAll
// first video player
 var slide = document.querySelectorAll(".vidcon");
 console.log(slide);
var counter =0;
slide.forEach((vidcon,index) => {
    vidcon.style.left = `${index * 100}% `   
});

const goPrev = () => {
    counter--
    slideImage();
   
}
const goNext = () => {
    counter++
    slideImage();
    if(counter==3){
        counter=1
        counter++
    slideImage();
    }
}

const slideImage =() => {
    slide.forEach(
        (vidcon) =>{
            vidcon.style.transform = `translateX(-${counter * 100}%)`
        }
    )}
// vidplayer 2
var slide1 = document.querySelectorAll(".vidcon1");
console.log(slide1);
var counter1 =0;
slide1.forEach((vidcon1,index) => {
   vidcon1.style.left = `${index * 100}% `   
});

const Prev = () => {
   counter1--
   slideImage1();
  
}
const Next = () => {
   counter1++
   slideImage1();
   if(counter1==3){
    counter1=1
    counter1++
slideImage1();
}
   
}

const slideImage1 =() => {
   slide1.forEach(
       (vidcon1) =>{
           vidcon1.style.transform = `translateX(-${counter1 * 100}%)`
       }
   )}
// vidplayer 2
var slide2 = document.querySelectorAll(".vidcon2");
console.log(slide2);
counter2=0;
slide2.forEach((vidcon2,index)=>{
    vidcon2.style.left=`${index * 100}%`
});

const Prev2 = () => {
    counter2--
    slideImage2();
   
 }
 const Next2 = () => {
    counter2++
    slideImage2();
    if(counter2==3){
     counter2=1
     counter2++
 slideImage2();
 }}
 const slideImage2 =() => {
    slide2.forEach(
        (vidcon2) =>{
            vidcon2.style.transform = `translatex(-${counter2 * 100}%)`
        }
    )}
