import HttpException from '@/utils/exceptions/httpException.exception';
import ErrorType from '@/utils/interfaces/errorType.interface';

class ValidationException extends HttpException{
    private validationErrors:object[]
    constructor(status:number,message:string,validationErrors:object[]){
        super(status,message);
        this.validationErrors = validationErrors
    }
        getError():ErrorType{
                return {
                    message:this.message,
                    validationErrors:this.validationErrors
                }   
        }
 
}

export default ValidationException;