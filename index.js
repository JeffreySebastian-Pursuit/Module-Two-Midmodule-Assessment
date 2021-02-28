const diceArr = [
  { dice: "⚀", value: 1 },
  { dice: "⚁", value: 2 },
  { dice: "⚂", value: 3 },
  { dice: "⚃", value: 4 },
  { dice: "⚄", value: 5 },
  { dice: "⚅", value: 6 },
];

const inputDice = document.querySelector("#inputDice");
const diceButton = document.querySelector("#diceButton");
const outputDice = document.querySelector("#dice-para");
const sumOfDice = document.querySelector("#sum-para");
let rollDice = "";
let sum = 0;

diceButton.addEventListener("click", () => {
  randomDice();
});

const randomDice = () => {
  rollDice.innerHTML = "";
  for (let i = 0; i < inputDice.value; i++) {
    let newDice = [Math.floor(Math.random() * diceArr.length)];
    rollDice += diceArr[newDice].dice;
    sum += diceArr[newDice].value;
  }
  sumOfDice.textContent = `Sum = ${sum}`;
  outputDice.textContent = rollDice;
  inputDice.value = "";
};

diceButton.addEventListener("click", () => {
const history = document.querySelector("#diceHistory");
let li = document.createElement("li");
li.textContent = `${rollDice} = ${sum} `;
history.appendChild(li);
})