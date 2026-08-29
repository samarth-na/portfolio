import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { MinimalSite } from "@/components/minimal/minimal-site";
import "../minimal.css";
import "../type-base.css";
import "./archivo.css";

/* Archivo — Swiss grotesque with a wide wdth axis (62.5–125%).
   Display set condensed, body at normal width. */
const archivo = Archivo({
  variable: "--font-v",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Samarth Nagar — Type /4 · Archivo",
  description:
    "Typography variant: Archivo with condensed display via the width axis. Landing (/) unchanged.",
  robots: { index: false, follow: false },
};

export default function PageFour() {
  return (
    <div className={`minimal minimal-type type-4 ${archivo.variable}`}>
      <MinimalSite />
    </div>
  );
}
