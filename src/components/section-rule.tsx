/* SectionRule — printed measure mark above each section.

   A 1px hairline with a mono index floating above its left edge. The
   line fills with the accent color as the section scrolls through the
   trigger line; SectionRules sets `--rule-fill` per rule. Without
   JavaScript the fill stays at 0% and only the hairline + index render. */
export function SectionRule({ index }: { index: string }) {
  return (
    <div className="m-rule" data-rule aria-hidden="true">
      <span className="m-rule-index">{index}</span>
      <span className="m-rule-line" />
      <span className="m-rule-fill" />
    </div>
  );
}
