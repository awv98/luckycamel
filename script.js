/* -----------------------------
   PAGE FADE IN
------------------------------*/

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = "opacity 2s ease";

    document.body.style.opacity = "1";

});


/* -----------------------------
   STARFIELD
------------------------------*/

const starContainer = document.getElementById("stars");

for(let i=0;i<140;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    const size=Math.random()*2+1;

    star.style.width=size+"px";

    star.style.height=size+"px";

    star.style.animationDuration=(5+Math.random()*10)+"s";

    star.style.animationDelay=(Math.random()*10)+"s";

    star.style.opacity=Math.random()*.7;

    starContainer.appendChild(star);

}


/* -----------------------------
   LETTER OPENING
------------------------------*/

const letter=document.getElementById("letter");

const closed=document.querySelector(".closed");

const inside=document.querySelector(".inside");

const seal=document.querySelector(".seal");

closed.addEventListener("click",openLetter);

seal.addEventListener("click",openLetter);

function openLetter(){

    closed.style.display="none";

    seal.style.display="none";

    inside.style.display="block";

}


/* -----------------------------
   RIDDLE
------------------------------*/

function checkAnswer(){

    let answer=document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    if(
        answer==="cristal" ||
        answer==="glass"
    ){

        document.getElementById("result").innerHTML=`

            <br>

            <a
            href="https://calendly.com/YOUR-LINK"
            target="_blank">

            <button>

            La respuesta correcta.

            Haz clic aquí.

            </button>

            </a>

        `;

    }

    else{

        document.getElementById("result").innerHTML=

        "<span style='color:#d8b46a;'>No exactamente.</span>";

    }

}


/* -----------------------------
   PARALLAX IMAGE
------------------------------*/

const image=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*6;

    const y=(e.clientY/window.innerHeight-.5)*6;

    image.style.transform=

    `translate(${x}px,${y}px) scale(1.02)`;

});


/* -----------------------------
   GLOW FOLLOW
------------------------------*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="500px";
glow.style.height="500px";
glow.style.pointerEvents="none";
glow.style.borderRadius="50%";
glow.style.background="radial-gradient(circle, rgba(255,255,255,.05), transparent 70%)";
glow.style.mixBlendMode="screen";
glow.style.zIndex="-1";
glow.style.transition="transform .15s linear";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.transform=
    `translate(${e.clientX-250}px,${e.clientY-250}px)`;

});