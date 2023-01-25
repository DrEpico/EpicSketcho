let canvasSelection;
let penSelection;

const container = document.querySelector("#divs-container");

const canvasbtn = document.querySelectorAll("#btn-container .canvas-size");
canvasbtn.forEach(button => {
    button.addEventListener("click", function() {
        canvasSelection = +this.innerHTML;
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
    for(let i=0; i<canvasSelection**2; i++){ 
        const canvas = document.createElement("div");
        canvas.classList.add("child-divs");
        container.appendChild(canvas);
        if(canvasSelection === 16){
            container.style.cssText = "max-width: 195px";
        } else if(canvasSelection === 32) {
            container.style.cssText = "max-width: 390px";
        } else if(canvasSelection === 64) {
            container.style.cssText = "max-width: 780px";
        } else if(canvasSelection === 80) {
            container.style.cssText = "max-width: 980px";
        } 

    const childDivs = document.querySelectorAll(".child-divs");
    childDivs.forEach(function(div) {
        div.addEventListener("mouseover", function(event) {
            if(event.which === 1) {
                div.classList.add(penSelection);
            }
        });
        div.addEventListener("mousedown", function() {
            div.classList.add(penSelection);
        });
    });
    }
}
