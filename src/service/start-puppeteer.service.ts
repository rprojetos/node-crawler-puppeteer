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
		const csvRows = payload.map((res: IFileGenerator) => {
			return `${res.link};${res.titulo};${res.data}`;
		});
		const csvContent = `Link;Titulo;Data\n${csvRows.join('\n')}`;
		try {
			let fileStatus = 'criado';
			if (fs.existsSync(`${path.resolve(pathTmp, fileName)}.csv`)) fileStatus = 'atualizado';
			fs.writeFileSync(`${path.resolve(pathTmp, fileName)}.csv`, csvContent);
			return console.log(
				`Arquivo ${fileName}.csv ${fileStatus} com sucesso no diretório ${path.resolve(pathTmp)}`
				);
		} catch (error) {
			console.log(error);
		}
	}

}

export const startPuppeteeerSevice = new StartPuppeteeerSevice();
