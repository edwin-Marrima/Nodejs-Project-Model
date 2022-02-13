import HttpException from '@/utils/exceptions/httpException.exception';
import ErrorType from '@/utils/interfaces/errorType.interface';

class NotFoundException extends HttpException{
    constructor(status:number,message:string){
        super(status,message);
    }
        getError():ErrorType{
                return {
                    message:this.message
                }   
        }
 
}

export default NotFoundException;