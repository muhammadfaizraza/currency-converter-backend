import { Request, Response } from "express";

import TrackError from "../MiddleWare/TrackError";
import { convertCurrency, getAllCurrencies } from "../Service/currencyService";

export const getCurrencies = TrackError(async (req: Request, res: Response) => {
  try {
    const currencies = await getAllCurrencies();
    res.json(currencies);
  } catch (err) {
    throw err;
  }
});

export const convertCurrencies = TrackError(
  async (req: Request, res: Response) => {
    const { baseCurrency, targetCurrency, amount } = req.query;

    if (!baseCurrency || !targetCurrency || !amount) {
      return res
        .status(400)
        .json({ error: "Missing required query parameters" });
    }

    try {
      const convertedAmount = await convertCurrency(
        baseCurrency as string,
        targetCurrency as string,
        parseFloat(amount as string)
      );
      res.json({ convertedAmount });
    } catch (error) {
      res.status(500).json({ error: "Failed to convert currency" });
    }
  }
);
