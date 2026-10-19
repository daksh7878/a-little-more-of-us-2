
const openButton = document.getElementById("openStory");
const closeButton = document.getElementById("closeMessage");
const welcomeMessage = document.getElementById("welcomeMessage");

openButton.addEventListener("click", function () {
    welcomeMessage.classList.remove("hidden");
});


closeButton.addEventListener("click", function () {
    welcomeMessage.classList.add("hidden");

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
});


document.getElementById("toMemories").addEventListener(
    "click",
    function () {
        window.location.href = "memories.html";
    }
);

document.addEventListener("DOMContentLoaded", () => {
    const ringBox = document.getElementById("ringBox");
    const proposalSurprise = document.querySelector(".proposal-surprise");
    const proposalReveal = document.getElementById("proposalReveal");

    if (!ringBox || !proposalSurprise || !proposalReveal) {
        console.error("Ring box elements not found. Check final.html IDs.");
        return;
    }

    ringBox.addEventListener("click", () => {
        if (proposalSurprise.classList.contains("opened")) return;

        proposalSurprise.classList.add("opened");

        setTimeout(() => {
            proposalReveal.hidden = false;

            proposalReveal.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 550);
    });
});
// Ring box surprise
const ringBox = document.getElementById("ringBox");
const proposalSurprise = document.querySelector(".proposal-surprise");
const proposalReveal = document.getElementById("proposalReveal");

if (ringBox && proposalSurprise && proposalReveal) {
    ringBox.addEventListener("click", function () {
        if (proposalSurprise.classList.contains("opened")) {
            return;
        }

        proposalSurprise.classList.add("opened");

        setTimeout(function () {
            proposalReveal.hidden = false;

            proposalReveal.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 550);
    });
} else {
    console.error("Ring box elements missing! Check the HTML IDs and classes.");
}