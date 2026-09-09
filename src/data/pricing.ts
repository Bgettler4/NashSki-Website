type FuelInfo =
  | { type: "included" }
  | { type: "option"; convenienceFee?: number };

export interface PricingRow {
  duration: string;
  price: string;
  fuel: FuelInfo;
  mostPopular?: boolean;
}

export interface PricingCardData {
  dayRange: string;
  subtitle: string;
  tier: "standard" | "premium";
  rows: PricingRow[];
}

export const PRICING_CARDS: PricingCardData[] = [
  {
    dayRange: "Mon – Thu",
    subtitle: "Standard Jet Skis",
    tier: "standard",
    rows: [
      { duration: "1 Hour",  price: "$115",   fuel: { type: "included" } },
      { duration: "2 Hours", price: "$230",   fuel: { type: "included" }, mostPopular: true },
      { duration: "3 Hours", price: "$270",   fuel: { type: "option", convenienceFee: 60 } },
      { duration: "4 Hours", price: "$360",   fuel: { type: "option", convenienceFee: 80 } },
      { duration: "6 Hours", price: "$550",   fuel: { type: "option" } },
      { duration: "8 Hours", price: "$650",   fuel: { type: "option" } },
    ],
  },
  {
    dayRange: "Mon – Wed",
    subtitle: "Premium Jet Skis",
    tier: "premium",
    rows: [
      { duration: "1 Hour",  price: "$145",   fuel: { type: "included" } },
      { duration: "2 Hours", price: "$285",   fuel: { type: "included" }, mostPopular: true },
      { duration: "3 Hours", price: "$315",   fuel: { type: "option", convenienceFee: 75 } },
      { duration: "4 Hours", price: "$420",   fuel: { type: "option", convenienceFee: 100 } },
      { duration: "6 Hours", price: "$630",   fuel: { type: "option" } },
      { duration: "8 Hours", price: "$840",   fuel: { type: "option" } },
    ],
  },
  {
    dayRange: "Fri – Sun",
    subtitle: "Standard Jet Skis",
    tier: "standard",
    rows: [
      { duration: "1 Hour",  price: "$125",   fuel: { type: "included" } },
      { duration: "2 Hours", price: "$250",   fuel: { type: "included" }, mostPopular: true },
      { duration: "3 Hours", price: "$300",   fuel: { type: "option", convenienceFee: 60 } },
      { duration: "4 Hours", price: "$400",   fuel: { type: "option", convenienceFee: 80 } },
      { duration: "6 Hours", price: "$550",   fuel: { type: "option" } },
      { duration: "8 Hours", price: "$650",   fuel: { type: "option" } },
    ],
  },
  {
    dayRange: "Thu – Sun",
    subtitle: "Premium Jet Skis",
    tier: "premium",
    rows: [
      { duration: "1 Hour",  price: "$160",   fuel: { type: "included" } },
      { duration: "2 Hours", price: "$320",   fuel: { type: "included" }, mostPopular: true },
      { duration: "3 Hours", price: "$375",   fuel: { type: "option", convenienceFee: 75 } },
      { duration: "4 Hours", price: "$500",   fuel: { type: "option", convenienceFee: 100 } },
      { duration: "6 Hours", price: "$750",   fuel: { type: "option" } },
      { duration: "8 Hours", price: "$1,000", fuel: { type: "option" } },
    ],
  },
];
