let container = document.querySelector(".container");
let alphabet;       //This variable is used to create A to Z capital alphabets.

//this array for the background design of the front cards, in which we will put 6 different designs in the background of the front card with the help of loop.
let design = ["design1", "design2", "design3", "design4", "design5", "design6"];

//In this loop the i is running 65 to 90, which is creating 26 divs and j is working for the design array. 
for (let i = 65, j = 0; i < 91; i++, j++) {
  if (j >= 6) //This condition is telling that our j will run till 6, when the value of j exceeds 6 then the value of j will again become 0.
  j = 0;   

  alphabet = String.fromCharCode(i);

  //creating divs 
  let frontCard = document.createElement("div");         
  let backCard = document.createElement("div");     
  let cardsContainer = document.createElement("div"); 
  let img = document.createElement("img");
  let text = document.createElement("p");

  //give class to div or tag we have created 
  cardsContainer.setAttribute("class", "cardsContainer");
  backCard.setAttribute("class", "backCard");
  frontCard.setAttribute("class", "frontCard");
  cardsContainer.setAttribute("class", "cardsContainer");
  img.setAttribute("class", "img");
  text.setAttribute("class", "text");
  frontCard.classList.add(design[j]);    

  //append all the divs and elements with the ones we have created for them.
  container.appendChild(cardsContainer);
  cardsContainer.appendChild(frontCard);
  cardsContainer.appendChild(backCard);
  backCard.appendChild(img);
  frontCard.appendChild(text);
  text.innerText = alphabet;

  img.setAttribute("src", `backCardImages/${alphabet.toLowerCase()}.png`); //Now we have to set image in back face of card, we write [i - 65] because in above loop we started i from 65 but our image position is starting from 0. So for changing i value 65 to 0 we write backgroundImage[i - 65]

  // Flip on click
  cardsContainer.addEventListener("click", () => {   
    cardsContainer.classList.toggle("flipped");
  });
}
