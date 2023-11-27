let container = document.querySelector(".container");
let alphabet;
const backgroundImage = [
    "/Alphabet-Art/backgroundImages/a.png",
    "/Alphabet-Art/backgroundImages/b.png",
    "/Alphabet-Art/backgroundImages/c.png",
    "/Alphabet-Art/backgroundImages/d.png",
    "/Alphabet-Art/backgroundImages/e.png",
    "/Alphabet-Art/backgroundImages/f.png",
    "/Alphabet-Art/backgroundImages/g.png",
    "/Alphabet-Art/backgroundImages/h.png",
    "/Alphabet-Art/backgroundImages/i.png",
    "/Alphabet-Art/backgroundImages/j.png",
    "/Alphabet-Art/backgroundImages/k.png",
    "/Alphabet-Art/backgroundImages/l.png",
    "/Alphabet-Art/backgroundImages/m.png",
    "/Alphabet-Art/backgroundImages/n.png",
    "/Alphabet-Art/backgroundImages/o.png",
    "/Alphabet-Art/backgroundImages/p.png",
    "/Alphabet-Art/backgroundImages/q.png",
    "/Alphabet-Art/backgroundImages/r.png",
    "/Alphabet-Art/backgroundImages/s.png",
    "/Alphabet-Art/backgroundImages/t.png",
    "/Alphabet-Art/backgroundImages/u.png",
    "/Alphabet-Art/backgroundImages/v.png",
    "/Alphabet-Art/backgroundImages/w.png",
    "/Alphabet-Art/backgroundImages/x.png",
    "/Alphabet-Art/backgroundImages/y.png",
    "/Alphabet-Art/backgroundImages/z.png",
]
for (let i = 65; i < 91; i++) {
    alphabet = String.fromCharCode(i); //This is used for to create A to Z capital alphabets.
    let cell = document.createElement("div");
    let backCell = document.createElement("div");
    let parent = document.createElement("div")
    let img = document.createElement('img');

    parent.setAttribute("class", "parent")
    backCell.setAttribute("class", "backCell")
    cell.setAttribute("class", "cell")
    parent.setAttribute("class" , "parent")
    img.setAttribute("class", "img")
    
    parent.appendChild(cell);
    parent.appendChild(backCell);
    container.appendChild(parent)
    backCell.appendChild(img)
    
    img.setAttribute("src", backgroundImage[i-65])
    cell.innerText = alphabet;

    parent.addEventListener("click", ()=>{
        parent.classList.toggle("flipped")    
    })
}
