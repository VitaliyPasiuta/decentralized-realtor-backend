import {NextFunction, Request, Response} from 'express';
import { services } from '../../service/services';
import {run, S3UploadFile, S3DownloadFile, downloadFile} from '../../../../../../libs/sample';
import * as fs from 'fs';

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

export const controllerAddPost = async (req: Request | any, res: Response, next: NextFunction): Promise<void> => {
  try{
    const file = req.file;
    console.log("file data: ", file);
    const fileStream = fs.createReadStream(file.path);
    const params: S3UploadFile = {
      Bucket: 'vpasiuta-test-bucket', // TODO: move to .env
      Key: file.filename,
      Body: fileStream,
    }
    run(params);
    const description = req.body.description;
    res.json('200');
    next();
  }
  catch(e){
    res.json({"status": 500}) && next(e)
  }
}

export const controllerGetPost = async (req: Request | any, res: Response, next: NextFunction): Promise<void> => {
  try{
    const config: S3DownloadFile = {
      Bucket: 'vpasiuta-test-bucket',
      Key: '97bea3d33f21fba2b84dc8f0df91bb3e',
    }
    const result = await downloadFile(config);
    console.log("Returned image: ", result);
    res.write(result.Body, 'binary');
    
  }
  catch(e){
    res.json({"status": 500}) && next(e)
  }
}