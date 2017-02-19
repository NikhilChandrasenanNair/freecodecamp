function rot13(str) {
  var arry = str.toUpperCase().split(''), returnStr = "";
  arry.forEach(function(item){
    
    if(item.charCodeAt() > 64 && item.charCodeAt() <= 77){
      returnStr = returnStr + String.fromCharCode(item.charCodeAt() + 13); 
    }else if(item.charCodeAt() > 77 && item.charCodeAt() < 91){
      returnStr = returnStr + String.fromCharCode(((item.charCodeAt() + 12) - 90) + 65);
    }else{
      returnStr = returnStr + item;
    } 
    
  });
  return returnStr;
}
