/*  
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
  var newArry = [], arryLoop = size, arry = arr;
  for(var i = 0; i < arry.length; i++){
 	var twoDimensional = [];
    for(var j = i, k = 0 ; k < arryLoop; k++){ 
       if(toString.call(arry[j]) != '[object Undefined]'){
		 twoDimensional.push(arry[j]);
         i = j++;
       }       
    }
   newArry.push(twoDimensional);
  }
  return newArry;
}

/* chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]];
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]];
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]];
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]];
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]];
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]];
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]; */
