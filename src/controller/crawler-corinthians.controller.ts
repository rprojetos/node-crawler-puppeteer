import { startPuppeteeerSevice } from 'service/start-puppeteer.service';
import { IFileGenerator } from 'interface/file-generator.interface';

export class CrowlerCorinthiansController {
  constructor() {}

  public async init() {
    try {
      const page = await startPuppeteeerSevice.start(
        'https://www.corinthians.com.br/noticias',
      );

      const selector = '.ct-news-list .ct-news-list-item';
      await page.waitForSelector(selector);

      const nodes = await page.$$(selector);

      const payload: Array<IFileGenerator> = [];

      for (const node of nodes) {
        const link = await page.evaluate((el: Element) => {
          const nodeLink = el
            .querySelector('.ct-news-list-item-content a')
            ?.getAttribute('href');
          return nodeLink ? nodeLink : 'Erro: Parâmetro <link> não encontrado';
        }, node);

        const titulo = await page.evaluate((el: Element) => {
          const nodeTitulo = el
            .querySelector('.ct-news-list-item-content a h4')
            ?.innerHTML.replace(/\n/g, '')
            .replace(/<p>.*?<\/p>/, '')
            .trim();
          return nodeTitulo
            ? nodeTitulo
            : 'Erro: Parâmetro <título> não encontrado';
        }, node);

        const data = await page.evaluate((el: Element) => {
          const nodeData = el
            .querySelector('.ct-news-list-item-content a h4 p')
            ?.innerHTML.match(/\b\d{2}\.\d{2}\.\d{4}\s\d{2}:\d{2}\b/g);
          return nodeData
            ? nodeData[0]
            : 'Erro: Parâmetro <data> não encontrado';
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
