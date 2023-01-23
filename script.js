let userSelection;

const container = document.querySelector("#divs-container");

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
        for(let i=0; i<16; i++){
            const sqr16 = document.createElement("div");
            sqr16.classList.add("child-div");
            container.appendChild(sqr16); //might have to use for loop
        }
        console.log("userSelection value IS 16");
    } else {
        console.log("userSelection value is NOT 16");
    }
}