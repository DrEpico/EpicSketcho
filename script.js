let canvasSelection;
let penSelection;

const container = document.querySelector("#divs-container");

const canvasbtn = document.querySelectorAll("#btn-container .canvas-size");
canvasbtn.forEach(button => {
    button.addEventListener("click", function() {
        userSelection = +this.innerHTML;
        console.log(this.innerHTML);
        addDivs();
    })
});

const colourbtn = document.querySelectorAll("#btn-container .pen-colour");
colourbtn.forEach(button => {
    button.addEventListener("click", function() {
        penSelection = this.innerHTML;
        console.log(this.innerHTML);
    })
});

function addDivs() {
        container.innerHTML = "";
        for(let i=0; i<userSelection**2; i++){ //change max width depending to the button 
            const canvas = document.createElement("div");
            canvas.classList.add("child-divs");
            container.appendChild(canvas); 
        }
        console.log("userSelection value IS 16");

        const childDivs = document.querySelectorAll(".child-divs");
        childDivs.forEach(function(div) {
            div.addEventListener("mouseover", function(event) {
                if(event.which === 1) {
                    div.classList.add(penSelection);
                }
            });
            div.addEventListener("mousedown", function(event) {
                div.classList.add(penSelection);
            });
        });
}


    

