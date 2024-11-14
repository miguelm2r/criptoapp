import { z } from "zod";
import {
  CurrencySchema,
  CryptoCurrencyResponseSchema,
  PairSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";

// Inferimos el type con zod
export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
