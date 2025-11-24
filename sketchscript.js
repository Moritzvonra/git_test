const container = document.querySelector(".container");
const squares = document.querySelector(".squares");

function fillScreenWithSquares() {
    const squareSize = 16;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const cols = Math.ceil(vw / squareSize);
    const rows = Math.ceil(vh / squareSize);
    const totalSquares = cols * rows;

    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("div");
        div.style.width = squareSize + "px";
        div.style.height = squareSize + "px";

        // random colors for fun — remove if not needed
        div.style.backgroundColor = ["red", "green", "blue"][i % 3];

        squares.appendChild(div);
    }
}
fillScreenWithSquares();


 function changeColour (div) {
   div.style.backgroundColor = "white";
     };

     const divs = document.querySelectorAll("div");

     divs.forEach((div) => {
          div.addEventListener("mouseover", () => {changeColour (div);})
          });


const button = document.querySelector("button");

function adjustSquareNumber () {
    
    const input= Number(prompt("How many squares should be created?"));
        if (!input || input <= 0) return;
         
    

     squares.innerHTML="";

    function newScreenWithSquares() {
    
    for (let i = 0; i < input; i++) {
        const div = document.createElement("div");
        div.classList.add("div");
        div.style.width = "16px";
        div.style.height = "16px";
        

        // random colors for fun — remove if not needed
        div.style.backgroundColor = ["red", "green", "blue"][i % 3];

        const screensize = input * 16 + "px";
        squares.style.width = screensize;
        squares.style.height = screensize;
        
        squares.appendChild(div);
         }
        }
    newScreenWithSquares();

    const div = document.createElement("div");    
    div.style.justifyContent = "center";

         }

button.addEventListener("click",() => {adjustSquareNumber (button);} )