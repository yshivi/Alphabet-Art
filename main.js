// Make a container in which all Alphabet 
const container = document.querySelector(".container")

const crouselImage = document.querySelector(".carousel-img")

// Make a dots in which  all dot 
const dots = document.querySelectorAll(".dot")

// make a var for store aphabets
let i = 0;
let alphabet;

let carouselImgArr = [
    "images/crouselImage/image1.jpeg",
    "images/crouselImage/image2.jpeg",
    "images/crouselImage/image3.jpeg"
]
// console.log(carouselImg)

autoplay = setInterval(function () {
    i++;
    let selectedDotId = "#dot" + i;
    let selectedDot = document.querySelector(selectedDotId);

    dots.forEach((dot) => (dot.style.backgroundColor = "white"));
    selectedDot.style.backgroundColor = "black";

    if (i > 2)
        i = 0;
    crouselImage.setAttribute("src",carouselImgArr[i]);
}, 1200);



// Make a pattern array in which store classes for background styling in front-div
let pattern = ["print1", "print2", "print3", "print4", "print5", "print6"]
//This "For loop" used to making alphabet divs, and changing background design with alphabet divs, and changeing image
// i var for make alphabets 
// j variable for pattern array
for (let i = 65, j = 0, k = 0; i <= 90; i++, j++, k++) {

    if (j > 5)
        j = 0


    // Number 65-90 to make alphabet a to z
    alphabet = String.fromCharCode(i)

    // Make a container in which will be front and back both card and append flipcontainer to container
    let frontDiv = document.createElement("div")
    let backDivs = document.createElement("div")
    container.appendChild(backDivs)
    container.appendChild(frontDiv)
    frontDiv.setAttribute("class", "front-div")
    backDivs.setAttribute("class", "backCard-cotainer")

    frontDiv.classList.add(pattern[j])
    let text = document.createElement("p")
    text.setAttribute("class", "text")
    frontDiv.appendChild(text)
    text.innerHTML = alphabet

    // Add imges in the back-div of the cards and we added images  
    let imageArr = document.createElement("img")
    imageArr.setAttribute("src", `images/alphabetImages/${alphabet.toLocaleLowerCase()}.jpeg`)
    imageArr.setAttribute("class", "image-class")
    backDivs.appendChild(imageArr)
    //console.log(imageArr)

    let flipCard = document.createElement("div")
    flipCard.appendChild(frontDiv)
    flipCard.appendChild(backDivs)
    container.appendChild(flipCard)
    flipCard.setAttribute("class", "flipCard")

    //When we will click any abphabet then show back side of the card

    flipCard.addEventListener("click", () => {
        flipCard.classList.toggle("flipped")
        //this autoplay for carousel images 
        let soundArr = ["apple", "ball", "cat", "dog", "elephant", "fish", "giraffe", "hourse", "igloo", "joker", "king", "lion"
            , "monkey", "nose", "octopus", "pen", "queen", "rabbit", "snake", "tiger", "umbrela", "ven", "watermelon", "x-ray", "yak", "zebra"]
        let sound = new SpeechSynthesisUtterance();
        sound.text = soundArr[k]
        window.speechSynthesis.speak(sound);
    })



}
// this  carouselImg array for carousel images



