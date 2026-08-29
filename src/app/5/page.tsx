import type { Metadata } from "next";
import { MinimalSite } from "@/components/minimal/minimal-site";
import "../minimal.css";
import "../type-base.css";
import "./onest.css";

export const metadata: Metadata = {
  title: "Samarth Nagar — Type /5 · Onest (baseline)",
  description:
    "Typography variant: Onest — the current landing font — with the shared hierarchy refinements. Landing (/) unchanged.",
  robots: { index: false, follow: false },
};

/* Onest loads in the root layout (--font-geist-sans) — no extra font here.
   /5 is the baseline: same face as /, same hierarchy as /1–/4. */
export default function PageFive() {
  return (
    <div className="minimal minimal-type type-5">
      <MinimalSite />
    </div>
  );
}
