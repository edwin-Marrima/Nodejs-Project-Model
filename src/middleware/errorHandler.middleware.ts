import { Request,Response,NextFunction } from "express";
import HttpException from '@/utils/exceptions/httpException.exception';


const errorHandler = (
    error:HttpException,
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    res.status(error.getStatus()).send(error.getError())
}

export default errorHandler;