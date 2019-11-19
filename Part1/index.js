// console.log("Hello World!");
// console.log("What the heck");

const board = [];

function play(clickedId){
 const playerSpan = document.getElementById('player');
 const clickedElement = document.getElementById(clickedId);
 if (playerSpan.innerText === 'X'){
     playerSpan.innerText = 'O';
     clickedElement.innerText = 'X';
     board[clickedId] = 'X';
 } else {
     playerSpan.innerText = 'X';
     clickedElement.innerText = 'O';
     board[clickedId] = 'O';
    }
    console.log(board);

//  console.log(play);

const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
    alert(`${topLeft} winner winner, chicken dinner`);
    return;
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    alert(`${topLeft} winner winner, chicken dinner`);
    return;
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert(`${topLeft} winner winner, chicken dinner`);
    return;
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    alert(`${topCenter} winner winner, chicken dinner`);
    return;
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    alert(`${topRight} winner winner, chicken dinner`);
    return;
}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    alert(`${topRight} winner winner, chicken dinner`);
    return;
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
    alert(`${middleLeft} winner winner, chicken dinner`);
    return;
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    alert(`${bottomLeft} winner winner, chicken dinner`);
    return;
}

let boardFull = true;
for (let i = 0; i<=8; i++){
    if (board[i] === undefined) {
        boardFull = false;
    }
}
if (boardFull === true){
    alert("Boohiss, this was a Cat's game.");
}
}