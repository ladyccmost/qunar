for (var i = 1; i < 4; i++) {
  (function (a) {
    setTimeout(function () {
      console.log(a);
    }, a * 3000);
  })(i)
}
