const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

let options =["", "", "", "", "", "", "", "", "",];
let curentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${curentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAtribute("cellIndex");

     if(options[cellIndex] != "" || !running){
        return;
     }
     
     updateCell(this, cellIndex);
     checkWiner();
}
function updateCell(cell, index){
    options[index] = curentPlayer;
    cell.textContent = curentPlayer;
}
function changePlayer(){

}
function checkWiner(){

}
function restartGame(){

}
