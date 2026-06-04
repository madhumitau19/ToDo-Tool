const enter = document.getElementById("enter");

enter.addEventListener("keydown", (event)=> {
  if (event.key === 'Enter'){
    let enteredText = enter.value;
    const newThought = document.createElement('div');
    newThought.innerHTML = `${enteredText} <div class="done">✓</div><div class="delete">✖</div><div class="star">☆</div>`;
    document.body.appendChild(newThought);
    newThought.style.width = "200px";
    newThought.style.height = "200px";
    newThought.style.fontSize = "20px";
    newThought.style.display = "flex";
    newThought.style.alignItems = "center";
    newThought.style.justifyContent = "center";
    newThought.style.border = "solid 1px grey";
    newThought.style.borderRadius = "20px";
    newThought.style.textAlign = "center";
    newThought.style.margin = "10px";
    newThought.style.lineHeight = "100%";
    newThought.style.padding = "10px";
    newThought.style.position = "relative";
    
    enter.value = "";
  }
});

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains('delete')) {
    event.target.parentElement.remove();
  }
});

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains('done')) {
    if (event.target.parentElement.style.borderColor === "grey"||event.target.parentElement.style.borderColor === "pink"){
      event.target.parentElement.style.borderColor = "#E6E6E6";
      event.target.parentElement.style.color = "#E6E6E6";
      event.target.parentElement.style.textDecoration = "line-through";
      event.target.parentElement.style.backgroundColor = "";
    } else {
      event.target.parentElement.style.borderColor = "grey";
      event.target.parentElement.style.color = "black";
      event.target.parentElement.style.textDecoration = "none";
    }
  }
});

// document.body.addEventListener("click", (event) => {
//   if (event.target.classList.contains('star')) {
//     event.target.innerHTML = "★";
//     event.target.parentElement.style.backgroundColor = "#e33030";
//     event.target.parentElement.style.borderColor = "pink";
//     event.target.parentElement.style.color = "white";
//   }
// });

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains('star')) {
    if (event.target.parentElement.style.color === "black"||event.target.parentElement.style.color === ""){
      event.target.innerHTML = "★";
      event.target.parentElement.style.backgroundColor = "#e33030";
      event.target.parentElement.style.borderColor = "pink";
      event.target.parentElement.style.color = "white";
    } else {
      event.target.innerHTML = "☆";
      event.target.parentElement.style.backgroundColor = "";
      event.target.parentElement.style.borderColor = "";
      event.target.parentElement.style.color = "";
    }
  }
});

