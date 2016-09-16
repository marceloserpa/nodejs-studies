var cheerio = require('cheerio');
var reqpromise = require('request-promise');

const options = {  
  method: 'GET',
  uri: 'https://news.ycombinator.com',   
  transform: function (body) {
     return cheerio.load(body);
  }
}

reqpromise(options).then(($) => {
  $('.storylink').each(function(i, element){
      console.log($(this).text());
   });
}).catch((err) =>  console.log(err));










