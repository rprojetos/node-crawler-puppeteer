import { startPuppeteeerSevice } from 'service/start-puppeteer.service';
import { IFileGenerator } from 'interface/file-generator.interface';

export class CrawlerPalmeirasController {
  constructor() {}

  public async init() {
    try {
      const page = await startPuppeteeerSevice.start(
        'http://www.palmeiras.com.br/central-de-media/noticias/',
      );

      const selector = '.central-de-midia-container .items-central';
      await page.waitForSelector(selector);

      const nodes = await page.$$(selector);

      const payload: Array<IFileGenerator> = [];

      for (const node of nodes) {
        const link = await page.evaluate((el: Element) => {
          const nodeLink = el.querySelector('a')?.getAttribute('href');
          return nodeLink ? nodeLink : 'Erro: Parâmetro <link> não encontrado';
        }, node);

        const titulo = await page.evaluate((el: Element) => {
          const nodeTitulo = el.querySelector(
            'a .items-central-txt h4',
          )?.textContent;
          return nodeTitulo
            ? nodeTitulo
            : 'Erro: Parâmetro <titulo> não encontrado';
        }, node);

        const data = await page.evaluate((el: Element) => {
          const nodeData = el.querySelector(
            'a .items-central-date',
          )?.textContent;
          return nodeData ? nodeData : 'Erro: Parâmetro <data> não encontrado';
        }, node);

        payload.push({ link, titulo, data });
      }
      await page.close();
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  }
}
