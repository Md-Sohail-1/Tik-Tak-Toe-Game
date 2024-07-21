let move = 0;
var row1 ;
var row2 ;
var row3 ;

// Get Every Box By Getting Query DOM Method;

var box1= document.querySelector("#box1");
var box2= document.querySelector("#box2");
var box3= document.querySelector("#box3");
var box4= document.querySelector("#box4");
var box5= document.querySelector("#box5");
var box6= document.querySelector("#box6");
var box7= document.querySelector("#box7");
var box8= document.querySelector("#box8");
var box9= document.querySelector("#box9");

var iconbox1= document.querySelector("#IconForBox1");
var iconbox2= document.querySelector("#IconForBox2");
var iconbox3= document.querySelector("#IconForBox3");
var iconbox4= document.querySelector("#IconForBox4");
var iconbox5= document.querySelector("#IconForBox5");
var iconbox6= document.querySelector("#IconForBox6");
var iconbox7= document.querySelector("#IconForBox7");
var iconbox8= document.querySelector("#IconForBox8");
var iconbox9= document.querySelector("#IconForBox9");

// Function For Every Button Clicking

async function start(){
const boxOne =()=>{
  if(move%2 == 0){
   //  box1.firstElementChild.style.display="none";
   // box1.lastElementChild.style.display="block";
   //  box1.innerHTML = `<p id="zero" class="z">O</p>`
    iconbox1.classList.add("fa-solid", "fa-xmark", "kanta")
    move++;
    box1.removeEventListener("click",boxOne)
   // let u = document.querySelector("#box1>#Kanta")
    //u.remove()
  }
  else{
   // box1.firstElementChild.style.display="block";
  //  box1.lastElementChild.style.display="none";
   // box1.innerHTML = `<p id="Kanta" class="k">X</p>`
    iconbox1.classList.add("fa-regular", "fa-circle", "zero")
    move++;
    box1.removeEventListener("click",boxOne)
    //row1 = 1;
   // let u = document.querySelector("#box1>#zero")
   // u.remove()
  }
}
const boxTwo =()=>{
  if(move%2 == 0){
   // box2.firstElementChild.style.display="none";
   // box2.lastElementChild.style.display="block";
   // box2.innerHTML = `<p id="zero" class="z">O</p>`
    iconbox2.classList.add("fa-solid","fa-xmark","kanta")
    move++;
    box2.removeEventListener("click",boxTwo)
    //let u = document.querySelector("#box2>#Kanta")
    //u.remove()
   // row1.push("0")
  }
  else{
  //  box2.firstElementChild.style.display="block";
  //  box2.lastElementChild.style.display="none";
   // box2.innerHTML = `<p id="Kanta" class="k">X</p>`
    iconbox2.classList.add("fa-regular", "fa-circle", "zero")
    move++;
    box2.removeEventListener("click",boxTwo)
   // let u = document.querySelector("#box2>#zero")
  //  u.remove()
  }
}
const boxThree =()=>{
  if(move%2 == 0){
  //  box3.firstElementChild.style.display="none";
  //  box3.lastElementChild.style.display="block";
  //  box3.innerHTML = `<p id="zero" class="z">O</p>`
    iconbox3.classList.add("fa-solid","fa-xmark","kanta")
    move++;
    box3.removeEventListener("click",boxThree)
   // let u = document.querySelector("#box3>#Kanta")
  //  u.remove()
  }
  else{
  //  box3.firstElementChild.style.display="block";
  //  box3.lastElementChild.style.display="none";
  //  box3.innerHTML = `<p id="Kanta" class="k">X</p>`
    iconbox3.classList.add("fa-regular", "fa-circle", "zero")
    move++;
    box3.removeEventListener("click",boxThree)
  //  let u = document.querySelector("#box3>#zero")
   // u.remove()
  }
}
const boxFour =()=>{
  if(move%2 == 0){
  //  box4.firstElementChild.style.display="none";
  //  box4.lastElementChild.style.display="block";
   // box4.innerHTML = `<p id="zero" class="z">O</p>`
    iconbox4.classList.add("fa-solid","fa-xmark","kanta")
    move++;
    box4.removeEventListener("click",boxFour)
   // let u = document.querySelector("#box4>#Kanta")
  //  u.remove()
  }
  else{
   // box4.firstElementChild.style.display="block";
   // box4.lastElementChild.style.display="none";
   // box4.innerHTML = `<p id="Kanta" class="k">X</p>`
    iconbox4.classList.add("fa-regular", "fa-circle", "zero")
    move++;
    box4.removeEventListener("click",boxFour)
   // let u = document.querySelector("#box4>#zero")
   // u.remove()
  }
}
const boxfive =()=>{
  if(move%2 == 0){
   // box5.firstElementChild.style.display="none";
   // box5.lastElementChild.style.display="block";
  //  box5.innerHTML = `<p id="zero" class="z">O</p>`
    iconbox5.classList.add("fa-solid","fa-xmark","kanta")
    move++;
    box5.removeEventListener("click",boxfive)
   // let u = document.querySelector("#box5>#Kanta")
   // u.remove()
  }
  else{
  //  box5.firstElementChild.style.display="block";
  //  box5.lastElementChild.style.display="none";
  //  box5.innerHTML = `<p id="Kanta" class="k">X</p>`
    iconbox5.classList.add("fa-regular", "fa-circle", "zero")
    move++;
    box5.removeEventListener("click",boxfive)
   // let u = document.querySelector("#box5>#zero")
  //  u.remove()
  }
}
const boxSix =()=>{
  if(move%2 == 0){
   // box6.firstElementChild.style.display="none";
   // box6.lastElementChild.style.display="block";
  //  box6.innerHTML = `<p id="zero" class="z">O</p>`
    iconbox6.classList.add("fa-solid","fa-xmark","kanta")
    move++;
    box6.removeEventListener("click",boxSix)
   // let u = document.querySelector("#box6>#Kanta")
   // u.remove()
  }
  else{
  //  box6.firstElementChild.style.display="block";
  //  box6.lastElementChild.style.display="none";
  //  box6.innerHTML = `<p id="Kanta" class="k">X</p>`
    iconbox6.classList.add("fa-regular", "fa-circle", "zero")
    move++;
    box6.removeEventListener("click",boxSix)
   // let u = document.querySelector("#box6>#zero")
   // u.remove()
  }
}
const boxSeven =()=>{
  if(move%2 == 0){
   // box7.firstElementChild.style.display="none";
   // box7.lastElementChild.style.display="block";
  //  box7.innerHTML = `<p id="zero" class="z">O</p>`
    iconbox7.classList.add("fa-solid","fa-xmark","kanta")
    move++;
    box7.removeEventListener("click",boxSeven)
  //  let u = document.querySelector("#box7>#Kanta")
  //  u.remove()
  }
  else{
  //  box7.firstElementChild.style.display="block";
  //  box7.lastElementChild.style.display="none";
   // box7.innerHTML = `<p id="Kanta" class="k">X</p>`
    iconbox7.classList.add("fa-regular", "fa-circle", "zero")
    move++;
    box7.removeEventListener("click",boxSeven)
  //  let u = document.querySelector("#box7>#zero")
   // u.remove()
  }
}
const boxEight =()=>{
  if(move%2 == 0){
   // box8.firstElementChild.style.display="none";
  //  box8.lastElementChild.style.display="block";
  //  box8.innerHTML = `<p id="zero" class="z">O</p>`
    iconbox8.classList.add("fa-solid","fa-xmark","kanta")
    move++;
    box8.removeEventListener("click",boxEight)
   // let u = document.querySelector("#box8>#Kanta")
   // u.remove()
  }
  else{
  //  box8.firstElementChild.style.display="block";
   // box8.lastElementChild.style.display="none";
  //  box8.innerHTML = `<p id="Kanta" class="k">X</p>`
    iconbox8.classList.add("fa-regular", "fa-circle", "zero")
    move++;
    box8.removeEventListener("click",boxEight)
   // let u = document.querySelector("#box8>#zero")
  //  u.remove()
  }
}
const boxNine =()=>{
  if(move%2 == 0){
   // box9.firstElementChild.style.display="none";
  //  box9.lastElementChild.style.display="block";
  //  box9.innerHTML = `<p id="zero" class="z">O</p>`
    iconbox9.classList.add("fa-solid","fa-xmark","kanta")
    move++;
    box9.removeEventListener("click",boxNine)
   // let u = document.querySelector("#box9>#Kanta")
   // u.remove()
  }
  else{
  //  box9.firstElementChild.style.display="block";
  //  box9.lastElementChild.style.display="none";
  //  box9.innerHTML = `<p id="Kanta" class="k">X</p>`
    iconbox9.classList.add("fa-regular", "fa-circle", "zero")
    move++;
    box9.removeEventListener("click",boxNine)
   // let u = document.querySelector("#box9>#zero")
   // u.remove()
  }
}

// Joint Click Function To Every Box 1 to 9;

box1.addEventListener("click",boxOne)
box2.addEventListener("click",boxTwo)
box3.addEventListener("click",boxThree)
box4.addEventListener("click",boxFour)
box5.addEventListener("click",boxfive)
box6.addEventListener("click",boxSix)
box7.addEventListener("click",boxSeven)
box8.addEventListener("click",boxEight)
box9.addEventListener("click",boxNine)


//console.log(start())
//document.write(await row1)
//console.log(await row1,row2)
  //let box1 = await row1 ;
//Calling Main Function

// Create Variable For Get Every Box Value k For X & z For O with Box Number;

var k1; var z1;
var k2; var z2; 
var k3; var z3;
var k4; var z4;
var k5; var z5;
var k6; var z6;
var k7; var z7;
var k8; var z8;
var k9; var z9;

// Set Interval Function To Get Every Box Value Every Seconds And If Value k or z who first fullfill with value pf true and false clear Interval Time;

let timer = setInterval(function(){
   k1 = iconbox1.matches(".fa-solid")
   z1 = iconbox1.matches(".fa-regular")
   //console.log( z,  k)
   
   if(z1==true){
     box1 = 0;
    // console.log("box1 mei zero hai")
   //console.log(`box1 zero = ${z1}`)
     clearInterval(timer)
   }
   if(k1==true){
     box1 =1;
    // console.log("box1 mei kanta hai")
    // console.log(`box1 kanta = ${k1}`)
     clearInterval(timer)
   }
//console.log(box1)
},1000)
var timer2 = setInterval(function(){
   k2 = iconbox2.matches(".fa-solid")
   z2 = iconbox2.matches(".fa-regular")
   //console.log( z,  k)
   
   if(z2==true){
    // console.log(k2,z2)
     box2 = 0;
   //  console.log("box2 mei zero hai")
     clearInterval(timer2)
   }
   if(k2==true){
     box2 =1;
   //  console.log("box2 mei kanta hai")
     clearInterval(timer2)
   }
},1000)
var timer3 = setInterval(function(){
   k3 = iconbox3.matches(".fa-solid")
   z3 = iconbox3.matches(".fa-regular")
   //console.log( z,  k)
   
   if(z3==true){
     box3 = 0;
    // console.log("box3 mei zero hai")
     clearInterval(timer3)
   }
   if(k3==true){
     box3 =1;
   //  console.log("box3 mei kanta hai")
     clearInterval(timer3)
   }
   
},1000)
let timer4 = setInterval(function(){
   k4 = iconbox4.matches(".fa-solid")
   z4 = iconbox4.matches(".fa-regular")
   //console.log( z,  k)
   
   if(z4==true){
     box4 = 0;
    // console.log("box1 mei zero hai")
    // console.log(`box4 zero = ${z4}`)
     clearInterval(timer4)
   }
   if(k4==true){
     box4 =1;
    // console.log("box1 mei kanta hai")
    // console.log(`box4 kanta = ${k4}`)
     clearInterval(timer4)
   }
//console.log(box1)
},1000)
var timer5 = setInterval(function(){
   k5 = iconbox5.matches(".fa-solid")
   z5 = iconbox5.matches(".fa-regular")
   //console.log( z,  k)
   
   if(z5==true){
    // console.log(k2,z2)
     box5 = 0;
    // console.log("box5 mei zero hai")
     clearInterval(timer5)
   }
   if(k5==true){
     box5 =1;
    // console.log("box5 mei kanta hai")
     clearInterval(timer5)
   }
},1000)
var timer6 = setInterval(function(){
   k6 = iconbox6.matches(".fa-solid")
   z6 = iconbox6.matches(".fa-regular")
   //console.log( z,  k)
   
   if(z6==true){
     box6 = 0;
   //  console.log("box6 mei zero hai")
     clearInterval(timer6)
   }
   if(k6==true){
     box6 =1;
   //  console.log("box6 mei kanta hai")
     clearInterval(timer6)
   }
   
},1000)
let timer7 = setInterval(function(){
   k7 = iconbox7.matches(".fa-solid")
   z7 = iconbox7.matches(".fa-regular")
   //console.log( z,  k)
   
   if(z7==true){
     box7 = 0;
    // console.log("box1 mei zero hai")
   //  console.log(`box7 zero = ${z7}`)
     clearInterval(timer7)
   }
   if(k7==true){
     box7 =1;
    // console.log("box1 mei kanta hai")
    // console.log(`box7 kanta = ${k7}`)
     clearInterval(timer7)
   }
//console.log(box1)
},1000)
var timer8 = setInterval(function(){
   k8 = iconbox8.matches(".fa-solid")
   z8 = iconbox8.matches(".fa-regular")
   //console.log( z,  k)
   
   if(z8==true){
    // console.log(k2,z2)
     box8 = 0;
   //  console.log("box8 mei zero hai")
     clearInterval(timer8)
   }
   if(k8==true){
     box8 =1;
   //  console.log("box8 mei kanta hai")
     clearInterval(timer8)
   }
},1000)
var timer9 = setInterval(function(){
   k9 = iconbox9.matches(".fa-solid")
   z9 = iconbox9.matches(".fa-regular")
   //console.log( z,  k)
   
   if(z9==true){
     box9 = 0;
   //  console.log("box9 mei zero hai")
     clearInterval(timer9)
   }
   if(k9==true){
     box9 =1;
   //  console.log("box9 mei kanta hai")
     clearInterval(timer9)
   }
   
},1000)

// Get Outline Box Where I Difine Who Win;

let outline = document.querySelector("#outline")
let SubmitBtn = document.querySelector("#submit")
let CancelBtn = document.querySelector("#cancel")
let Result = document.querySelector("#result")
let AlertBox = document.querySelector("#alert")
AlertBox.hidden="true";
SubmitBtn.addEventListener("click",function(){
  setTimeout(function(){
  window.location.reload()
  },500)
})
CancelBtn.addEventListener("click",function (e){
 // e.preventDefault()
  //AlertBox.hidden="true";
  setTimeout(function(){
  AlertBox.style="display:none; z-index:-1;";
  },500)
})

const winner =()=>{
    Result.innerHTML="Game Finished";
    setTimeout(function(){
    AlertBox.classList.add("alert-box");
    },500)
    AlertBox.style="z-index:4;";
    AlertBox.hidden="false";
}
const Draw =()=>{
    Result.innerHTML="Game Drew";
    setTimeout(function(){
    AlertBox.classList.add("alert-box");
    },500)
    AlertBox.style="z-index:4;";
    AlertBox.hidden="false";
}

// set Interval For every Posible Winner conditions In Every Seconds;

let time = setInterval(function(){
  if (box1==box2 && box3==box2 ){
   clearInterval(time);
   try{
    box4.removeEventListener("click",boxFour)
   } 
   catch(err){
   }
   try{
    box5.removeEventListener("click",boxfive)
   }
   catch(err){
   }
   try{
    box6.removeEventListener("click",boxSix)
   }
   catch(err){
   }
   try{
    box7.removeEventListener("click",boxSeven)
   }
   catch(err){
   }
   try{
    box8.removeEventListener("click",boxEight)
   }
   catch(err){
   }
   try{
    box9.removeEventListener("click",boxNine)
   }
   catch(err){
    }
    outline.classList.add("horizontal");
    move=0;
    document.querySelector("#outline").style="border-top:5px solid rgba(107,240,200,1); z-index:3;";
    winner();
    console.log("Game Finished");
   // clearInterval(time);
  }
  if (box4==box5 && box5==box6 ){
   clearInterval(time);
    try{
    box1.removeEventListener("click",boxOne)
    }
    catch(err){
   }
    try{
    box9.removeEventListener("click",boxNine)
    }
    catch(err){
   }
    try{
    box7.removeEventListener("click",boxSeven)
    }
    catch(err){
   }
    try{
    box2.removeEventListener("click",boxTwo)
    }
    catch(err){
   }
    try{
    box3.removeEventListener("click",boxThree)
    }
    catch(err){
   }
    try{
    box8.removeEventListener("click",boxEight)
    }
    catch(err){
   }
    outline.classList.add("mid-line");
    move=0;
    document.querySelector("#outline").style="border-top:5px solid rgba(107,240,200,1); z-index:2; animation:right-to-left .5s ease 0s 1; transition:.5s ease;"
    winner();
    console.log("Game Finished");
   // clearInterval(time);
  }
  if (box7==box8 && box8==box9 ){
   clearInterval(time);
    try{
    box2.removeEventListener("click",boxTwo)
    }
    catch(err){
   }
    try{
    box5.removeEventListener("click",boxfive)
    }
    catch(err){
   }
    try{
    box1.removeEventListener("click",boxOne)
    }
    catch(err){
   }
    try{
    box4.removeEventListener("click",boxFour)
    }
    catch(err){
   }
    try{
    box3.removeEventListener("click",boxThree)
    }
    catch(err){
   }
    try{
    box6.removeEventListener("click",boxSix)
    }
    catch(err){
   }
    outline.classList.add("horizontal");
    move=0;
    document.querySelector("#outline").style="border-bottom:5px solid rgba(107,240,200,1); z-index:1;"
    winner();
    console.log("Game Finished");
   // clearInterval(time);
  }
  if (box2==box5 && box5==box8 ){
   clearInterval(time);
    try{
    box1.removeEventListener("click",boxOne)
    }
    catch(err){
   }
    try{
    box9.removeEventListener("click",boxNine)
    }
    catch(err){
   }
    try{
    box7.removeEventListener("click",boxSeven)
    }
    catch(err){
   }
    try{
    box4.removeEventListener("click",boxFour)
    }
    catch(err){
   }
    try{
    box3.removeEventListener("click",boxThree)
    }
    catch(err){
   }
    try{
    box6.removeEventListener("click",boxSix)
    }
    catch(err){
   }
    outline.classList.add("center-line");
    move=0;
    document.querySelector("#outline").style="border-top:5px solid rgba(107,240,200,1); z-index:1; animation:top-to-bottom .5s ease 0s 1; transition:.5s ease;"
    winner();
    console.log("Game Finished");
   // clearInterval(time);
  }
  if (box1==box4 && box7==box4 ){
   clearInterval(time);
   try{
    box2.removeEventListener("click",boxTwo)
    }
   catch(err){
   }
   try{
    box5.removeEventListener("click",boxfive)
    }
   catch(err){
   }
   try{
    box6.removeEventListener("click",boxSix)
    }
   catch(err){
   }
   try{
    box3.removeEventListener("click",boxThree)
    }
   catch(err){
   }
   try{
    box8.removeEventListener("click",boxEight)
    }
   catch(err){
   }
   try{
    box9.removeEventListener("click",boxNine)
    }
   catch(err){
   }
   outline.classList.add("vertical");
   move=0;
   document.querySelector("#outline").style="border-left:5px solid rgba(107,240,200,1); z-index:1;"
   winner();
   console.log("Game Finised");
  }
  if (box3==box6 && box3==box9 ){
    clearInterval(time);
    try{
    box2.removeEventListener("click",boxTwo)
    }
    catch(err){
   }
    try{
    box5.removeEventListener("click",boxfive)
    }
    catch(err){
   }
    try{
    box1.removeEventListener("click",boxOne)
    }
    catch(err){
   }
    try{
    box4.removeEventListener("click",boxFour)
    }
    catch(err){
   }
    try{
    box8.removeEventListener("click",boxEight)
    }
    catch(err){
   }
    try{
    box7.removeEventListener("click",boxSeven)
    }
    catch(err){
   }
    outline.classList.add("vertical");
    move=0;
    document.querySelector("#outline").style="border-right:5px solid rgba(107,240,200,1); z-index:1;"
    winner();
    console.log("Game Finished");
  }
  if (box7==box5 && box5==box3 ){
    clearInterval(time);
    try{
    box2.removeEventListener("click",boxTwo)
    }
    catch(err){
   }
    try{
    box8.removeEventListener("click",boxEight)
    }
    catch(err){
   }
    try{
    box1.removeEventListener("click",boxOne)
    }
    catch(err){
   }
    try{
    box4.removeEventListener("click",boxFour)
    }
    catch(err){
   }
    try{
    box9.removeEventListener("click",boxNine)
    }
    catch(err){
   }
    try{
    box6.removeEventListener("click",boxSix)
    }
    catch(err){
   }
    outline.classList.add("cross-LTR");
    move=0;
    document.querySelector("#outline").style="border-bottom:5px solid rgba(107,240,200,1); z-index:1; animation:right-to-left .5s ease 0s 1; transition:.5s ease;"
    winner();
    console.log("Game Finished");
  }
  if (box1==box5 && box5==box9 ){
    clearInterval(time);
    try{
    box2.removeEventListener("click",boxTwo)
    }
    catch(err){
   }
    try{
    box8.removeEventListener("click",boxEight)
    }
    catch(err){
   }
    try{
    box7.removeEventListener("click",boxSeven)
    }
    catch(err){
   }
    try{
    box4.removeEventListener("click",boxFour)
    }
    catch(err){
   }
    try{
    box3.removeEventListener("click",boxThree)
    }
    catch(err){
   }
    try{
    box6.removeEventListener("click",boxSix)
    }
    catch(err){
   }
    outline.classList.add("cross-RTL");
    move=0;
    document.querySelector("#outline").style="border-bottom:5px solid rgba(107,240,200,1); z-index:1; animation:top-to-bottom 0.5s ease 0s infinity; transition:0.5s ease;"
    winner();
    console.log("Game Finished");
  }
 
 /* 
 if (box1==box2 && box2==box3 && box2 == 0){
    console.log("winner is O")
    clearInterval(tim)
  }
  */
 if(move==9 && Result.value == undefined){
   move++;
   Draw()
   }
},1000)

/*
setInterval(()=>{
//box1.contains();
//box1.contains();
//console.log(z,k)
*/

/*
if (z==true ){
  console.log(`box 1 mei zero hai`)
  clearInterval(timer)
}
if (k==true ){
  console.log(`box 1 mei kanta hai`)
  cleatInterval(timer)
}
*/
//},1000)

}
/*
setInterval(function(){
if(sessionStorage.getItem("toggleTap")==1){
     document.querySelector("#page").style ="background:rgba(0,0,0,0.7);"
     document.querySelector("#heading").style ="color:rgba(255,255,255,0.7);"
     document.querySelector("#heading > b").style ="color:#77a6f7;"
     
}
if(sessionStorage.getItem("toggleTap")==0){
     document.querySelector("#page").style ="background:#77a6f7;"
     document.querySelector("#heading").style ="color:rgba(0,0,0,0.8);"
     document.querySelector("#heading > b").style ="color:rgba(255,255,255,0.8);"
     
}
},100)
*/

let lightMode = 0;
let darkMode = 1;
setInterval(function(){
   if(sessionStorage.getItem("toggleTap")==1){
     document.querySelector("#check").checked = true;
   }
   if(sessionStorage.getItem("toggleTap")==0){
     document.querySelector("#check").checked = false;
   }
},0.1000)

const darkmode =()=>{
   sessionStorage.setItem("toggleTap",darkMode);
   toggle.removeEventListener("click",darkmode);
}
const lightmode =()=>{
   sessionStorage.setItem("toggleTap",lightMode);
   toggle.removeEventListener("click",lightmode);
}

let toggle = document.querySelector("#show");
setInterval(function(){
if(sessionStorage.getItem("toggleTap")!=1){
toggle.addEventListener("click",darkmode)
}
if(sessionStorage.getItem("toggleTap")==1){
toggle.addEventListener("click",lightmode)
}
},100)

//Start a function
start()


//alert(document.querySelector("#alert").classList.contains("alert-box"))
//alert(document.querySelector("#result").value == undefined)
