let boxes = document.querySelectorAll(".innerBox");
let winner = document.querySelector(".winner");
let reset = document.querySelector(".reset");
let turn = "true";

let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        winner.style.display = "none";
        turn = "true";
    })
})

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn === "true") {
            box.innerText = "O";
            turn = "false";
            box.style.color = "blue";
        } else {
            box.innerText = "X";
            turn = "true";
            box.style.color = "red";
        }
        box.disabled = true;
        win();
    })
})

let win = () => {
    for (let pattern of winpattern) {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if(box1 != "" && box2 != "" && box3 != "") {
            if(box1 === box2 && box2 === box3) {
                winnerBoard(box1);
                boxes.disabled = true;
            }
        }
    }
}

let winnerBoard = (winGame) => {
    winner.style.display = "block";
    disabledBtns();
    winner.innerText = `Winner : ${winGame}`;
}

let disabledBtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
