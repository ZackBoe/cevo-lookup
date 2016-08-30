import test from 'ava';
const cevo = require('./cevo');

var recentban;

test.serial.cb('Get 50 latest bans from CEVO',t => {
  t.plan(1);
  
  cevo.searchBans(null, function(err, bans){
    
    recentban = bans[0]; // Save the most recent ban
    t.is(bans.length, 50, "is 50");
    t.end()
    
  });    
});

test.cb('Search CEVO for most recent ban by SteamID',t => {
  t.plan(1);
  
  // Search for that recent ban that we saved in the last test
  cevo.searchBans(recentban.id, function(err, bans){
    
    t.is(bans[0].id, recentban.id, "search result matches recently found ban");
    t.end();
    
  });    
});
