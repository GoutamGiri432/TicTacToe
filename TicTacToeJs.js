let boxes=document.querySelectorAll(".box");
let resetBtn=document.getElementById("resetBtn");
 let turn=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        // box.innerText="gg";
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X"
            turn=true;
        }
        box.disabled=true;
    });
});