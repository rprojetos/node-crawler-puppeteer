import { CrowlerCorinthiansController } from "controller/crawler-corinthians.controller";
import { CrawlerPalmeirasController } from "controller/crawler-palmeiras.contoller";

class Init {
    constructor() {
        this._init();
    }

    private _init() {
        new CrawlerPalmeirasController().init();
        // new CrowlerCorinthiansController().init();
        console.log('Inicializado com sucesso');
    }
}

new Init();