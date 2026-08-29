import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { MinimalSite } from "@/components/minimal/minimal-site";
import "../minimal.css";
import "../type-base.css";
import "./instrument.css";

/* Instrument Sans — closest legal match to SF Compact: a compact grotesque
   with a real width axis (wdth 75–100), so display can be set condensed
   while body stays at normal width. */
const instrumentSans = Instrument_Sans({
  variable: "--font-v",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Samarth Nagar — Type /1 · Instrument Sans",
  description:
    "Typography variant: Instrument Sans, semi-condensed display. Landing (/) unchanged.",
  robots: { index: false, follow: false },
};

export default function PageOne() {
  return (
    <div className={`minimal minimal-type type-1 ${instrumentSans.variable}`}>
      <MinimalSite />
    </div>
  );
}
