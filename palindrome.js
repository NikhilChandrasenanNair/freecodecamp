function palindrome(str) {
  var pattrn = /_|,|\.|-|\s|:|\(|\)|\\|\//g;    
  return str.toLowerCase().replace(pattrn, "") ==  str.toLowerCase().replace(pattrn, "").split('').reverse().join('') ? true : false;
}
