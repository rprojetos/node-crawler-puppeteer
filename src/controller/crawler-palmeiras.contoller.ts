import { startPuppeteeerSevice } from "service/start-puppeteer.service";

export class CrawlerPalmeirasController {
    constructor() {}

    public async init() {
        try{
            // 'http://www.palmeiras.com.br/central-de-media/noticias/'
            const page = await startPuppeteeerSevice.start(
            'http://www.palmeiras.com.br/central-de-media/noticias/'
            );
        }catch(error){
            console.log(error);
        }
    }
}