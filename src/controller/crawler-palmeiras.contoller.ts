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
            // node seria cada nózinho(classe dos itens filhos) do array
            // $ pega somente um seletor (base do jquery)
            // $$ trabalha com array de seletores (base do jquery)
            const nodes = await page.$$(selector);
            
            console.log(nodes);
        }catch(error){
            console.log(error);
        }
    }
}