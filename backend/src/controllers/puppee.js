import puppeteer from "puppeteer";
import fs from "fs/promises";

export async function listWebScraping(req, res) {
  try {
    (async () => {
      const browser = await puppeteer.launch({ headless: false });
      //{headless:false} añadiendolo se abre el navegador y veo lo que pasa
      const page = await browser.newPage();

      await page.goto("https://los40.com/lista40/");

      await page.click("#didomi-notice-agree-button");
      // await page.keyboard.press('Enter',{delay:2000})
      // await page.type('#sp-cc-accept')
      // await page.type("#twotabsearchtextbox", "libros de guerra");
      // await page.waitForSelector('#sp-cc-accept')
      //await page.waitForTimeout(3000);

      // await page.keyboard.press("Enter", { delay: 2000 });
      await page.screenshot({ path: "principales.jpg", fullPage: true });

      // const alltitles =  await page.evaluate(()=>{
      //   const elements = document.querySelectorAll(".data-video .info_grupo p")

      const titles = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll(
            "#portada main div.contenedor_principal.estirar div.contenido_principal.estirar div.columnas_principal_y_secundaria div  div.lista40.principal div div.data-video div.info_grupo p"
          )
        ).map((x) => x.textContent);
      });
      await fs.writeFile("titles.txt", titles.join("\r\n"));

      //   for (let element of elements){
      //     titles.push(element)
      //   }
      //   return titles;
      // });

      // console.log(alltitles);
      await browser.close();
    })();
    // });
    // res.status(200);
  } catch (error) {
    console.log(error);
  }
}

// listWebScraping()