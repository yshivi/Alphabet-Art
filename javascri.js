let container = document.querySelector(".container")
let alphabet;
for (let i = 65; i <= 90; i++) {
    alphabet = String.fromCharCode(i)
    let frontDiv = document.createElement("div")
    let backDivs = document.createElement("div")
    container.appendChild(backDivs)
    container.appendChild(frontDiv)
    frontDiv.setAttribute("class", "card-container")
    backDivs.setAttribute("class", "backCard-cotainer")


    let text = document.createElement("p")
    text.setAttribute("class", "text")
    frontDiv.appendChild(text)
    text.innerHTML = alphabet


    let imageArr = document.createElement("img")
    imageArr.setAttribute("src", `alphabet images/${alphabet.toLocaleLowerCase()}.png`)
    imageArr.setAttribute("class", "image-class")
    backDivs.appendChild(imageArr)
    //console.log(imageArr)

    let flipCard =document.createElement("div")
    flipCard.appendChild(frontDiv)
    flipCard.appendChild(backDivs)
    container.appendChild(flipCard)
    flipCard.setAttribute("class", "flipCard")

    flipCard.addEventListener("click",()=>{
        flipCard.classList.toggle("flipped")
    })


}



