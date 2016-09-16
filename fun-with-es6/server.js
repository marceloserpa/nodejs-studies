var cheerio = require('cheerio');
var reqpromise = require('request-promise');

const options = {  
  method: 'GET',
  uri: 'https://news.ycombinator.com'
}

reqpromise(options).then((response) => {
  var html = response;
  $ = cheerio.load(html);
  $('.storylink').each(function(i, element){
      console.log($(this).text());
   });
}).catch((err) =>  console.log(err));








