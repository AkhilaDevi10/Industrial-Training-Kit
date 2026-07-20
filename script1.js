// =========================
// Welcome Button
// =========================

function showMessage() {
    alert(" Welcome to DecodeLabs Full Stack Training!");
}

// =========================
// Contact Form Validation
// =========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert(" Thank You! We will contact you soon.");

    form.reset();

});

// =========================
// Navbar Shadow on Scroll
// =========================

window.addEventListener("scroll",function(){

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>50){

        navbar.style.background="#003d99";

    }

    else{

        navbar.style.background="#0d6efd";

    }

});

// =========================
// Fade Animation
// =========================

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        const position=card.getBoundingClientRect().top;

        const screen=window.innerHeight;

        if(position<screen-100){

            card.style.opacity="1";

            card.style.transform="translateY(0px)";

        }

    });

});

// Initial Style

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition=".7s";

});

// =========================
// Scroll To Top Button
// =========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="12px 16px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#0d6efd";
topBtn.style.color="white";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


cards.forEach(card=>{

    card.addEventListener("click",()=>{

        alert("Course Details Coming Soon!");

    });

});