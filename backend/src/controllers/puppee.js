import puppeteer from "puppeteer";
import fs from "fs/promises";

export async function listWebScraping(req, res) {
  let titles;
  try {
    (async () => {
      const browser = await puppeteer.launch();
      //{headless:false} añadiendolo se abre el navegador y veo lo que pasa
      const page = await browser.newPage();

      await page.goto("https://los40.com/lista40/");

      await page.click("#didomi-notice-agree-button");

      await page.screenshot({ path: "principales.jpg", fullPage: true });

      titles = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll(
            "#portada main div.contenedor_principal.estirar div.contenido_principal.estirar div.columnas_principal_y_secundaria div  div.lista40.principal div div.data-video div.info_grupo p"
          )
        ).map((x) => x.textContent);
      });

      await browser.close();

      res.status(200).send({
        data: titles,
      });
    })();
  } catch (error) {
    console.log(error);
  }
}
