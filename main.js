var slideIndex = 0;
var text = ["handmade  interiors", "be spoke element", "interior decoration"];
var text2 = ["we love  ", "make uniquly yours", "adore your home"];

carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    document.getElementById("image-text").innerHTML = text[slideIndex-1];
    document.getElementById("image-text2").innerHTML = text2[slideIndex-1];
    setTimeout(carousel, 6000); 
}


const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
if (window.scrollY > 0) {
nav.classList.add('navbar-scroll');
} else {
nav.classList.remove('navbar-scroll');
}
});












var arr = new collection(['assets/img/shoplist1_home11.jpg', 'assets/img/shoplist2_home1-1.jpg', 'assets/img/gallery_img1.jpg'],
                         ['chair', 'arm chair', 'wood chair'],
                         ['handmade', 'chair','art'],
                         [40, 55, 30]);

function collection(imgs, names,discrections, prices) {
  this.imgs = imgs;
  this.names = names;
  this.prices = prices;
  this.discrections=discrections;
  this.i = 0;

  this.next = function(newImgId, newNameId, newDiscrectionId, newPriceId) {
    var img = document.getElementById(newImgId);
    var name = document.getElementById(newNameId);
    var discrection = document.getElementById(newDiscrectionId);
    var price = document.getElementById(newPriceId);
    
    this.i++;
    if (this.i == imgs.length) {
      this.i = 0;
    }
    img.style.transition = "transform 1s";
    img.style.transform = "translateX(100%)";
    setTimeout(() => {
    img.src = imgs[this.i];
    name.innerHTML = names[this.i];
   
    price.innerHTML = prices[this.i];
     discrection.innerHTML=discrections[this.i];
     img.style.transform = "translateX(0)";
    }, 500);
  }
  this.prev = function(newImgId, newNameId, newDiscrectionId, newPriceId) {
    var img = document.getElementById(newImgId);
    var name = document.getElementById(newNameId);
    var discrection = document.getElementById(newDiscrectionId);
    var price = document.getElementById(newPriceId);
    this.i--;
    if (this.i < 0) {
      this.i = imgs.length - 1;
    }
    img.style.transition = "transform 1s";
    img.style.transform = "translateX(-100%)";
    setTimeout(() => {
    img.src = imgs[this.i];
    name.innerHTML = names[this.i];
   
    price.innerHTML = prices[this.i];
     discrection.innerHTML=discrections[this.i];  img.style.transform = "translateX(0)";
    }, 500);
  }
}





  
 
var arr = new collection(['assets/img/store/home5_27.jpg', 'assets/img/store/home5_6-1.jpg', 'assets/img/store/slider_featured_70.jpg'],
['chair', 'craft', 'wood chair'],
['handmade', 'bedroom','art'],
[40, 55, 30]);

function collection(imgs, names,discrections, prices) {
this.imgs = imgs;
this.names = names;
this.prices = prices;
this.discrections=discrections;
this.i = 0;

this.next = function(newImgId, newNameId, newDiscrectionId, newPriceId) {
var img = document.getElementById(newImgId);
var name = document.getElementById(newNameId);
var discrection = document.getElementById(newDiscrectionId);
var price = document.getElementById(newPriceId);

this.i++;
if (this.i == imgs.length) {
this.i = 0;
}
img.style.transition = "transform 1s";
img.style.transform = "translateX(100%)";
setTimeout(() => {
img.src = imgs[this.i];
name.innerHTML = names[this.i];

price.innerHTML = prices[this.i];
discrection.innerHTML=discrections[this.i];
img.style.transform = "translateX(0)";
}, 500);
}
this.prev = function(newImgId, newNameId, newDiscrectionId, newPriceId) {
var img = document.getElementById(newImgId);
var name = document.getElementById(newNameId);
var discrection = document.getElementById(newDiscrectionId);
var price = document.getElementById(newPriceId);
this.i--;
if (this.i < 0) {
this.i = imgs.length - 1;
}
img.style.transition = "transform 1s";
img.style.transform = "translateX(-100%)";
setTimeout(() => {
img.src = imgs[this.i];
name.innerHTML = names[this.i];

price.innerHTML = prices[this.i];
discrection.innerHTML=discrections[this.i];  img.style.transform = "translateX(0)";
}, 500);
}
}






const list = document.querySelector('.list');

window.addEventListener('scroll', () => {
  if (window.scrollY > list.offsetTop - window.innerHeight / 2) {
    list.classList.add('animate');
  } else {
    list.classList.remove('animate');
  }
});


