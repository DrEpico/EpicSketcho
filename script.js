let userSelection;

const container = document.querySelector("#divs-container");

const buttons = document.querySelectorAll("#btn-container .canvas-size");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        userSelection = +this.innerHTML;
        console.log(this.innerHTML);
        addDivs();
    })
});

function addDivs() {
        container.innerHTML = "";
        for(let i=0; i<userSelection**2; i++){ //change max width depending to the button 
            const sqr16 = document.createElement("div");//probably change the name sqr16
            sqr16.classList.add("child-divs");
            container.appendChild(sqr16); 
        }
        console.log("userSelection value IS 16");
        const childDivs = document.querySelectorAll(".child-divs");
        childDivs.forEach(function(div) {
            div.addEventListener("mouseover", function(event) {
                if(event.which === 1) {
                    div.classList.add("red");
                }
            });
            div.addEventListener("mousedown", function(event) {
                if(event.which === 1) {
                    div.classList.add("red");
                }
            });
        });
}


    

