let elInputOne = document.querySelector("#firstelement");
let elInputTwo = document.querySelector("#secondelement");
let elInputThird = document.querySelector("#thirdelement");

let elDone = document.querySelector("#done");

let elFirstList = document.querySelector("#onelist");
let elSecondList = document.querySelector("#twolist");
let elThirdList = document.querySelector("#threelist");


let elArryas = []

elDone.addEventListener('click', (e) => {
  e.preventDefault()

  let firstValue  = elInputOne.value.trim();
  let secondValue = elInputTwo.value.trim();
  let thirdValue  = elInputThird.value.trim();

  for (let i = 3; i <= thirdValue; i++){

    if(i % firstValue == 0) {
      let onListArr = [];
      onListArr.push(i)
      console.log(onListArr);
      let newLi = document.createElement("li");
      newLi.textContent = i;
      elFirstList.appendChild(newLi)
    }

    if (i % secondValue == 0) {
      let twoListArr = [];
      twoListArr.push(i)
      console.log(twoListArr);
      let newLi = document.createElement("li");
      newLi.textContent = i;
      elSecondList.appendChild(newLi)
    }
    if (i % firstValue && i % thirdValue) {
      let threeListArr = [];
      threeListArr.push(i)
      let newLi = document.createElement("li");
      newLi.className = "color"
      newLi.textContent = i;
      elThirdList.appendChild(newLi) 
    }

  }
}
)