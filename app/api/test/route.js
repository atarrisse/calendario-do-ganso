const puppeteer = require('puppeteer');

export async function POST(req) {
  const {url} = await req.json()

  console.log('debug', url);

  if(!url) return new Response('No url provided', {status: 400})
  
  const browser = await puppeteer.launch({
    defaultViewport: null,
    headless: "new"
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });


  const events = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".elcard"));

    console.log('debug', cards);
    if (!cards || cards.length === 0) {
      console.error("No cards found");
      return null;
    }

    return [...cards].map((card) => {
      return {
        title: card.querySelector(".title")?.innerHTML.trim(),
        content: card.querySelector(".content")?.innerHTML.trim(),
        datetime: card.querySelector(".datetime")?.innerHTML.trim(),
      };
    });
  });

  await browser.close();

  return new Response(events)
}