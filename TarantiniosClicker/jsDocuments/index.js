var $count = 0;
var clickMultiplier = 0;
var hookerGares = 0;
var pimpLeis = 0;

function update() {
  document.getElementById('text').value = $count;
  document.getElementById('ammountClickMultiplier').innerText = "You Own " + clickMultiplier + " Click Multipliers!";
  document.getElementById('costClickMultiplier').innerText = (100 * (10 ** clickMultiplier)) + " $";
  document.getElementById('ammountHookerGares').innerText = "You Own " + hookerGares + " Hooker Gareses!";
  document.getElementById('costHookerGares').innerText = (10 + (3 * (hookerGares * hookerGares))) + " $";
  document.getElementById('ammountPimpLeis').innerText = "You Own " + pimpLeis + " Pimp Leises!";
  document.getElementById('costPimpLeis').innerText = (100 + (5 * (pimpLeis * pimpLeis))) + " $";
  document.getElementById('$PerSecond').innerText = "You are gaining " + ((hookerGares/2) + (pimpLeis)) + " $ per/s";
}

function timer() {
  $count = $count + (hookerGares/2);
  $count = $count + pimpLeis;
  update()
}
setInterval(timer, 1000 /*ms*/)

function add() {
  $count = $count + (5 ** clickMultiplier);
  update()
}

function save() {
  localStorage.setItem("$count", $count);
  localStorage.setItem("clickMultiplier", clickMultiplier);
  localStorage.setItem("hookerGares", hookerGares);
  localStorage.setItem("pimpLeis", pimpLeis);
}

function load() {
  $count = localStorage.getItem("$count");
  $count = parseInt($count);
  clickMultiplier = localStorage.getItem("clickMultiplier");
  clickMultiplier = parseInt(clickMultiplier);
  hookerGares = localStorage.getItem("hookerGares");
  hookerGares = parseInt(hookerGares);
  pimpLeis = localStorage.getItem("pimpLeis");
  pimpLeis = parseInt(pimpLeis);
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
