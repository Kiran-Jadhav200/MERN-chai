//example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The Paragraph is changed";
  });

//example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

//example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);
});

//example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Chaicode");
  });

// example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target && event.target.matches(".teaItem")) {
    alert("You seleced " + event.target.textContent);
  }
});

//example 8
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
 event.preventDefault();
 let feedback = document.getElementById("feedbackInput").value;
 console.log(feedback);
 let  feedbackDisplay = document.getElementById("feedbackDisplay");
 feedbackDisplay.textContent = `Feedback is ${feedback}`;
 feedbackDisplay.style.backgroundColor = "yellow";
 feedbackDisplay.style.fontSize = "23px";
 feedbackDisplay.style.color= "black";
 
 
});



//example 9
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("domStatus").textContent = "Dom fully loaded"
})

//example 10
document.getElementById("toggleHighlight").
addEventListener('click',function(){
   let descriptionText = document.getElementById("descriptionText");
   descriptionText.classList.toggle("highlight")
})