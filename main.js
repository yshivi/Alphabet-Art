let container = document.querySelector(".container");
let carouselImg = document.querySelector(".carouselImg");
let dots = document.querySelectorAll(".dot");

let i = 0;
let alphabet;       //This variable is used to create A to Z capital alphabets.

const crslImg = [
  "backCardImages/carouselImages/IMAGE.png",
  "backCardImages/carouselImages/img2.jpeg",
  "backCardImages/carouselImages/img4.jpeg"
]

autoplay = setInterval(function () {
  i++;
  if (i >= 3) i = 0;
  carouselImg.setAttribute("src", crslImg[i]);
  // dots.style.backgroundcolor = "black"
}, 2000);

const imgName = [
  "Apple", "Ball", "Cat", "Dog", "Elephant","Fish",
  "Giraffe","Horse", "Igloo", "Joker", "King", "Lion", "Monkey",
  "Nose", "Octopus","Pen", "Queen", "Rabbit", "Snake",
  "Tiger", "Umbrella", "Van", "Watermelon", "X-ray", "Yak", "Zebra"
]

//this array for the background design of the front cards, in which we will put 6 different designs in the background of the front card with the help of loop.
let design = ["design1", "design2", "design3", "design4", "design5", "design6"];

//In this loop the i is running 65 to 90, which is creating 26 divs and j is working for the design array.
for (let i = 65, k=0, j = 0; i < 91, k < 26; i++, j++,k++) {
  if (j >= 6)
    //This condition is telling that our j will run till 6, when the value of j exceeds 6 then the value of j will again become 0.
    j = 0;

  alphabet = String.fromCharCode(i);

  //creating divs
  let frontCard = document.createElement("div");
  let backCard = document.createElement("div");
  let cardsContainer = document.createElement("div");
  let img = document.createElement("img");
  let text = document.createElement("p");
  let imgMeaning = document.createElement("p")

  //give class to div or tag we have created
  cardsContainer.setAttribute("class", "cardsContainer");
  backCard.setAttribute("class", "backCard");
  frontCard.setAttribute("class", "frontCard");
  cardsContainer.setAttribute("class", "cardsContainer");
  img.setAttribute("class", "img");
  text.setAttribute("class", "text");
  imgMeaning.setAttribute("class", "imgMeaning")
  frontCard.classList.add(design[j]);

  //append all the divs and elements with the ones we have created for them.
  container.appendChild(cardsContainer);
  cardsContainer.appendChild(frontCard);
  cardsContainer.appendChild(backCard);
  backCard.appendChild(img);
  frontCard.appendChild(text);
  backCard.appendChild(imgMeaning)
  text.innerText = alphabet;
  imgMeaning.innerText = imgName[k];

  img.setAttribute("src", `backCardImages/${alphabet.toLowerCase()}.png`); //set image in back face of card, we write [i - 65] because in above loop we started i from 65 but our image position is starting from 0. So for changing i value 65 to 0 we write backgroundImage[i - 65]
  

  // Flip on click
  cardsContainer.addEventListener("click", () => {
    cardsContainer.classList.toggle("flipped");
    let speakMsg = new SpeechSynthesisUtterance();
    speakMsg.text = imgName[k];
    window.speechSynthesis.speak(speakMsg)
  });;
}
