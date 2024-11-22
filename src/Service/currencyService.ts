import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: './src/Config/secrets.env' }); 
const API_URL = process.env.API_URL;
if (!API_URL) {
  throw new Error("API_URL is not defined in the environment variables.");
}
const API_KEY = process.env.API_KEY;


interface CurrencyResponse {
    data: { [key: string]: number };
    meta: { code: number; timestamp: string };
    params: { base: string };
  }

  export const getAllCurrencies = async () => {
    try {
      const response = await axios.get<CurrencyResponse>(API_URL, {
        params: {
          apikey: API_KEY,
          base_currency: "USD",
  
      },
      });
      const currencies = Object.keys(response.data.data); 
      return currencies;
    } catch (error) {
      console.error("Error fetching currencies:", error);
      throw error;
    }
  };
  export const convertCurrency = async (baseCurrency: string, targetCurrency: string, amount: number) => {
    try {
      const response = await axios.get<CurrencyResponse>(API_URL, {
        params: {
          apikey: API_KEY,
          base_currency: baseCurrency,
        },
      });
  
      const rate = response.data.data[targetCurrency]; 
       const convertedAmount = amount * rate; 
      return convertedAmount;
    } catch (error) {
      console.error("Error converting currency:", error);
      throw error;
    }
  };