/* ==========================================================
   CINEMATIC WEBSITE
========================================================== */

/* --------------------------
   PAGE LOAD
---------------------------*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* --------------------------
   STARFIELD
---------------------------*/

const stars = document.getElementById("stars");

for (let i = 0; i < 90; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 2 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random() * 0.5 + 0.15;

    star.style.animationDuration = (6 + Math.random() * 10) + "s";
    star.style.animationDelay = (Math.random() * 10) + "s";

    stars.appendChild(star);

}


/* --------------------------
   LETTER
---------------------------*/

const letter = document.getElementById("letter");
const closed = document.querySelector(".closed");
const seal = document.querySelector(".seal");
const inside = document.querySelector(".inside");

function openLetter() {

    letter.style.transform = "scale(1.015)";

    setTimeout(() => {

        closed.style.display = "none";
        seal.style.display = "none";

        inside.style.display = "block";

    }, 350);

}

closed.addEventListener("click", openLetter);
seal.addEventListener("click", openLetter);


/* --------------------------
   RIDDLE
---------------------------*/

function checkAnswer() {

    const answer = document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    if (answer === "cristal" || answer === "glass") {

        const result = document.getElementById("result");

        result.style.opacity = "0";

        setTimeout(() => {

            result.innerHTML = `
                <p style="margin-bottom:25px;color:#d9c08a;">
                    Ahora sí.
                </p>

                <a href="https://calendly.com/YOUR-LINK"
                   target="_blank">

                    <button>

                        Continuar

                    </button>

                </a>
            `;

            result.style.transition = "opacity 1s";
            result.style.opacity = "1";

        }, 700);

    }

    else {

        document.getElementById("result").innerHTML =
            "<p style='color:#cfa868;'>No exactamente.</p>";

    }

}


/* --------------------------
   HERO PARALLAX
---------------------------*/

const hero = document.querySelector(".hero-image");

window.addEventListener("mousemove", e => {

    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;

    hero.style.transform =
        `translate(${x}px, ${y}px) scale(1.05)`;

});