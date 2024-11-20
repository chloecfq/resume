const puppeteer = require("puppeteer");
const Jsondata = require("../public/resume/data.json");

const createPdf = async (file, path, isOnePage) => {
    const url = `http://localhost:3000/${path}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        // if (path.length > 0) {
        // page.setViewport({
        //     width: 1280,
        //     height: 920
        // })
        // } else {
        // page.setViewport({
        //         width: 1440,
        //         height: 920
        //     })
        // }
        await page.goto(url, { waitUntil: "networkidle0" });
    } catch (e) {
        if (e.toString().includes("ERR_CONNECTION_REFUSED")) {
            console.log("Please run `npm run serve` before generating a screen shot");
            process.exit(1);
        }
    }

    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.offsetHeight,
        };
    });
    console.log(dimensions);

   if (isOnePage) {
    await page.pdf({
        path: `pdfs/${file.replace(/\//, "-")}.pdf`,
        printBackground: true,
        ...dimensions
        // pageRanges: "1"
    });
   } else {
    await page.pdf({
        path: `pdfs/${file.replace(/\//, "-")}.pdf`,
        printBackground: true,
        margin: {
            top: 16,
            bottom: 20,
            left: 24,
            right: 24
        },
        format: 'a4',
        displayHeaderFooter: true,
        footerTemplate: `
          <div style="color: lightgray; font-size: 10px; padding-bottom: 5px; text-align: center; width: 100% height: 20px">
          </div>
        `
        // pageRanges: "1"
    });
   }


    await browser.close();
};

createPdf(Jsondata.name + '-' + Jsondata.career, '', false);
// createPdf(Jsondata.name + '-' + Jsondata.career, 'templete/vbase');