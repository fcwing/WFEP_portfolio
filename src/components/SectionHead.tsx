type SectionHeadProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export default function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionHeadProps) {
  return (
    <header className={`section-head section-head--${align}`}>
      <p className="section-head__eyebrow">{eyebrow}</p>
      <h2 className="section-head__title">{title}</h2>
      {lead && <p className="section-head__lead">{lead}</p>}
    </header>
  );
}
