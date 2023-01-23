let userSelection;

const container = document.querySelector("button");
const sqr16 = document.createElement("div");
sqr16.classList.add("#container");

const buttons = document.querySelectorAll("#btn-container button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        userSelection = this.innerHTML;
        addDivs();
    })
});

function addDivs() {
    if (userSelection == "16") {
    sqr16.textContent = "";
    container.appendChild(sqr16);
    } else {
        console.log("userSelection value is not 16");
    }
}