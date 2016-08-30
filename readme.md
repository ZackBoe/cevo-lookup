## CEVO Lookup [![npm](https://img.shields.io/npm/v/cevo-lookup.svg)](https://www.npmjs.com/package/cevo-lookup) [![Build Status](https://travis-ci.org/ZackBoe/cevo-lookup.svg?branch=master)](https://travis-ci.org/ZackBoe/cevo-lookup)

Searches for suspensions from [CEVO's Suspension List](https://cevo.com/member/bans/) via web scraping. **Please see [Limitations](#limitations)**

## Installation
`npm i cevo-lookup`

## Example
See `example.js`

```javascript
const cevo = require('cevo-lookup');

cevo.searchBans("STEAM_0:0:19877565", function(err, bans){
  console.log(bans);
  /* [{
      id: 'STEAM_0:0:19877565',
      name: 'KQLY',
      date: '11/20/2014',
      types: 'Cheating',
      duration: '365 Days',
      game: 'https://26f4c47031ddfc9063b5-7abdb5fdd9c5b375ade3629b98754f69.ssl.cf2.rackcdn.com/1376430959_game-icon-53.png'
    }] */

});
```

## Limitations

This relies purely on screen scraping. If CEVO changes their markup, this will most likely break.  
Currently there is no support for pagination. CEVO returns 50 items per page.  
Currently it only returns results categorized as "Cheating"

_I do not plan to keep a very watchful eye on this. __Expect no maintenance.___  
It's simple enough to reimplement or adjust as you need.

## Tests

`npm test` will run the tests through [ava](https://github.com/avajs/ava)  
Because this relies on scraping, tests could fail easily.

## License

MIT License
Copyright (c) Zack Boehm

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
