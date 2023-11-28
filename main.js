let container = document.querySelector(".container");
let alphabet;       //This variable is used for to create A to Z capital alphabets.

// Inside the below array there are images from A to Z, which we will put on the back side of the card with the help of a loop.
const backgroundImage = [
  "backgroundImages/a.png","backgroundImages/b.png",
  "backgroundImages/c.png","backgroundImages/d.png",
  "backgroundImages/e.png","backgroundImages/f.png",
  "backgroundImages/g.png","backgroundImages/h.png",
  "backgroundImages/i.png","backgroundImages/j.png",
  "backgroundImages/k.png","backgroundImages/l.png",
  "backgroundImages/m.png","backgroundImages/n.png",
  "backgroundImages/o.png","backgroundImages/p.png",
  "backgroundImages/q.png","backgroundImages/r.png",
  "backgroundImages/s.png","backgroundImages/t.png",
  "backgroundImages/u.png","backgroundImages/v.png",
  "backgroundImages/w.png","backgroundImages/x.png",
  "backgroundImages/y.png","backgroundImages/z.png",
];

// We have made this array for the background design of the front cards, in which we will put 6 different designs in the background of the front card with the help of loop.
let design = ["design1", "design2", "design3", "design4", "design5", "design6"];

//In this loop the i is running 65 to 90, which is creating 26 divs and j is working for the design array. 
for (let i = 65, j = 0; i < 91; i++, j++) {
  if (j >= 6) //This condition is telling that our j will run till 6, when the value of j exceeds 6 then the value of j will again become 0.
  j = 0;   

  alphabet = String.fromCharCode(i);

  let cell = document.createElement("div");         //This creates front face of card
  let backCell = document.createElement("div");     // This creates back face of card
  let containerTwo = document.createElement("div"); //This container will contain both front and back card
  let img = document.createElement("img");
  let text = document.createElement("p");


  //Now we will give class to div or tag we have created 
  containerTwo.setAttribute("class", "containerTwo");
  backCell.setAttribute("class", "backCell");
  cell.setAttribute("class", "cell");
  containerTwo.setAttribute("class", "containerTwo");
  img.setAttribute("class", "img");
  text.setAttribute("class", "text");
  cell.classList.add(design[j]);    

  //Now we will append all the divs and tags with the ones we have created for them.
  container.appendChild(containerTwo);
  containerTwo.appendChild(cell);
  containerTwo.appendChild(backCell);
  backCell.appendChild(img);
  cell.appendChild(text);
  text.innerText = alphabet;

  img.setAttribute("src", backgroundImage[i - 65]); //Now we have to set image in back face of card, we write [i - 65] because in above loop we started i from 65 but our image position is starting from 0. So for changing i value 65 to 0 we write backgroundImage[i - 65]

  // We have created a click eventListener for card flipping on click.
  containerTwo.addEventListener("click", () => {   
    containerTwo.classList.toggle("flipped");
  });
}
