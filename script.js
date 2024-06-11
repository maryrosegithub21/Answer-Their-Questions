

// === multiply  div using for loop ==== //
// function start(){
// let container = document.getElementById('container');
//     for (let i = 0; i <= 11; i++) {
//         let divsChild = document.createElement('div');
//         divsChild.id = "divsChild";
//         container.appendChild(divsChild);
//         // const count = [divsChild.length];
//         let randIndex = 1;
//         setInterval(function (count) {
//           if (count > divsChild.length) {
//                randIndex = 1;
//              }    
//               if (count < 1) {
//                randIndex = divsChild.length
//              }
//               for (let i = 0; i < divsChild.length; i++) {
//                 // divsChild[randIndex-1].style.backgroundColor = "yellow";          
//                 const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//           document.getElementById('divsChild').style.backgroundColor = "#" + randomColor ;
//               }
//               // divsChild[randIndex-1].style.backgroundColor = "yellow";        
//                 const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//           document.getElementById('divsChild').style.backgroundColor = "#" + randomColor ;
//         // }
//       }, 1000);
//       console.log(container);
//     }
// };
     
    
    // const myInterval = setInterval(setColor, 500);
        // function setColor(){
        //   let x = document.getElementById('divsChild');            
        //     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
        // }
        // function stopColor() {
        //   clearInterval(myInterval);
        // }
        
            //   if(divsChild.style.backgroundColor = "red"){
            //     for(let i = 0; i<=1000; i++){
            //       divsChild[i].style.backgroundColor = "blue";
            //     }
            // divsChild[i].style.backgroundColor = "yellow";
            //   }
            // }
        // divsChild.style.background = "#000000";
//     // Create an array of colors
// const colors = ["red", "green", "blue", "yellow"];

// // Get a reference to the container where you want to create the divs
// // const container = document.getElementById("container");

// // Initialize an index to keep track of the current color
// let colorIndex = 0;

// // Function to change the background color of a div
// function changeColor() {
//     // const div = document.createElement("div");
//     div.style.backgroundColor = colors[colorIndex];
//     container.appendChild(divsChild);

//     // Increment the color index (loop back to 0 if it exceeds the array length)
//     colorIndex = (colorIndex + 1) % colors.length;
// }

// // Call the function initially
// changeColor();

// Set an interval to call the function every 1000 milliseconds (1 second)
// setInterval(changeColor, 1000);

  // let boxRandom = document.getElementsById("divsChild");

// function start(){
//   let divsChild = document.createElement('div');
  
// }
// const button = document.getElementById('start');
// setInterval (function start(button) {
// button.onclick(); 
// divsChild[i].style.backgroundColor = "red"; 
// },350)

// function start(divObj){
//   divObj.style.background = "#000000";
// }


//  ===== Set TimeInterval to Button=== //
// const button = document.getElementById('start');
// setInterval (function() {
// button.onclick(); 
// // = function(e){
// divsChild[i].style.backgroundColor = "red"; 
// // };
// // boxRandom[i].style.backgroundColor = "red"; 
// // alert("texted");

// },350)

// === create div ==== //
// for (let i=1; i<=12; i++){
//   let newDiv = document.createElement ('div');
//   document.body.appendChild('newDiv');
// }
// function random(colors){
//   return Math.floor(Math.random()* colors);

// }
// function background(){
//   const rndl = 'rgb('+random(255)+',' + random(255)+',' + random(255)+ ')';
//   return rndl;

// }
// let divs = document.querySelectorAll('div');
// for(let i=0; i<divs.length;i++){
//   divs[i].onclick = function(e){
//     e.target.style.backgroundColor=background();
//   }
// }

// const button = document.getElementById('start');
// setInterval (function() {
// button.onclick();

// },350)



let randIndex = 1; // assign 1 to move the style background all the way to div
boxChangeColor(randIndex);

// for interval change color
let myInterval = null; // assign a null to access the two different function for set interval auto click
if (myInterval){
  myInterval = setInterval(function(){document.getElementById('start').click() },80);
  // myQuestion = setInterval(function(){document.getElementById("child").style.display="block"},30);
  document.getElementById("child").style.display="none";
}
// to start button of the game
function start(count) { 
  boxChangeColor(randIndex += count);
  if (!myInterval){
    myInterval = setInterval(function(){document.getElementById('start').click() },80); 
    // myQuestion = setInterval(function(){document.getElementById("child").style.display="block"},30); 
    document.getElementById("child").style.display="none";

  }
} 
// to stop the color for selecting
function stopGame() {
    clearInterval(myInterval);
    myInterval= null;
    play();
}
// for change color of the div
function boxChangeColor(count) {
  let i;
  let boxRandom = document.getElementsByClassName("boxRandom");
  if (count > boxRandom.length) {
   randIndex = 1
 }    
  if (count < 1) {
   randIndex = boxRandom.length
 }
  for (i = 0; i < boxRandom.length; i++) {
    boxRandom[i].style.backgroundColor = "white"; 
  }
  boxRandom[randIndex-1].style.backgroundColor = "black";
}
// for each button in the div which will pop up the question in each form
function play(){
  document.getElementById("child").style.display="block";
  // myQuestion = setInterval(function(){document.getElementById("child").style.display="block"},50);
// document.getElementById("child").style.display="block";
// if(document.getElementById('child1Ans1').checked) {
//   alert("Congratulations, You're answer is correct")
// }else if(document.getElementById('child1Ans2').checked) {
//   alert("Sorry, Wrong Answer")
// }else if(document.getElementById('child1Ans3').checked) {
//   alert("Sorry, Wrong Answer")
// }else if(document.getElementById('child1Ans4').checked) {
//   alert("Sorry, Wrong Answer")
// } 
}
function submitAnswer() {
  const radios = document.getElementsByName('choice');
  let val = "";

  for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          val = radios[i].value;
          break;
      }
  }

  if (val === "") {
      alert('Please select a choice answer.');
  } else if (val === "1 Timothy 2:4") {
      alert('Answer is correct!');
  } else {
      alert('Answer is wrong.');
  }
}


  // let nIntervID;
  // let clickMe = document.getElementsByClassName("start").click();

// for color changes 
 // document.getElementsByClassName("start").click() 
//  for (let i = 0; i < 1000; i++) {  }
    
    // boxChangeColor.onclick.call(boxChangeColor);

// var button = document.getElementsByClassName("start");
// button.innerHTML = "Start Auto Clicker";
// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);
// button.addEventListener("click", function() {
//     if (stop === 0) {
//         stop = 1;
//         button.innerHTML = "Start Auto Clicker";
//     } else if (stop === 1) {
//         // ...customize as needed
//     }
// });
// let nIntervID;
// function changeColor(){
// if (!nIntervID){
//   nIntervID = setInterval(boxChangeColor, 1000);
// }
// }
// setInterval(start, 1000);







// document.getElementById("start").addEventListener("click",boxChangeColor);
// window.onload = function(){
//   var button = document.getElementById('start'),
//     form = button.form;

//   form.addEventListener('submit', function(){
//     return false;
//   })

//   var times = 100;   //Here put the number of times you want to auto submit
//   (function submit(){
//     if(times == 0) return;
//     form.submit();
//     times--;
//     setTimeout(submit, 1000);   //Each second
//   })(); 
// }



// // Start Button Begin The Raffle ///
// let count = 1;
// count += 1;



// function start(count){
//     // condition that change color of Div
// const randomBegin = document.getElementById("boxRandom");
// for (let i = 0; i <= randomBegin.length; i++){
    
//     randomBegin[i].style.backgroundColor = "red";

// }
// randomBegin[count-1].style.backgroundColor = "violet";  
// }

// const child1Form = document.getElementById("child1");
// function play(event) {
//     alert("test");
//     // child1Form.style.display = "visible";
//     event.preventDefault();
//     if(child1Form.style.height === "0px") 
//     {
//       child1Form.style.display = "visible";
//       child1Form.style.zIndex = "2";
//       child1Form.style.position ="absolute";
//       child1Form.style.height = "300px";
//       child1Form.style.width = "300px";
      
//     }
//     else 
//     {
//       child1Form.style.maxHeight = "0px";
//     }
//   }
// const colorWheel1 = document.getElementsByClassName("random1");
// const colorWheel2 = document.getElementsByClassName("random2");
// const colorWheel3 = document.getElementsByClassName("random3");
// colors = ["#8E44AD", "#3498DB", "#1ABC9C", "#F1C40F", "#839192", "#FF0096", "red"];
// var a = document.querySelector("startDiv");
// var b = document.querySelector("start");
// // b.addEventListener("click",changeColor);
// b.addEventListener("click", function (event){
// const randomColor = [colorWheel1,colorWheel2,colorWheel3];
// async function start(event){
//     for(let i=0; i<colors.length; i++) {
//             a.style.backgroundColor = colors[i];
//             await delay(1000);
//           }
// }

// function delay(delayInms) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('waiting...')
//       resolve(2);
//     }, delayInms);
//   });
// }

// const a = document.getElementById("child3");
// const b = document.get("start");
// b.addEventListener("click",changeColor);

// async function changeColor()
// {
//   for(let i=0; i<colors.length; i++) {
//     a.style.backgroundColor = colors[i];
//     await delay(1000);
//   }
// }



// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }


// colors = ["#8E44AD", "#3498DB", "#1ABC9C", "#F1C40F", "#839192", "#FF0096", "red"];
// var a = document.querySelector("div");
// var b = document.querySelector("button");
// b.addEventListener("click",changeColor);

// async function changeColor()
// {
//   for(let i=0; i<colors.length; i++) {
//     a.style.backgroundColor = colors[i];
//     await delay(1000);
//   }
// }

// function delay(delayInms) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('waiting...')
//       resolve(2);
//     }, delayInms);
//   });
// }


// colors = ["#8E44AD", "#3498DB", "#1ABC9C", "#F1C40F", "#839192", "#FF0096", "red"];
// var a = document.querySelector("startDiv");
// var b = document.querySelector("start");
// // b.addEventListener("click",changeColor);

// b.addEventListener("click", function () {
//     // The parameter event is of the type KeyboardEvent
//     changeColor();
//   });

// async function changeColor()
// {
//   for(let i=0; i<colors.length; i++) {
//     a.style.backgroundColor = colors[i];
//     await delay(1000);
//   }
// }

// function delay(delayInms) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('waiting...')
//       resolve(2);
//     }, delayInms);
//   });
// }