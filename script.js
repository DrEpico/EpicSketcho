let userSelection;

const container = document.querySelector("#divs-container");
const sqr16 = document.createElement("div");
sqr16.classList.add("child-div");

const buttons = document.querySelectorAll("#btn-container button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        userSelection = this.innerHTML;
        console.log(this.innerHTML);
        addDivs();
    })
});

function addDivs() {
    if (userSelection == "16") {
        console.log("userSelection value IS 16");
        sqr16.textContent = "test";
        container.appendChild(sqr16);
    } else {
        console.log("userSelection value is NOT 16");
    }
}