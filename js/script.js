//promenjive
const unosBtn = document.getElementById('formBtn');
const restartBtn = document.getElementById('restart');
const strana = document.getElementById('strana');
const datum = document.getElementById('datum');
const section2 = document.getElementById('section-2');
const prikazDana = document.getElementById('ostaloDana');
const prikazStrana = document.getElementById('stranaPoDanu');

//funkcije
function restart() {
  strana.value = '';
  datum.value = '';
  section2.classList.remove('visible');
}

function tacanUnos() {
  const danas = new Date();
  const datumIspita = new Date(datum.value);
  const ostaloDana = Math.floor((datumIspita - danas) / 1000 / 3600 / 24) + 1;
  section2.classList.add('visible');
  prikazDana.innerHTML = ostaloDana;
  prikazStrana.innerHTML = Math.round(strana.value / ostaloDana);
}

function test() {
  if (strana.value == '') {
    alert('niste uneli strane');
    strana.focus();
    return;
  }
  if (datum.value == '') {
    alert('niste uneli datum');
    datum.focus();
    return;
  } else {
    tacanUnos();
  }
}

//callback
unosBtn.addEventListener('click', test);

restartBtn.addEventListener('click', restart);
