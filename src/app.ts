import express,{Application} from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import errorHandler from '@/middleware/errorHandler.middleware';

class App{
    private express:Application;
    private port:number;

    constructor(port:number,controllers:Controller[]){
        this.express = express();
        this.port = port;

         this.initializeMiddleware()
        this.initializeRoutes(controllers);
      this.initializeErrorHandler();
    }

    private initializeMiddleware(){
        this.express.use(express.json());
    }
    private initializeRoutes(controllers:Controller[]){
        controllers.forEach((controller:Controller)=>{
            this.express.use('/api/v1',controller.router)
        })
    }
    private initializeErrorHandler(){
        this.express.use(errorHandler);
    }
}
