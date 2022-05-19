import { Router } from "express";
import {listWebScraping} from "../controllers/list40principales-controllers.js"



const list40pricipalesRouter = Router();

list40pricipalesRouter.get("/40lists", listWebScraping);

export default list40pricipalesRouter

