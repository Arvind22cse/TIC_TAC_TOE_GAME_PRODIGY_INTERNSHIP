const cells=document.querySelectorAll(".cell");
const statustext=document.getElementById("status");
const restart=document.getElementById("restart");
const cond=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options=["","","","","","","","",""];
let currentplayer="X";
let running=false;
intaializeGame();
function intaializeGame(){
    cells.forEach(cell=>cell.addEventListener("click",cellClicked));
    statustext.textContent=`${currentplayer}'s turn`;
    running=true;
}
function cellClicked(){
const cellindex=this.getAttribute("cellIndex");
if(options[cellindex]!=""||!running){
    return;
}
updateCell(this,cellindex);

checkWinner();
}
function updateCell(cell,index){
options[index]=currentplayer;
cell.textContent=currentplayer;
}
function changeplayer(){
currentplayer=(currentplayer=="X")?"O":"X";
statustext.textContent=`${currentplayer}'s turn`
}
function checkWinner(){
let roundwon=false;
for(let i=0;i<cond.length;i++){
const condition=cond[i];
const cellA=options[condition[0]];
const cellB=options[condition[1]];
const cellC=options[condition[2]];
if(cellA==""||cellB==""||cellC==""){
    continue;
}
if(cellA==cellB&&cellB==cellC){
    roundwon=true;
    break;
}


}
if(roundwon){
    statustext.textContent=`${currentplayer} wins!`;
    running=false;
}
else if(!options.includes("")){
    statustext.textContent=`Draw!`;
    running=false;
}
else{
    changeplayer();
}
}
function restartGame(){
currentplayer="X";
options=["","","","","","","","",""];
statustext.textContent=`${currentplayer}'s turn`;
cells.forEach((cell)=>cell.textContent="");
running=true;

}