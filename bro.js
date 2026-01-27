const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],  
];
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