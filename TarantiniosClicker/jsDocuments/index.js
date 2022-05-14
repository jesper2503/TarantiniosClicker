var $count = 0;
var clickMultiplier = 0;
var hookerGares = 0;
var pimpLeis = 0;
var storgataHarres = 0;
var turGoblins = 0;
var hagres = 0;
var twoHundredIqDarin = 0;
var juveedit = 0;
var trancendedItGuy = 0;

function update() {
  document.getElementById('text').value = $count;
  document.getElementById('ammountClickMultiplier').innerText = "You Own " + clickMultiplier + " Click Multipliers!";
  document.getElementById('costClickMultiplier').innerText = (100 * (10 ** clickMultiplier)) + " $";
  document.getElementById('ammountHookerGares').innerText = "You Own " + hookerGares + " Hooker Gareses!";
  document.getElementById('costHookerGares').innerText = (10 + (3 * (hookerGares * hookerGares))) + " $";
  document.getElementById('ammountPimpLeis').innerText = "You Own " + pimpLeis + " Pimp Leises!";
  document.getElementById('costPimpLeis').innerText = (100 + (5 * (pimpLeis * pimpLeis))) + " $";
  document.getElementById('ammountStorgataHarres').innerText = "You Own " + storgataHarres + " Storgata Harreses!";
  document.getElementById('costStorgataHarres').innerText = (1000 + (20 * (storgataHarres * storgataHarres))) + " $";
  document.getElementById('ammountTurGoblins').innerText = "You Own " + turGoblins + " Tur Goblins!";
  document.getElementById('costTurGoblins').innerText = (2000 + (50 * (turGoblins * turGoblins))) + " $";
  document.getElementById('ammountHagres').innerText = "You Own " + hagres + " Hagreses!";
  document.getElementById('costHagres').innerText = (4500 + (120 * (hagres * hagres))) + " $";
  document.getElementById('ammountTwoHundredIqDarin').innerText = "You Own " + twoHundredIqDarin + " 200 IQ Darins!";
  document.getElementById('costTwoHundredIqDarin').innerText = (10000 + (350 * (twoHundredIqDarin * twoHundredIqDarin))) + " $";
  document.getElementById('ammountJuveedit').innerText = "You Own " + juveedit + " Juveedits!";
  document.getElementById('costJuveedit').innerText = (15000 + (500 * (juveedit * juveedit))) + " $";
  document.getElementById('ammountTrancendedItGuy').innerText = "You Own " + trancendedItGuy + " Trancended IT Guys!";
  document.getElementById('costTrancendedItGuy').innerText = (100000000 + (100000 * (trancendedItGuy * trancendedItGuy))) + " $";
  document.getElementById('$PerSecond').innerText = "You are gaining " + ((hookerGares / 2) + (pimpLeis) + (storgataHarres * 5) + (turGoblins * 12.5) + (hagres * 50) + (twoHundredIqDarin * 200) + (juveedit * 350) + (trancendedItGuy * 100000)) + " $ per/s";
}

function timer() {
  $count = $count + (hookerGares / 2);
  $count = $count + pimpLeis;
  $count = $count + (storgataHarres * 5)
  $count = $count + (turGoblins * 12.5)
  $count = $count + (hagres * 50)
  $count = $count + (twoHundredIqDarin * 200)
  $count = $count + (juveedit * 350)
  $count = $count + (trancendedItGuy * 100000)

  update()
}
setInterval(timer, 1000 /*ms*/)

function add() {
  $count = $count + (5 ** clickMultiplier);
  update()
}

function save() {
  localStorage.setItem("$count",JSON.stringify($count));
  localStorage.setItem("clickMultiplier",JSON.stringify(clickMultiplier));
  localStorage.setItem("hookerGares",JSON.stringify(hookerGares));
  localStorage.setItem("pimpLeis",JSON.stringify(pimpLeis));
  localStorage.setItem("storgataHarres",JSON.stringify(storgataHarres));
  localStorage.setItem("turGoblins",JSON.stringify(turGoblins));
  localStorage.setItem("hagres",JSON.stringify(hagres));
  localStorage.setItem("twoHundredIqDarin",JSON.stringify(twoHundredIqDarin));
  localStorage.setItem("juveedit",JSON.stringify(juveedit));
  localStorage.setItem("trancendedItGuy",JSON.stringify(trancendedItGuy));
}

function load() {
  $count=JSON.parse(localStorage.getItem("$count"));
  clickMultiplier=JSON.parse(localStorage.getItem("clickMultiplier"));
  hookerGares=JSON.parse(localStorage.getItem("hookerGares"));
  pimpLeis=JSON.parse(localStorage.getItem("pimpLeis"));
  storgataHarres=JSON.parse(localStorage.getItem("storgataHarres"));
  turGoblins=JSON.parse(localStorage.getItem("turGoblins"));
  hagres=JSON.parse(localStorage.getItem("hagres"));
  twoHundredIqDarin=JSON.parse(localStorage.getItem("twoHundredIqDarin"));
  juveedit=JSON.parse(localStorage.getItem("juveedit"));
  trancendedItGuy=JSON.parse(localStorage.getItem("trancendedItGuy"));
  update()
}

function buyClickMultiplier() {
  if ($count >= (100 * (10 ** clickMultiplier))) {
    $count = $count - (100 * (10 ** clickMultiplier));
    clickMultiplier = clickMultiplier + 1;
    update()
  }
}

function buyHookerGares() {
  if ($count >= (10 + (3 * (hookerGares * hookerGares)))) {
    $count = $count - (10 + (3 * (hookerGares * hookerGares)));
    hookerGares = hookerGares + 1;
    update()
  }
}

function buyPimpLeis() {
  if ($count >= (100 + (5 * (pimpLeis * pimpLeis)))) {
    $count = $count - (100 + (5 * (pimpLeis * pimpLeis)));
    pimpLeis = pimpLeis + 1;
    update()
  }
}

function buyStorgataHarres() {
  if ($count >= (1000 + (20 * (storgataHarres * storgataHarres)))) {
    $count = $count - (1000 + (20 * (storgataHarres *storgataHarres)));
    storgataHarres = storgataHarres + 1;
    update()
  }
}

function buyTurGoblins() {
  if ($count >= (2000 + (50 * (turGoblins * turGoblins)))) {
    $count = $count - (2000 + (50 * (turGoblins * turGoblins)));
    turGoblins = turGoblins + 1;
    update()
  }
}

function buyHagres() {
  if ($count >= (4500 + (120 * (hagres * hagres)))) {
    $count = $count - (4500 + (120 * (hagres * hagres)));
    hagres = hagres + 1;
    update()
  }
}

function buyTwoHundredIqDarin() {
  if ($count >= (10000 + (350 * (twoHundredIqDarin * twoHundredIqDarin)))) {
    $count = $count - (10000 + (350 * (twoHundredIqDarin * twoHundredIqDarin)));
    twoHundredIqDarin = twoHundredIqDarin + 1;
    update()
  }
}

function buyJuveedit() {
  if ($count >= (15000 + (500 * (juveedit * juveedit)))) {
    $count = $count - (15000 + (500 * (juveedit * juveedit)));
    juveedit = juveedit + 1;
    update()
  }
}

function buyTrancendedItGuy() {
  if ($count >= (100000000 + (100000 * (trancendedItGuy * trancendedItGuy)))) {
    $count = $count - (100000000 + (100000 * (trancendedItGuy * trancendedItGuy)));
    trancendedItGuy = trancendedItGuy + 1;
    update()
  }
}
