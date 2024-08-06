let boxes=document.querySelectorAll(".box");
let btn=document.querySelector(".reset");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");

let turn0=true;//playerX & player0
let count = 0; //To Track Draw

//game rules
const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//reset game
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
  };
  

//choose player
boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
            console.log("clicked");
            if (turn0) {
                box.innerText = "0";
                turn0 = false;
            } else {
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled=true;
            checkwinner();

        });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const showWinner=(winner)=>{
    msg.innerText=`congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
   disableboxes();

}
const checkwinner=()=>{
    for(let pattern of patterns ){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if (pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                return true;
            }
        }


    }
}

btn.addEventListener("click", resetGame);