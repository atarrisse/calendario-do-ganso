const puppeteer = require("puppeteer");

const formatResponse = require("../../utils/formatResponse");

export async function POST(req) {
  const { url } = await req.json();
  console.log("debug", url);

  if (!url) throw new Error("No url provided", { status: 400 });

  try {
    const browser = await puppeteer.launch({
      defaultViewport: null,
      headless: "new"
    });

    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    const events = await page.evaluate(() => {
      const eventCards = Array.from(document.querySelectorAll(".elcard"));

      if (!eventCards || eventCards.length === 0) {
        console.error("No cards found");
        return null;
      }
      const _events = eventCards.map((event) => {
        return {
          title: event.querySelector(".title")?.innerHTML.trim(),
          content: event.querySelector(".content")?.innerHTML.trim(),
          datetime: event.querySelector(".datetime")?.innerHTML.trim(),
        };
      });
      return _events;
    });
    
    await browser.close();
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (e) {
    return new Response(e, { status: 500 });
  }
}
