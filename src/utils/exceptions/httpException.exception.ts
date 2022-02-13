import ErrorType from '@/utils/interfaces/errorType.interface';

abstract class HttpException {
    protected status:number;
    protected message:string;
    
    constructor(status:number, message:string){
        this.message = message;
        this.status = status;
    }
    getStatus():number{
        return this.status
    }
    
   abstract getError():ErrorType;
}

export default HttpException;