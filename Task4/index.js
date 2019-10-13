function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

function bounce(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

let bounceEaseOut = makeEaseOut(bounce);

circle.onclick = function() {
  animate({
    duration: 4000,
    timing: bounceEaseOut,
    draw: function(progress) {
      circle.style.top = progress * 375 + 'px';
      circle.style.left = progress * 375 + 'px';
    }
  });
};