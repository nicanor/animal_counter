  var quantities =  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  var velocities =  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

  function StartCounter() {

    var units = [ 
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

    var bySecond = 4;
    for (var i = 0; i < quantities.length; ++i){ 
      velocities[i] = units[i] / 365 / 24 / 60 / 60 / bySecond;
    }
    setInterval("UpdateCounter()", 1000 / bySecond);
  }

  function UpdateCounter() {
    var num, thous, str;
    for (var i = 0; i < quantities.length; ++i) {
      quantities[i] += velocities[i];
      num = Math.round(quantities[i]);
      str = "";
      while (num > 1000) {
        thous = num % 1000;
        if (thous < 10)
          thous = "00" + thous;
        else if (thous < 100)
          thous = "0" + thous;
        str = "," + thous + str;
        num = Math.floor(num / 1000);
      }
      str = num + str;
      document.getElementById("cant" + i).innerHTML = str;
    }
  }