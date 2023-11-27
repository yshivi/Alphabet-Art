let container = document.querySelector(".container");
let alphabet;
for (let i = 65; i < 91; i++) {
    alphabet = String.fromCharCode(i); //This is used for to create A to Z capital alphabets.
    let cell = document.createElement("div");
    let backCell = document.createElement("div");
    let parent = document.createElement("div")

    parent.setAttribute("class", "parent")
    backCell.setAttribute("class", "backCell")
    cell.setAttribute("class", "cell")
    parent.setAttribute("class" , "parent")
    
    parent.appendChild(cell);
    parent.appendChild(backCell);
    container.appendChild(parent)
    

    cell.innerText = alphabet;
}