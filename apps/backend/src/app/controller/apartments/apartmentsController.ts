import {NextFunction, Request, Response} from 'express';
import { services } from '../../service/services';

export const controllerGetAllApartments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    
    const allApartments = await services.serviceAllApartments();
    res.json(allApartments);
    next();
  }
  catch(e){
    res.json({"status": 500}) && next(e)
  }
}