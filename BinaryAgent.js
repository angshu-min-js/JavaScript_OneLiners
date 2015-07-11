function binaryAgent(str) {
  return str.split(' ').filter(function(english) {
    return String.fromCharCode(parseInt(english, 2));
  }).join('');
}
