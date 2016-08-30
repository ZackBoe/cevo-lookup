const cevo = require('./cevo');

// Should find the most recent bans
cevo.searchBans(null, function(err, bans){
  console.log(bans);  
});  

// Hopefully will find a specific ban. 
// CEVO bans expire after 1 year, so this might not return anything
cevo.searchBans("STEAM_0:0:19877565", function(err, bans){
  console.log(bans);
});

// Should find some users named Bob
cevo.searchBans("Bob", function(err, bans){
  console.log(bans);  
});    
