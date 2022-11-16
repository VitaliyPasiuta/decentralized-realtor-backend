import { Router } from "express";
import { controllers } from "../../controller/controllers";
import * as multer from 'multer'
const upload = multer({ dest: 'uploads/' })

export const apartmentsRouter = Router();

apartmentsRouter.get('/all', controllers.controllerGetAllApartments);
apartmentsRouter.get('/img', controllers.controllerGetPost);
apartmentsRouter.post('/add', upload.single('avatar'), controllers.controllerAddPost);
apartmentsRouter.delete('/delete/:id');