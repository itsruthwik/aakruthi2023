window.scroll = ScrollReveal({ duration: 1200, scale: 0.9});

scroll.reveal('.p-date', { 	distance: '70px', scale: 0.9 });
scroll.reveal('.p-description', { distance: '70px', scale: 0.9 });
scroll.reveal('.button-container', { distance: '70px', scale: 0.9 });
scroll.reveal('.circular', { distance: '70px', scale: 0.9 });
scroll.reveal('.info-container p', { distance: '70px', scale: 0.9 });
scroll.reveal('.two-left', { distance: '100px', origin: 'left', scale: 0.8 });
scroll.reveal('.two-right', { distance: '20px', origin: 'right', scale: 0.9 });
scroll.reveal('.video-play-button', { distance: '20px', scale: 0.8 });
scroll.reveal('.left-up-image', { distance: '50px', origin: 'left', scale: 0.9 });
scroll.reveal('.right-up-image', { distance: '50px', origin: 'right', scale: 0.9 });
scroll.reveal('.center-up-image', { distance: '50px', scale: 0.9 });
scroll.reveal('.xtwo', { distance: '50px', origin: 'right', scale: 0.9 });
scroll.reveal('.xfour', { distance: '50px', origin: 'right', scale: 0.9 });
scroll.reveal('.xone', { distance: '50px', scale: 0.9 });
scroll.reveal('.xthree', { distance: '50px', scale: 0.9 });
scroll.reveal('.date', { distance: '50px', origin: 'left', scale: 0.9 });
scroll.reveal('.info', { distance: '50px', origin: 'right', scale: 0.9 });
scroll.reveal('.faq-content h2', { distance: '50px', origin: 'right', scale: 0.9 });
scroll.reveal('.journey-image', { distance: '50px', scale: 0.9 });
scroll.reveal('.wrap-sponsers h2', { distance: '50px', origin: 'left', scale: 0.9 });


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function changeBg()
{
    var navbar = document.getElementById("hi");
    var scrollvalue = window.scrollY;

    if(scrollvalue <80)
    {
        navbar.style.backgroundColor = "transparent";

    }
    else{
        navbar.style.backgroundColor = "white";
    }
}


window.addEventListener('scroll',changeBg);


const togglebtn = document.getElementById('checkbox');
const dd = document.getElementById('amma');

togglebtn.onclick = () =>
{
    if(dd.style.display == 'none')
    {
        dd.style.display = 'block';
    }
    else{
        dd.style.display = 'none';
    }
}

function ch ()
{
    if(dd.style.display == 'none')
    {
        dd.style.display = 'flex';
    }
    else{
        dd.style.display = 'none';
    }
}
