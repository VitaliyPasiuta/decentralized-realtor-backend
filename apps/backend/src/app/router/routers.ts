import { Router } from "express";
import { apartmentsRouter } from "./apartments/apartmentsRouter";

const routers = Router();

routers.use('/apartments', apartmentsRouter);

export default routers;