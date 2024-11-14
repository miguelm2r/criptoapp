import { z } from "zod";

//Creamos el schema con zod que sera el type que vendra de la API

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

// Creamos con zod el esquema de type de la respuesta de la API
export const CryptoCurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

// Creamos con zod el esquema de type de la respuesta de la API cuando sea un array
export const CryptoCurrenciesResponseSchema = z.array(
  CryptoCurrencyResponseSchema
);

// Creamos un schema para el estado pair
export const PairSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string(),
});

// Creamos un schema para la respuesta de la API sobre la cotizacion
export const CryptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string(),
});
