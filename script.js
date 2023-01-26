let canvasSelection;
let penSelection;

const container = document.querySelector("#divs-container");

const canvasbtn = document.querySelectorAll("#btn-container .canvas-size");
canvasbtn.forEach(button => {
    button.addEventListener("click", function() {
        canvasSelection = +this.innerHTML;
        console.log(this.innerHTML);
        if(canvasSelection === "reset"){
            delDevs();
        } else {
            addDivs();
        }
    })
});

const colourbtn = document.querySelectorAll("#btn-container .pen-colour");
colourbtn.forEach(button => {
    button.addEventListener("click", function() {
        penSelection = this.innerHTML;
        console.log(this.innerHTML);
    })
});

function delDivs() {
    container.innerHTML = "";
}

function addDivs() {
    container.innerHTML = "";
    for(let i=0; i<canvasSelection**2; i++){ 
        const canvas = document.createElement("div");
        canvas.classList.add("child-divs");
        container.appendChild(canvas);
        switch (canvasSelection) {
            case 16:
                container.style.cssText = "max-width: 160px";
                break;
            case 32:
                container.style.cssText = "max-width: 320px";
                break;
            case 64:
                container.style.cssText = "max-width: 640px";
                break;
            case 80:
                container.style.cssText = "max-width: 800px";
                break;
            default:
                break;
        }
    }
    const childDivs = document.querySelectorAll(".child-divs");
    childDivs.forEach(function(div) {
        div.addEventListener("mouseover", function(event) {
            event.preventDefault();
            if(event.which === 1) {
                div.classList.add(penSelection);
            }
        });
        div.addEventListener("mousedown", () => {
            div.classList.add(penSelection);
        });
        div.addEventListener("touchmove", () => { //test 
            div.classList.add(penSelection);
        });
    });
}
