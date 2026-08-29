import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { MinimalSite } from "@/components/minimal/minimal-site";
import "../minimal.css";
import "../type-base.css";
import "./schibsted.css";

/* Schibsted Grotesk — punchy editorial grotesque, variable 400–900. */
const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-v",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Samarth Nagar — Type /3 · Schibsted Grotesk",
  description:
    "Typography variant: Schibsted Grotesk with heavier display weight. Landing (/) unchanged.",
  robots: { index: false, follow: false },
};

export default function PageThree() {
  return (
    <div className={`minimal minimal-type type-3 ${schibstedGrotesk.variable}`}>
      <MinimalSite />
    </div>
  );
}
