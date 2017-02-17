function findLongestWord(str) {
  var arry = str.split(" "), longestWordLength = arry[0].length;
  for(var i = 1 ; i < arry.length ; i++){
    if(arry[i].length > longestWordLength){
      longestWordLength = arry[i].length;
    }
  }
  return longestWordLength;
}
