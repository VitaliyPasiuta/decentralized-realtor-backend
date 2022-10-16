import { Router } from "express";
import { controllers } from "../../controller/controllers";

export const apartmentsRouter = Router();

apartmentsRouter.get('/all', controllers.controllerGetAllApartments);
apartmentsRouter.get('/:id');
apartmentsRouter.post('/add/:id');
apartmentsRouter.delete('/delete/:id');