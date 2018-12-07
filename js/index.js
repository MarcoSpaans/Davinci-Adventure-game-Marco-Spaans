
var beeld = document.getElementById('beeld');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var itemslot1 = document.getElementById('itemslot1');
var itemslot2 = document.getElementById('itemslot2');
var itemslot3 = document.getElementById('itemslot3');
var text = document.getElementById('text');
var header = document.getElementById('header');

var gotKnife = false;
var gotKeys = false;
var gotGlass = false;
var counter = 0;
var amountsec = 3;
var amountsec2 = 5;
var monsterhit = 0;

//set up random code

var code = getRandomCode();
var randombutton1 = getRandomButton1();
var randombutton2 = getRandomButton2();

function getRandomCode() {
  var x = Math.floor((Math.random() * 9999));
  return x;
}

function getRandomButton1() {
  var y = Math.floor((Math.random() * 3) + 1);
  return y;
}

function getRandomButton2() {
  var z = Math.floor((Math.random() * 3) + 1);
  return z;
}

function menu() {
beeld.src = "img/begin.jpg";
header.innerHTML = "";
text.innerHTML = "";
button1.innerHTML = "start";
button1.setAttribute("onclick", "huis()")
button2.innerHTML = "verhaal"
button2.setAttribute("onclick", "story()");
button2.style.display = "inline-block"
}

function story() {
text.innerHTML = "Lang geleden heeft jouw voorvaderen een ketting gekocht die van generatie naar generatie. Jouw opa was de vorige eigenaar van de ketting alleen heeft hij hem verstopt in een verlaten huis. Het is jouw taak om de ketting terug te vinden.";
button1.innerHTML = "Go back";
button1.setAttribute("onclick", "menu()");
button2.innerHTML = "";
button2.style.display = "none";
header.innerHTML = "Verhaal";
}

function huis() {
  header.innerHTML = "huis";
  text.innerHTML = "";
  beeld.src = "img/huis.jpg"
  button1.innerHTML = "naar binnen";
  button1.setAttribute("onclick", "woonkamer()")
  button2.innerHTML = "naar schuur"
  button2.setAttribute("onclick", "schuur()");
  button3.style.display = "none";
}

function schuur() {
header.innerHTML = "schuur";
text.innerHTML = "";
beeld.src = "img/schuur.jpg";
button1.innerHTML = "terug";
button1.setAttribute("onclick", "huis()");
button2.innerHTML = "naar binnen"
button2.setAttribute("onclick", "schuurbinnen()");
}

function schuurbinnen() {
  if (gotKeys == false) {
    text.innerHTML = "de deur is gesloten!";
  } else if (gotKeys == true) {
    header.innerHTML = "schuur";
    text.innerHTML = "";
    beeld.src = "img/schuur binnen.jpg";
    button1.innerHTML = "terug";
    button1.setAttribute("onclick", "schuur()");
    button2.innerHTML = "bekijk brief"
    button2.setAttribute("onclick", "krijgcode()");
  }
}

function krijgcode() {
text.innerHTML = "er staat een code voor de kelder. de code is: " + code + ".";
}

function woonkamer() {
  header.innerHTML = "woonkamer";
  text.innerHTML = "";
  beeld.src = "img/woonkamer.jpg"
  button1.innerHTML = "terug";
  button1.setAttribute("onclick", "huis()");
  button2.innerHTML = "naar keuken";
  button2.setAttribute("onclick", "keuken()");
  button3.innerHTML = "naar boven";
  button3.setAttribute("onclick", "boven()");
  button3.style.display = "inline-block";
}

function keuken() {
  header.innerHTML = "keuken";
  beeld.src = "img/keuken.jpg"
  button1.innerHTML = "terug";
  button1.setAttribute("onclick", "woonkamer()");
  button2.innerHTML = "naar kelder";
  button2.setAttribute("onclick", "kelder()");
  if (gotKnife == false) {
    button3.innerHTML = "grijp mes";
    button3.setAttribute("onclick", "getKnife()");
    button3.style.display = "inline-block";
  } else if (gotKnife == true) {
    button3.innerHTML = "";
    button3.setAttribute("onclick", "");
    button3.style.display = "none";
  }
}

function boven() {
  header.innerHTML = "boven";
  text.innerHTML = "";
  beeld.src = "img/boven.jpg"
  button1.innerHTML = "terug";
  button1.setAttribute("onclick", "woonkamer()");
  button2.innerHTML = "naar slaapkamer";
  button2.setAttribute("onclick", "slaapkamer()");
  button3.innerHTML = "naar opslagkamer";
  if (gotKeys == true) {
    button3.setAttribute("onclick", "opslagopen()");
  } else {
    button3.setAttribute("onclick", "opslagclosed()");
  }
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
}

function kelder() {
  header.innerHTML = "kelderluik";
  text.innerHTML = "";
  beeld.src = "img/kelder.jpg"
  button1.innerHTML = "terug";
  button1.setAttribute("onclick", "keuken()");
  button2.innerHTML = "open luik";
  button2.setAttribute("onclick", "openBasement()");
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button3.style.display = "none";
}

function slaapkamer() {
  header.innerHTML = "slaapkamer";
  text.innerHTML = "";
  beeld.src = "img/slaapkamer.jpg"
  button1.innerHTML = "terug";
  button1.setAttribute("onclick", "boven()");
  if (gotKeys == true) {
    button2.innerHTML = "";
    button2.setAttribute("onclick", "()")
    button2.style.display = "none";
  } else {
    button2.innerHTML = "pak sleutels";
    button2.setAttribute("onclick", "battle1()");
  }
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button3.style.display = "none";
}

function battle1() {
  if (gotKnife == true) {
    header.innerHTML = "slaapkamer";
    text.innerHTML = "een monster verschijnt uit het niks. gelukkig heb je de mes van de keuken gepakt en ben je bereid om het te vechten.";
    beeld.src = "img/slaapkamer.jpg"
    button1.innerHTML = "vecht monster";
    button1.setAttribute("onclick", "battleattack1()");
    button2.innerHTML = "";
    button2.setAttribute("onclick", "()");
    button3.innerHTML = "";
    button3.setAttribute("onclick", "");
    button2.style.display = "none";
    button3.style.display = "none";
  } else {
    header.innerHTML = "slaapkamer";
    text.innerHTML = "een monster verschijnt uit het niks. je heb niks om tegen hem te vechten.";
    beeld.src = "img/slaapkamer.jpg"
    button1.innerHTML = "alsnog vechten";
    button1.setAttribute("onclick", "gameover()");
    button2.innerHTML = "";
    button2.setAttribute("onclick", "()");
    button3.innerHTML = "";
    button3.setAttribute("onclick", "");
    button2.style.display = "none";
    button3.style.display = "none";
  }
}

function battleattack1() {
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
  button1.style.display = "inline-block";

  if (randombutton1 == 1) {
    button1.innerHTML = "vecht";
    button1.setAttribute("onclick", "monsterhit++");
    button2.innerHTML = "";
    button2.setAttribute("onclick", "");
    button3.innerHTML = "";
    button3.setAttribute("onclick", "");
  } else if (randombutton1 == 2) {
    button2.innerHTML = "vecht";
    button2.setAttribute("onclick", "monsterhit++");
    button1.innerHTML = "";
    button1.setAttribute("onclick", "");
    button3.innerHTML = "";
    button3.setAttribute("onclick", "");
  } else if (randombutton1 == 3) {
    button3.innerHTML = "vecht";
    button3.setAttribute("onclick", "monsterhit++");
    button2.innerHTML = "";
    button2.setAttribute("onclick", "");
    button1.innerHTML = "";
    button1.setAttribute("onclick", "");
  }

text.innerHTML = amountsec;

var interval = setInterval(timeIt, 1000);

function timeIt() {

counter++
text.innerHTML = "" + (amountsec - counter) + "";
if (counter == amountsec) {
  clearInterval(interval);
  counter = 0;
  gameover();
} else if (monsterhit >= 5) {
clearInterval(interval);
battlesucces();
}

}


}

function battlesucces() {
monsterhit = 0;
counter = 0;
gotKeys = true;
text.innerHTML = "het monster trekt zich terug. je hebt de sleutels!";
button1.innerHTML = "ga terug";
button1.setAttribute("onclick","boven()");
button2.innerHTML = "";
button2.setAttribute("onclick","");
button3.innerHTML = "";
button3.setAttribute("onclick","");
button1.style.display = "inline-block";
button2.style.display = "none";
button3.style.display = "none";
itemslot2.src = "img/sleutels.png";
}

function opslagclosed() {
  text.innerHTML = "de deur zit op slot.";
}

function opslagopen() {
  header.innerHTML = "opslagkamer";
  beeld.src = "img/opslagkamer.jpg";
  button1.innerHTML = "terug";
  button1.setAttribute("onclick","boven()");
  if (gotGlass == true) {
    button2.innerHTML = "";
    button2.setAttribute("onclick","");
    buton2.style.display = "none";
  } else if (gotGlass == false) {
    button2.innerHTML = "pak stuk glas";
    button2.setAttribute("onclick","getGlass()");
  }
  button3.innerHTML = "";
  button3.setAttribute("onclick","");
  button3.style.display = "none";
}

function battle2() {
  header.innerHTML = "kelder";
  text.innerHTML = "de monster trok zich terug in de kelder. het is tijd om hem af te maken!";
  beeld.src = "img/kelder_binnen.jpg"
  button1.innerHTML = "start gevecht";
  button1.setAttribute("onclick", "battleattack2()");
  button2.innerHTML = "";
  button2.setAttribute("onclick", "");
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button1.style.display = "inline-block";
  button2.style.display = "none";
  button3.style.display = "none";
}

function battleattack2() {
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
  button1.style.display = "inline-block";

  if (randombutton2 == 1) {
    button1.innerHTML = "vecht";
    button1.setAttribute("onclick", "monsterhit++");
    button2.innerHTML = "";
    button2.setAttribute("onclick", "");
    button3.innerHTML = "";
    button3.setAttribute("onclick", "");
  } else if (randombutton2 == 2) {
    button2.innerHTML = "vecht";
    button2.setAttribute("onclick", "monsterhit++");
    button1.innerHTML = "";
    button1.setAttribute("onclick", "");
    button3.innerHTML = "";
    button3.setAttribute("onclick", "");
  } else if (randombutton2 == 3) {
    button3.innerHTML = "vecht";
    button3.setAttribute("onclick", "monsterhit++");
    button2.innerHTML = "";
    button2.setAttribute("onclick", "");
    button1.innerHTML = "";
    button1.setAttribute("onclick", "");
  }

  text.innerHTML = amountsec2;

  var interval = setInterval(timeIt, 1000);

  function timeIt() {

  counter++
  text.innerHTML = "" + (amountsec2 - counter) + "";
  if (counter == amountsec2) {
  clearInterval(interval);
  counter = 0;
  gameover();
} else if (monsterhit >= 8) {
  clearInterval(interval);
  battlesucces2();
  }

  }
}

function battlesucces2() {
  monsterhit = 0;
  counter = 0;
  text.innerHTML = "het monster is verslagen. er staat een kist achter hem.";
  button1.innerHTML = "open kist";
  button1.setAttribute("onclick", "chooseEnding()");
  button2.innerHTML = "";
  button2.setAttribute("onclick", "");
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button2.style.display = "none";
  button3.style.display = "none";
}

function chooseEnding() {
  button1.innerHTML = "neem mee";
  button1.setAttribute("onclick", "ending()");
  if (gotGlass == true) {
    text.innerHTML = "er zit een ketting met een gat erin. de gat heeft dezelfde vorm als het stuk glas";
    button2.innerHTML = "plaats glas in gat";
    button2.setAttribute("onclick", "altending1_1()");
    button2.style.display = "inline-block";
  } else if (gotGlass == false) {
    text.innerHTML = "er zit een ketting met een gat erin.";
  }
}

function ending() {
  header.innerHTML = "";
  text.innerHTML = "je loopt het huis uit ongedeerd en met jouw families artifect in jouw bezit. maar je blijft staan en denk je bij jezelf: 'heb ik iets gemist?'. je schud je hoofd nee en loop je weer gerust terug naar huis.";
  beeld.src = "img/huis.jpg"
  button1.innerHTML = "einde";
  button1.setAttribute("onclick", "end()");
  button2.innerHTML = "";
  button2.setAttribute("onclick", "");
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button2.style.display = "none";
  button3.style.display = "none";
}

function altending1_1() {
  header.innerHTML = "???";
  text.innerHTML = "woah!";
  beeld.src = "img/warp.jpg"
  button1.innerHTML = "next";
  button1.setAttribute("onclick", "altending1_2()");
  button2.innerHTML = "";
  button2.setAttribute("onclick", "");
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button2.style.display = "none";
  button3.style.display = "none";
}

function altending1_2() {
  header.innerHTML = "???";
  text.innerHTML = "waar ben ik?";
  beeld.src = "img/fantasy.jpg"
  button1.innerHTML = "wordt vervolgd";
  button1.setAttribute("onclick", "to_be_continued()");
  button2.innerHTML = "";
  button2.setAttribute("onclick", "");
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button2.style.display = "none";
  button3.style.display = "none";
}

function to_be_continued() {
  header.innerHTML = "";
  text.innerHTML = "";
  beeld.src = "img/to_be_continued.png"
  button1.innerHTML = "terug naar menu";
  button1.setAttribute("onclick", "menu()");
  button2.innerHTML = "";
  button2.setAttribute("onclick", "");
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button2.style.display = "none";
  button3.style.display = "none";
  itemslot1.src = "img/itemslot1.png";
  itemslot2.src = "img/itemslot2.png";
  itemslot3.src = "img/itemslot3.png";
  gotKnife = false;
  gotKeys = false;
  gotGlass = false;
  getRandomCode();
  getRandomButton1();
  getRandomButton2();
}

function end() {
  header.innerHTML = "";
  text.innerHTML = "";
  beeld.src = "img/einde.png"
  button1.innerHTML = "terug naar menu";
  button1.setAttribute("onclick", "menu()");
  button2.innerHTML = "";
  button2.setAttribute("onclick", "");
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button2.style.display = "none";
  button3.style.display = "none";
  itemslot1.src = "img/itemslot1.png";
  itemslot2.src = "img/itemslot2.png";
  itemslot3.src = "img/itemslot3.png";
  gotKnife = false;
  gotKeys = false;
  gotGlass = false;
  getRandomCode();
  getRandomButton1();
  getRandomButton2();
}

function gameover() {
  header.innerHTML = "";
  text.innerHTML = "game over";
  beeld.src = "img/gameover.jpg"
  button1.innerHTML = "terug naar menu";
  button1.setAttribute("onclick", "menu()");
  button2.innerHTML = "";
  button2.setAttribute("onclick", "");
  button3.innerHTML = "";
  button3.setAttribute("onclick", "");
  button1.style.display = "inline-block";
  button2.style.display = "none";
  button3.style.display = "none";
  itemslot1.src = "img/itemslot1.png";
  itemslot2.src = "img/itemslot2.png";
  itemslot3.src = "img/itemslot3.png";
  gotKnife = false;
  gotKeys = false;
  gotGlass = false;
  monsterhit = 0;
  getRandomCode();
  getRandomButton1();
  getRandomButton2();
}

function getKnife() {
text.innerHTML = "je hebt een mes!";
itemslot1.src = "img/mes.png"
gotKnife = true;
keuken();
}

function openBasement() {

var ans = prompt("er zit een slot op de luik. het vereist een code om geopend te worden")

if (ans == code) {
  text.innerHTML = "het is open!";
  button1.innerHTML = "naar binnen";
  button1.setAttribute("onclick", "battle2()");
  button1.style.display = "inline-block";
  button2.style.display = "none";
  button3.style.display = "none";
} else if (ans == null) {
  kelder();
} else {
  alert("ongeldig wachtwoord");
  openBasement();
}

}

function getGlass() {
  text.innerHTML = "je hebt een stuk glas!";
  itemslot3.src = "img/glas.png"
  gotGlass = true;
  opslagopen();
}
