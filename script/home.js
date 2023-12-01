window.onload = function() {

    var slider1 = new Slider({
        images: '.slider-1 img',
        btnPrev: '.slider-1 .buttons .prev',
        btnNext: '.slider-1 .buttons .next',
        auto: false
    });

   var slider2 = new Slider({
        images: '.slider-2 img',
        btnPrev: '.slider-2 .buttons .prev',
        btnNext: '.slider-2 .buttons .next',
        auto: true,
        rate: 2000
    });
}

function Slider(obj) {

  this.images = document.querySelectorAll(obj.images);
  this.auto = obj.auto;
  this.btnPrev = obj.btnPrev;
  this.btnNext = obj.btnNext;
    this.rate = obj.rate || 1000;

  var i = 0;
    var slider = this;

  this.prev = function () {
    slider.images[i].classList.remove('shown');
    i--;
if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images[i].classList.add('shown');
  }

  this.next = function () {
    slider.images[i].classList.remove('shown');
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images[i].classList.add('shown');
  }

    document.querySelector(slider.btnPrev).onclick = slider.prev;
    document.querySelector(slider.btnNext).onclick = slider.next;


   
    
};

// Get the button
let mybutton = document.getElementById("backtoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
