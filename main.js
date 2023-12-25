// Make a container in which all Alphabet 
const container = document.querySelector(".container")

const crouselImage = document.querySelector(".carousel-img")

// Make a dots in which  all dot 
const dots = document.querySelectorAll(".dot")

// make a var for store aphabets
let i = 0;
let alphabet;
// this  carouselImg array for carousel images
let carouselImgArr = [
    "images/crouselImage/image1.png",
    "images/crouselImage/image2.png",
    "images/crouselImage/image3.png"
]
// console.log(carouselImg)

let soundArr = ["Apple", "Ball", "Cat", "Dog", "Elephant", "Fish", "Goat", "Hourse", "Igloo", "Joker", "King", "Lion"
    , "Monkey", "Nose", "Octopus", "Pig", "Queen", "Rocket", "Snake", "Tiger", "Umbrella", "Van", "Watermelon", "X-ray", "Yak", "Zebra"]

autoplay = setInterval(function () {
    i++;
    let selectedDotId = "#dot" + i;
    let selectedDot = document.querySelector(selectedDotId);

    dots.forEach((dot) => (dot.style.backgroundColor = "white"));
    selectedDot.style.backgroundColor = "black";

    if (i > 2)
        i = 0;
    crouselImage.setAttribute("src", carouselImgArr[i]);
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

    let word = document.createElement("p")
    word.setAttribute("class", "words")
    word.innerHTML = soundArr[k]
    backDivs.appendChild(word)

    //When we will click any abphabet then show back side of the card

    flipCard.addEventListener("click", () => {
        flipCard.classList.add("flipped")

        let sound = new SpeechSynthesisUtterance();
        sound.text = soundArr[k]
        window.speechSynthesis.speak(sound);
    })
    // create a div in the backDivs
    let faIcons = document.createElement("div")
    faIcons.classList.add("fa-icons")
    backDivs.appendChild(faIcons);

    // create a likeIcon in the newDiv
    let like = document.createElement("i")
    like.classList.add("fa-regular", "fa-heart");
    faIcons.appendChild(like);

    // create expend icon==================================

    let expend = document.createElement("i")
    expend.classList.add("fa-solid", "fa-arrow-rotate-left");
    faIcons.appendChild(expend);

    // ====================create share icon ===============================

    let share = document.createElement("i")
    share.classList.add("fa-solid", "fa-share-from-square")
    faIcons.appendChild(share);

    //=======================flipIcon==============

    expend.addEventListener("click", (event) => {
        flipCard.classList.remove("flipped");
        event.stopPropagation();
    });

    //============================like icon=======

    like.addEventListener("click", (event) => {
        like.classList.toggle("fa-solid");
        like.style.color = "red";
        event.stopPropagation();

    });
    like.addEventListener("mouseover", (event) => {
        like.claasList.add("fa-bounce");
        event.stopPropagation()
    })

    like.addEventListener("mouseleave", (event) => {
        like.classList.remove("fa-bounce");
        event.stopPropagation();
    })

}