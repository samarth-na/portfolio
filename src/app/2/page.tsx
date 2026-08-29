import type { Metadata } from "next";
import { MinimalSite } from "@/components/minimal/minimal-site";
import "../minimal.css";
import "../type-base.css";
import "./system.css";

export const metadata: Metadata = {
  title: "Samarth Nagar — Type /2 · System stack",
  description:
    "Typography variant: platform system fonts (SF Pro on Apple, Segoe UI on Windows, Roboto on Android). Landing (/) unchanged.",
  robots: { index: false, follow: false },
};

/* No webfont — the wrapper CSS swaps --font-geist-sans for the platform stack. */
export default function PageTwo() {
  return (
    <div className="minimal minimal-type type-2">
      <MinimalSite />
    </div>
  );
}
