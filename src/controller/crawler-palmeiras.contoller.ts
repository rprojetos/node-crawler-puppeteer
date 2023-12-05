import { link } from "fs";
import { startPuppeteeerSevice } from "service/start-puppeteer.service";

export class CrawlerPalmeirasController {
    constructor() {}

    public async init() {
        try{
            const page = await startPuppeteeerSevice.start(
            'http://www.palmeiras.com.br/central-de-media/noticias/'
            );
            
            // classe pai (.central-de-midia-container)  
            // classe dos itens filhos (.items-central)
            const selector = '.central-de-midia-container .items-central';
            // o seletor será retornado no formato de um array
            // aguarda a página carregar os seletores
            await page.waitForSelector(selector);
            // nodes é um array onde é carregado ...
            // ... cada nózinho(classe dos itens filhos)
            // $ pega somente um seletor (base do jquery)
            // $$ trabalha com array de seletores (base do jquery)
            const nodes = await page.$$(selector);
            // iterando sob o array de objetos nodes
            for(const node of nodes){
                // Link, Titulo, Data
                // pegando o link do elemento node
                // usando o puppeteer a partir da const page, que é o objeto
                // carregado de nossa página chamamos a função evaluate
                // onde passamos um callback function e o nó no caso o node
                // que é um item iterável do nosso array nodes.
                // await page.evaluate(()->{}, node);
                // como parâmetro de entrada para a callback function é passado 
                // o elemento que queremos tratar el: Element
                // a patir no node(nó) el(Element) receberá o elemento presento
                // nesse nó. 
                const link = await page.evaluate((el: Element) => {
                    // retornamos então esse elemento el
                    // el sendo um elemento aplicamos um querySelector
                    // para pegarmos o elemento que queremos, no caso 
                    // o elemento html tag <a> e pegamos o valor do atributo
                    // href desse elemento.
                    // assim é retornado o link/valor presente nesse node/nó.
                    return el.querySelector('a')?.getAttribute('href');
                }, node);

                const titulo = await page.evaluate((el: Element) => {
                    // no elemento node seleciona uma tag 'a' que possui um div com 
                    // a classe .items-central-txt que possui dentro dela uma 
                    // tag h4 com o valor de text do titulo
                    // após chegar no elemento h4 o texto/valor é extraido com textContent 
                    return el.querySelector('a .items-central-txt h4')?.textContent; 
                }, node);

                const data = await page.evaluate((el: Element) => {
                    return el.querySelector('.items-central-date')?.textContent;
                }, node);

                console.log(
                    {
                        link,
                        titulo,
                        data,
                    }
                );
            }
            // finalizando a página.
            await page.close();
        }catch(error){
            console.log(error);
        }
    }
}