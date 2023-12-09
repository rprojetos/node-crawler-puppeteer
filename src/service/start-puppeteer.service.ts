import fs from 'node:fs';
import path from 'node:path';
import { IFileGenerator } from 'interface/file-generator.interface';
import { resolve } from 'path';
import puppeteer, { Page } from 'puppeteer';

class StartPuppeteeerSevice {
  constructor() { }

  public start(url: string): Promise<Page> {
    return new Promise(async (resolve, reject) => {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      const allPages = await browser.pages();
      allPages[0].close();

      await page.goto(url);

      if (!page) return reject('Configuração não correspondida!');

      return resolve(page);
    });
  }

  public fileGenerator(payload: Array<IFileGenerator>, fileName: string) {
    const pathTmp = 'tmp';
    if (!fs.existsSync(path.resolve(pathTmp))) {
      console.log(`Criando o diretório ${path.resolve(pathTmp)}`);
      fs.mkdirSync(path.resolve(pathTmp));
    }
    console.log(`O diretório ${path.resolve(pathTmp)} já existe`);
  }

}

export const startPuppeteeerSevice = new StartPuppeteeerSevice();
