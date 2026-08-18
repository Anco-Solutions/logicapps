/* =========================================================
   LOGIC APPS — ANCO SOLUTIONS
   Main JavaScript
   ========================================================= */


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear = new Date().getFullYear();

const yearElements = document.querySelectorAll(
    ".site-footer"
);

yearElements.forEach((footer) => {

    const yearText = footer.textContent;

    if (yearText.includes("2026")) {
        footer.innerHTML = footer.innerHTML.replace(
            "2026",
            currentYear
        );
    }

});


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   APPLICATION CARD ANIMATION
   ========================================================= */

const appCards = document.querySelectorAll(".app-card");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    appCards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

}


/* =========================================================
   LOGIC APPS READY
   ========================================================= */

console.log(
    "Logic Apps by Anco Solutions — ready."
);