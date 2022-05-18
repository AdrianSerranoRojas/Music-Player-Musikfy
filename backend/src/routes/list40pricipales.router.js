import { Router } from "express";
import { get40List } from "../controllers/list40principales-controllers.js";
import {listWebScraping} from "../controllers/puppee.js"
// import "../controllers/runer"
import miaaa from "../controllers/runer.js"


const list40pricipalesRouter = Router();

list40pricipalesRouter.get("/40lists", listWebScraping);

export default list40pricipalesRouter

