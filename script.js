let userSelection;

const container = document.querySelector("#divs-container");

const buttons = document.querySelectorAll("#btn-container button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        userSelection = +this.innerHTML;
        console.log(this.innerHTML);
        addDivs();
    })
});

function addDivs() {
    if (userSelection === 16) {
        container.innerHTML = "";
        for(let i=0; i<userSelection**2; i++){
            const sqr16 = document.createElement("div");
            sqr16.classList.add("child-divs");
            container.appendChild(sqr16); 
        }
        console.log("userSelection value IS 16");
        const childDivs = document.querySelectorAll(".child-divs");
        childDivs.forEach(div => {
            div.addEventListener("mouseover", function() {
                div.classList.add("red")
            });
        });
    } else {
        console.log("userSelection value is NOT 16");
    }
}


    

