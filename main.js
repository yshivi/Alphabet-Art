let container = document.querySelector(".container");
let alphabet;       //This varisble is used for to create A to Z capital alphabets.

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
let design = ["design1", "design2", "design3", "design4", "design5", "design6"];

//The loop is making divs, alphabets, and creating their class and also making card flip etc.
for (let i = 65, j = 0; i < 91; i++, j++) {
  if (j >= 6) j = 0;

  alphabet = String.fromCharCode(i); 
  let cell = document.createElement("div"); //This is front face of card
  let backCell = document.createElement("div"); //Back face of card
  let containerTwo = document.createElement("div"); //this div can contain front and back cards
  let img = document.createElement("img");
  let text = document.createElement("p");

  containerTwo.setAttribute("class", "containerTwo");
  backCell.setAttribute("class", "backCell");
  cell.setAttribute("class", "cell");
  containerTwo.setAttribute("class", "containerTwo");
  img.setAttribute("class", "img");
  text.setAttribute("class", "text");
  cell.classList.add(design[j]);

  container.appendChild(containerTwo);
  containerTwo.appendChild(cell);
  containerTwo.appendChild(backCell);
  backCell.appendChild(img);
  cell.appendChild(text);

  text.innerText = alphabet;
  img.setAttribute("src", backgroundImage[i - 65]);

  containerTwo.addEventListener("click", () => {
    containerTwo.classList.toggle("flipped");
  });
}
