"use strict";

const quantities = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
const velocities = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

function startCounter() {
  const units = [
    49877536490, // chickens
     2676365000, // ducks
     1375940758, // pigs
      635382008, // turkeys
      564785251, // sheep
      402611664, // goats
      301275455, // cows and calves
       23199336, // buffalo
        5018470, // horses
        1501799  // camels and other camelids
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
    const target = document.getElementById("count" + i);
    if (target) {
      target.textContent = str;
    }
  }
}
