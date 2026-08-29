import type { Metadata } from "next";
import { MinimalSite } from "@/components/minimal/minimal-site";
import "../minimal.css";
import "../type-base.css";
import "./system.css";

export const metadata: Metadata = {
  title: "Samarth Nagar — Type /1 · System UI stack",
  description:
    "Typography variant: plain system-UI stack — SF on macOS/iOS, Segoe UI on Windows, Roboto on Android. Landing (/) unchanged.",
  robots: { index: false, follow: false },
};

export default function PageOne() {
  return (
    <div className="minimal minimal-type type-1">
      <MinimalSite />
    </div>
  );
}
