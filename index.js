const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Ann array of viewport sizes for different devices.
  const viewports = [2560, 1920, 1680, 1440, 1366, 1280, 1024, 768, 480, 320];

  await page.goto('https://github.com/explore');

  for(let i=0; i < viewports.length; i++) {
    let vw = viewports[i];

    // The height doesn't matter since we are screenshotting the full page.
    await page.setViewport({
      width: vw,
      height: 1000
    });

    await page.screenshot({
      path: `screenshot-${vw}.png`,
      fullPage: true
    });
  }

  browser.close();
})();