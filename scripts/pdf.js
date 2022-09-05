const puppeteer = require("puppeteer");
const Jsondata = require("../public/resume/data.json");

const createPdf = async (file, path) => {
    const url = `http://localhost:3000/${path}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        // if (path.length > 0) {
        page.setViewport({
            width: 1280,
            height: 920
        })
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


    await page.pdf({
        path: `pdfs/${file.replace(/\//, "-")}.pdf`,
        printBackground: true,
        ...dimensions
        // pageRanges: "1"
    });

    await browser.close();
};

createPdf(Jsondata.name + '-' + Jsondata.career, '');
// createPdf(Jsondata.name + '-' + Jsondata.career, 'templete/vbase');