const scrapeIt = require('scrape-it');

module.exports = {

  searchBans: function(query, cb){
    if(query == null) query = "";
    scrapeIt("https://cevo.com/member/bans/?filter=7&search="+query, {
      bans: {
        listItem: ".ban-list tr[class!='subheader']",
        data: {
          id: 'td.uniqueid',
          name: 'td.username',
          date: 'td.date',
          types: 'td.types',
          duration: 'td.duration',
          game: {
            selector: "td.game img",
              attr: "src"
          }
        }}

      }, (err, result) => {
       if(err) { return cb(err, null); }
       else { return cb(null, result.bans); }
     });
  }

};
