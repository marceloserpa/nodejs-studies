const puppeteer = require('puppeteer');
const file_directory = 'file://home/marceloserpa/test/results/gatling_results/eurekatest-1534818352641/index.html';

console.log("Start script");

(async () => {
  let browser = undefined
  try{
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(file_directory);
    await page.pdf({path: 'my_doc.pdf', format: 'A4'});
  } catch(e){
    console.error(e)
  } finally {
    await browser.close();
  }

})();

console.log("End script")
