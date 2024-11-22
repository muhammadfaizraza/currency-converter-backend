import { Router } from "express";
import { convertCurrencies, getCurrencies } from "../Controller/currencyController";
const router = Router();



router.get("/getCurrency",getCurrencies)
router.get("/convert",convertCurrencies)


export default router;  