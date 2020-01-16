let mijnButton1 = document.getElementsByClassName("button")[0];
let mijnButton2 = document.getElementsByClassName("button")[1];
let mijnBody = document.getElementsByTagName("body")[0];
let woord1 = document.getElementById("woord1");
let woord2 = document.getElementById("woord2");
let woord3 = document.getElementById("woord3");
let woord4 = document.getElementById("woord4");
let mijnMain = document.getElementsByTagName("main")[0];
let mijnBoodschap = document.createElement("h3");
mijnMain.appendChild(mijnBoodschap);
let titelGedicht = document.createElement("h2");
mijnBoodschap.appendChild(titelGedicht);


mijnButton1.onclick = function() {
  if (woord1.value != "" && woord2.value != "" && woord3.value != "" && woord4.value != "" && woord5.value != "" && woord6.value != "") {
    mijnMain.appendChild(mijnBoodschap);
    let mijnRegel1 = document.createElement("p");
    let mijnRegel2 = document.createElement("p");
    let mijnRegel3 = document.createElement("p");
    let mijnRegel4 = document.createElement("p");
    let mijnRegel5 = document.createElement("p");
    let mijnRegel6 = document.createElement("p");
    let mijnRegel7 = document.createElement("p");
    let mijnRegel8 = document.createElement("p");
    mijnBoodschap.appendChild(titelGedicht);
    mijnBoodschap.appendChild(mijnRegel1);
    mijnBoodschap.appendChild(mijnRegel2);
    mijnBoodschap.appendChild(mijnRegel3);
    mijnBoodschap.appendChild(mijnRegel4);
    mijnBoodschap.appendChild(mijnRegel5);
    mijnBoodschap.appendChild(mijnRegel6);
    mijnBoodschap.appendChild(mijnRegel7);
    mijnBoodschap.appendChild(mijnRegel8);
    titelGedicht.innerHTML = woord1.value;
    mijnRegel1.innerHTML = woord1.value;
    mijnRegel2.innerHTML = "In " + woord2.value + " kwam ik je tegen";
    mijnRegel3.innerHTML = "Zo " + woord3.value;
    mijnRegel4.innerHTML = "En toch zo " + woord4.value + " tegelijk";
    mijnRegel5.innerHTML = woord5.value;
    mijnRegel6.innerHTML = "Oh zo " + woord5.value + " voelde ik me";
    mijnRegel7.innerHTML = "Bij het zien van je oh zo begeerlijke " + woord6.value;
    mijnRegel8.innerHTML = "Liefste " + woord1.value + ", wat zie ik je graag!";
    mijnButton1.classList.add("ingevuld");
    titelGedicht.classList.add("ingevuld");
    mijnRegel8.classList.add("opvallen");
  } else {
    titelGedicht.innerHTML = "Gelieve alle velden in te vullen";
    mijnButton1.classList.add("leeg");
    titelGedicht.classList.add("leeg");
  }
}

mijnButton2.onclick = function(){
  document.location.reload(true);
}
