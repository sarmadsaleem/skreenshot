const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/explore');
  await page.setViewport({
    width: 1920,
    height: 1080
  });
  await page.screenshot({path: 'screenshot.png'});

  await browser.close();
}

getPic();