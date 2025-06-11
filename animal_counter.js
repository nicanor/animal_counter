"use strict";

const quantities = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
const velocities = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

function startCounter() {
  const units = [
    49877536490, // gallinas
     2676365000, // patos
     1375940758, // cerdos
      635382008, // pavos
      564785251, // ovejas
      402611664, // cabras
      301275455, // vacas y terneros
       23199336, // bufalos
        5018470, // caballos
        1501799  // camellos y otros camelidos
  ];

  const updatesPerSecond = 4;
  for (let i = 0; i < quantities.length; i++) {
    velocities[i] = units[i] / 365 / 24 / 60 / 60 / updatesPerSecond;
  }
  setInterval(updateCounter, 1000 / updatesPerSecond);
}

function updateCounter() {
  for (let i = 0; i < quantities.length; i++) {
    quantities[i] += velocities[i];
    let num = Math.round(quantities[i]);
    let str = "";
    while (num > 1000) {
      let thous = num % 1000;
      if (thous < 10) {
        thous = "00" + thous;
      } else if (thous < 100) {
        thous = "0" + thous;
      }
      str = "," + thous + str;
      num = Math.floor(num / 1000);
    }
    str = num + str;
    const target = document.getElementById("cant" + i);
    if (target) {
      target.textContent = str;
    }
  }
}
