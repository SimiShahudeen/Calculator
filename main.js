const keysArr = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "/", 0, ".", "="];
const nonKeyArr = ['AC', '\u232B'];
let keyboard = document.querySelector(".keyPad");
let screen = document.querySelector(".screen");
let screenStore;
allKeys = [...keysArr, ...nonKeyArr];
allKeys.forEach(element => {
  formBtn(element)
});
function formBtn(x) {
  let btn = document.createElement("button");
  btn.innerHTML = x;
  btn.classList.add('keyDesign');
  keyboard.appendChild(btn);
  btn.addEventListener("click", () => {
    if (x == 'AC') {
      screen.innerHTML = "";
    }
    else if (x == '\u232B') {
      screen.innerHTML = screen.innerHTML.slice(0, -1);
    }
    else if (x == '=') {
      screen.innerHTML = eval(screen.innerHTML);
    }
    else {
      screenStore = screen.innerHTML += x;
    }
  });
}



