(function (qqq) {
  var toto = 123;

  console.log("qqq: ", qqq);
  window.toto = toto;

  var titi = 45;
  console.log("titi: ", titi);
})(456);

// console.log("titi: ", titi);
console.log("toto: ", toto);
