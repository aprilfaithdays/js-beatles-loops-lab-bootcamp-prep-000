function theBeatlesPlay( musicians, instruments) {
  
  var instrumentsMusiciansPlay = [];
  
  for ( let i = 0; i < musicians.length; i++) {
    
    instrumentsMusiciansPlay.push( musicians[i] + " plays " + instruments[i]);
    
  }
  
  return instrumentsMusiciansPlay;
  
}

function johnLennonFacts(facts) {
  
  let n = 0;
  let newFacts = [];
  
  while (n < facts.length) {
      newFacts.push(facts[n++] + "!!!");
  }
  
 return newFacts;
}
