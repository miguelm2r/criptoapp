import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";
import { Pair } from "../types";

// Sirve para llamar a la API
export async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(url);
  // Validamos si la respuesta es del type
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  //console.log(result);
  if (result.success) {
    return result.data;
  }
}

// Sirve para llamar a la API
export async function fetchCurrentCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);
  //console.log(DISPLAY[pair.cryptocurrency][pair.currency]);
  const result = CryptoPriceSchema.safeParse(
    DISPLAY[pair.cryptocurrency][pair.currency]
  );
  if (result.success) {
    //console.log(result.data);
    return result.data;
  }
}
