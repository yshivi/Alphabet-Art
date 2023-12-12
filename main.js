let container = document.querySelector(".container");
let carouselImg = document.querySelector(".carouselImg");
let dots = document.querySelectorAll(".dot");

let i = 0;
let alphabet; //This variable is used to create A to Z capital alphabets.

const crslImg = [
  "assets/carouselImages/IMAGE.png",
  "assets/carouselImages/img2.jpeg",
  "assets/carouselImages/img4.jpeg",
];
const wordPro = [
  "apple","ball","cat","dog","elephant",
  "fish","goat","horse","igloo","joker",
  "kite","lion","monkey","nose","octopus",
  "pig","queen","rocket","snake","tiger",
  "umbrella","van","watermellon","x-ray",
  "yak","zebra",
];
setInterval(function () {
  i++;
  let selectedDotId = "#dot" + i;
  let selectedDot = document.querySelector(selectedDotId);
  // console.log(selectedDot);
  dots.forEach((dot) => (dot.style.backgroundColor = "white"));
  selectedDot.style.backgroundColor = "black";
  if (i >= 3) i = 0;
  carouselImg.setAttribute("src", crslImg[i]);
}, 2000);

//this array for the background design of the front cards, in which we will put 6 different designs in the background of the front card with the help of loop.
let design = ["design1", "design2", "design3", "design4", "design5", "design6"];

//In this loop the i is running 65 to 90, which is creating 26 divs and j is working for the design array.
for (let i = 65, k = 0, j = 0; i < 91; k++, i++, j++) {
  if (j >= 6)
    //This condition is telling that our j will run till 6, when the value of j exceeds 6 then the value of j will again become 0.
    j = 0;

  alphabet = String.fromCharCode(i);

  //creating divs and img tags
  let frontCard = document.createElement("div");
  let backCard = document.createElement("div");
  let cardsContainer = document.createElement("div");
  let img = document.createElement("img");
  let text = document.createElement("p");
  let imgText = document.createElement("p");
  let imgIconOne = document.createElement("img");
  let imgIconTwo = document.createElement("img");
  let imgIconThree = document.createElement("img");
  let iconContainer = document.createElement("div");

  //.........Giving icon src path to img tag.......
  imgIconOne.src = "assets/backImgIcon/heartIcon.png";
  imgIconTwo.src = "assets/backImgIcon/sizeIcon.png";
  imgIconThree.src = "assets/backImgIcon/shareIcon.png";

  //give class to div or tag we have created
  cardsContainer.setAttribute("class", "cardsContainer");
  backCard.setAttribute("class", "backCard");
  frontCard.setAttribute("class", "frontCard");
  cardsContainer.setAttribute("class", "cardsContainer");
  img.setAttribute("class", "img");
  text.setAttribute("class", "text");
  imgText.setAttribute("class", "bckImgText");
  imgIconOne.setAttribute("id", "imgIconOne");
  imgIconTwo.setAttribute("id", "imgIconTwo");
  imgIconThree.setAttribute("id", "imgIconThree");
  iconContainer.setAttribute("class", "iconContainer");

  frontCard.classList.add(design[j]);

  //append all the divs and elements with the ones we have created for them.
  container.appendChild(cardsContainer);
  cardsContainer.appendChild(frontCard);
  cardsContainer.appendChild(backCard);
  backCard.appendChild(img);
  frontCard.appendChild(text);
  backCard.appendChild(iconContainer);
  backCard.appendChild(imgText);
  iconContainer.appendChild(imgIconOne);
  iconContainer.appendChild(imgIconTwo);
  iconContainer.appendChild(imgIconThree);
  imgText.innerText = wordPro[k];
  text.innerText = alphabet;

  img.setAttribute("src", `assets/${alphabet.toLowerCase()}.png`); //set image in back face of card, we write [i - 65] because in above loop we started i from 65 but our image position is starting from 0. So for changing i value 65 to 0 we write backgroundImage[i - 65]

  // Flip on click
  cardsContainer.addEventListener("click", () => {
    cardsContainer.classList.toggle("flipped");
    let msg = new SpeechSynthesisUtterance();
    msg.text = wordPro[k];
    window.speechSynthesis.speak(msg);
  });

  let heartClick = 0;
  imgIconOne.addEventListener("click", () => {
    if (heartClick === 0) {
      imgIconOne.src = "assets/backImgIcon/redHeart.png";
      heartClick = 1;
    } else {
      imgIconOne.src = "assets/backImgIcon/heartIcon.png";
      heartClick = 0;
    }
  });
}
