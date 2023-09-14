//  Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one.
//  Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is Round 1: [s, f] 
//  Sacrifice his slowest snail against Steve's fastest.  Round 2: [m, s] Use his middle snail against Steve's slowest.Round 3:
//  [f, m] Use his fastest 
//  snail against Steve's middle.  // Create a function that determines whether Maurice's 
// plan will work by outputting true if Maurice wins 2/3 games.

function mauricesPlanWins() {
    let mauriceWins = 0;
  
    // Object to store snail speeds
    let speed = {
      'maurice': ['s', 'm', 'f'],
      'steve': ['s', 'm', 'f'],
    }
  
    let mauriceSnail = speed['maurice'][0]; // Represents Maurice's slowest snail
    let steveSnail = speed['steve'][2]; // Represents Steve's fastest snail
  
    // Simulate round 1
    if (mauriceSnail < steveSnail) {
      mauriceWins++;
    }
  
    // Simulate round 2
    mauriceSnail = speed['maurice'][1];
    steveSnail = speed['steve'][0];
  
    if (mauriceSnail > steveSnail) {
      mauriceWins++;
    }
  
    // Simulate round 3
    mauriceSnail = speed['maurice'][2];
    steveSnail = speed['steve'][1];
  
    if (mauriceSnail > steveSnail) {
      mauriceWins++;
    }
  
    return mauriceWins >= 2;
  }
  
  const result = mauricesPlanWins();
  console.log(result);
  