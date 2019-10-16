window.addEventListener('load', function () { 


    var magia = this.document.getElementById('accion');
    var todo = this.document.getElementById('cuerpo');
 
    var ima1 = this.document.getElementById('img1');
    var ima2 = this.document.getElementById('img2');
    var ima3 = this.document.getElementById('img3');
    var ima4 = this.document.getElementById('img4');
    var ima5 = this.document.getElementById('img5');

    var options = this.document.getElementById('opciones');

    var div1 = this.document.getElementById('div-1')
    var div2 = this.document.getElementById('div-2')
    var div3 = this.document.getElementById('div-3')
    var div4 = this.document.getElementById('div-4')
    var div5 = this.document.getElementById('div-5')

    var pal1 = this.document.getElementById('line1');
    var pal2 = this.document.getElementById('line2');
    var pal3 = this.document.getElementById('line3');

    var capa = this.document.getElementById('manto');


    div1.style.display = "flex"
    div2.style.display = "none"
    div3.style.display = "none"
    div4.style.display = "none"
    div5.style.display = "none"


    ima1.style.background = "#fff";

    todo.style.background = "white"


    capa.style.display = "none"
    capa.style.width = "100%"
    capa.style.background = "#002851"
    capa.style.position = "absolute"
    capa.style.opacity = "0.9"
    capa.style.top =" -600px"



    window.addEventListener('resize', function(){
        var w = document.documentElement.clientWidth;
        this.console.log(w);


        if(w < 800) {
           options.style.display = "none"

            div1.style.display = "flex"
            div2.style.display = "flex"
            div3.style.display = "flex"
            div4.style.display = "flex"
            div5.style.display = "flex"

            capa.style.display = "flex"
        }

        if(w > 800){
            options.style.display = "flex"

            div2.style.display = "none"
            div3.style.display = "none"
            div4.style.display = "none"
            div5.style.display = "none"
            capa.style.display = "none"
        }
    })

   


    

    ima2.addEventListener('click', function(){

        if( div2.style.display == "none" ){

            ima2.style.background = "#fff";
            ima2.style.transition = "1.5s"
            
            div1.style.display = "none"
            div2.style.display = "flex"
            div3.style.display = "none"
            div4.style.display = "none"
            div5.style.display = "none"

            ima1.style.background = "none"
            ima3.style.background = "none"
            ima4.style.background = "none"
            ima5.style.background = "none"
            
        } else {

        }

    });


    ima1.addEventListener('click', function () {

        if (div1.style.display == "none") {

            ima1.style.background = "#fff";
            ima1.style.transition = "1.5s"

            div1.style.display = "flex"
            div2.style.display = "none"
            div3.style.display = "none"
            div4.style.display = "none"
            div5.style.display = "none"

            ima2.style.background ="none"
            ima3.style.background = "none"
            ima4.style.background = "none"
            ima5.style.background = "none"

        } else {

        }

    });

    ima3.addEventListener('click', function () {

        if (div3.style.display == "none") {

            div1.style.display = "none"
            div2.style.display = "none"
            div3.style.display = "flex"
            div4.style.display = "none"
            div5.style.display = "none"
            ima3.style.transition = "1.5s"


            ima3.style.background = "#fff";

            ima1.style.background =" none"
            ima2.style.background ="none "
            ima4.style.background = "none"
            ima5.style.background = "none"
           

        } else {

        }

    });


    ima4.addEventListener('click', function () {

        if (div4.style.display == "none") {

            ima4.style.background = "#fff";
            ima4.style.transition = "1.5s"

            div1.style.display = "none"
            div2.style.display = "none"
            div3.style.display = "none"
            div4.style.display = "flex"
            div5.style.display = "none"

            ima1.style.background = "none"
            ima3.style.background = "none"
            ima2.style.background = "none"
            ima5.style.background = "none"

        } else {

        }

    });

    ima5.addEventListener('click', function () {

        if (div5.style.display == "none") {

            ima5.style.background = "#fff";
            ima5.style.transition = "1.5s"

            div1.style.display = "none"
            div2.style.display = "none"
            div3.style.display = "none"
            div4.style.display = "none"
            div5.style.display = "flex"

            ima1.style.background = "none"
            ima3.style.background = "none"
            ima2.style.background = "none"
            ima4.style.background = "none"

        } else {

        }

    });



    magia.addEventListener('click', function(){

        if (capa.style.top === "-600px"){
    
            capa.style.top = "0px"
            capa.style.height = "100%"
            capa.style.transition =" 3s"
            capa.style.position = "fixed"

            pal1.style.background = "white"
            pal2.style.background = "white"
            pal3.style.background = "white"

            pal1.style.transition = "2s"
            pal2.style.transition = "4s"
            pal3.style.transition = "6s"

        } else {

            capa.style.top = "-600px"
            capa.style.height = "0%"

            pal1.style.background = "black"
            pal2.style.background = "black"
            pal3.style.background = "black"

            pal1.style.transition = "3s"
            pal2.style.transition = "4s"
            pal3.style.transition = "6s"
        }

    })


})




var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () { plusSlides(1) }, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
        myTimer = setInterval(function () { plusSlides(n + 2) }, 4000);
    } else {
        myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(slideIndex) }, 4000);
}