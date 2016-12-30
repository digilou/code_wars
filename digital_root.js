function digital_root(n) {
  var arr = n.toString(10).split('');

  if (arr.length <= 1) {
    return n;
  } else {
    var sum = arr.reduce(function(a, b) {return +a + +b});
    return digital_root(sum);
  }
}
