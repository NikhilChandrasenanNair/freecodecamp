function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
}

var myRandom = randomRange(5, 15);
