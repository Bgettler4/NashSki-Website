import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp, Fuel, Sunset } from "lucide-react";
import { PRICING_CARDS } from "@/data/pricing";

const BOOK_NOW = "https://trytn.com/en/NashSkiLLC";

function PricingRows({ rows }: { rows: (typeof PRICING_CARDS)[0]["rows"] }) {
  return (
    <div className="divide-y divide-border">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`px-5 py-3 ${row.mostPopular ? "bg-[#3AB9F8]/5" : "bg-white"}`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-semibold text-[#0B192D] text-sm whitespace-nowrap">
                {row.duration}
              </span>
              {row.mostPopular && (
                <Badge className="bg-[#3AB9F8] text-[#0B192D] text-[10px] font-bold px-2 py-0 h-4 leading-4 whitespace-nowrap shrink-0">
                  Most Popular
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-lg font-bold text-[#0B192D]">
                {row.price}
              </span>
              {row.fuel.type === "included" ? (
                <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] font-semibold px-2 h-5 whitespace-nowrap">
                  Fuel Included
                </Badge>
              ) : (
                <Badge className="bg-amber-100 text-amber-700 border border-amber-200 text-[10px] font-semibold px-2 h-5 whitespace-nowrap">
                  Fuel Option Applies
                </Badge>
              )}
            </div>
          </div>
          {row.fuel.type === "option" && row.fuel.convenienceFee !== undefined && (
            <div className="mt-1.5 space-y-0.5 pl-0">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-[#0B192D]">
                  +${row.fuel.convenienceFee}
                </span>{" "}
                Fuel Convenience Option (we handle refueling)
              </p>
              <p className="text-[11px] text-muted-foreground">
                Or choose <span className="font-medium text-[#0B192D]">Self Refuel</span> — NashSki staff refuels upon return; customer pays for fuel used
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function StandardCard({ card }: { card: (typeof PRICING_CARDS)[0] }) {
  return (
    <div className="rounded-2xl border-2 border-border shadow-sm overflow-hidden">
      <div className="px-6 py-4 bg-[#0B192D] text-white flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3AB9F8] mb-0.5">
            {card.dayRange}
          </p>
          <h3 className="text-xl font-bold">{card.subtitle}</h3>
        </div>
      </div>
      <PricingRows rows={card.rows} />
    </div>
  );
}

function PremiumDropdown({ card }: { card: (typeof PRICING_CARDS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border-2 border-[#3AB9F8]/50 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full px-6 py-4 bg-[#0B192D] text-white flex items-center justify-between gap-4 group"
        aria-expanded={open}
      >
        <div className="text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3AB9F8] mb-0.5">
            {card.dayRange}
          </p>
          <h3 className="text-xl font-bold">{card.subtitle}</h3>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Badge className="bg-[#3AB9F8] text-[#0B192D] font-bold px-3 py-1 text-xs">
            Premium
          </Badge>
          <span className="ml-1 text-white/70 group-hover:text-white transition-colors">
            {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </span>
        </div>
      </button>

      {!open && (
        <div className="px-6 py-3 bg-white flex items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>Open to view full Premium pricing table</span>
          <ChevronDown className="w-4 h-4 text-[#3AB9F8] shrink-0" />
        </div>
      )}

      {open && <PricingRows rows={card.rows} />}
    </div>
  );
}

export function PricingSection() {
  const standardCards = PRICING_CARDS.filter((card) => card.tier === "standard");
  const premiumCards = PRICING_CARDS.filter((card) => card.tier === "premium");

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0B192D]">
            Rental Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Weekday and weekend rates for Standard and Premium jet skis. All rentals accommodate 1–2 riders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {standardCards.map((card, idx) => (
            <StandardCard key={idx} card={card} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {premiumCards.map((card, idx) => (
            <PremiumDropdown key={idx} card={card} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 border border-orange-300/40 rounded-2xl p-5 mb-6 flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <Sunset className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h4 className="font-bold text-[#0B192D] text-base mb-0.5">Sunset Cruise Rates</h4>
            <p className="text-sm text-muted-foreground">
              Special evening pricing available for <span className="font-semibold text-[#0B192D]">5:00 – 8:00 PM reservations</span>. Book online or call us to take advantage of sunset cruise rates.
            </p>
          </div>
        </div>

        <div className="bg-[#0B192D]/5 border border-[#0B192D]/15 rounded-2xl p-6 mb-8 flex gap-4 items-start">
          <div className="shrink-0 w-10 h-10 rounded-full bg-[#3AB9F8]/20 flex items-center justify-center mt-0.5">
            <Fuel className="w-5 h-5 text-[#0B192D]" />
          </div>
          <div>
            <h4 className="font-bold text-[#0B192D] mb-2 text-base">Fuel Information</h4>
            <ul className="text-sm text-muted-foreground space-y-1.5 list-none">
              <li>
                <span className="font-medium text-[#0B192D]">1-hour and 2-hour rentals:</span>{" "}
                Fuel is fully included — no fuel selection required.
              </li>
              <li>
                <span className="font-medium text-[#0B192D]">3-hour rentals and longer:</span>{" "}
                A fuel option applies. Choose the convenience option or self-refuel settlement.
              </li>
              <li>
                Customers selecting <span className="font-medium text-[#0B192D]">Self Refuel</span> do not physically fuel the jet ski. NashSki staff fuels every ski upon return — self-refuel customers simply pay for the fuel used.
              </li>
              <li className="text-[12px]">
                This helps reduce fuel dock congestion and keeps renters, boats, and our equipment safe.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-[#3AB9F8] text-[#0B192D] hover:bg-[#3AB9F8]/90 h-14 px-10 text-lg font-bold mb-3"
            data-testid="button-pricing-reserve"
          >
            <a href={BOOK_NOW} target="_blank" rel="noopener noreferrer">
              <span>Reserve Your Jet Ski Today</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            Taxes and booking fees are calculated at checkout where applicable.
          </p>
        </div>
      </div>
    </section>
  );
}
