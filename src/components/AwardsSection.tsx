import { awards } from "@/data/content";
import SectionHead from "./SectionHead";

export default function AwardsSection() {
  return (
    <section id="awards" className="section awards-section">
      <div className="section-inner">
        <SectionHead
          eyebrow="Recognition"
          title="Awards & Certificates"
          lead="Competitions, certifications, and leadership honours."
        />

        <div className="awards-grid reveal">
          {awards.map((award, index) => (
            <article
              key={award.id}
              className={`award-card ${index === 0 ? "award-card--featured" : ""}`}
            >
              <p className="award-card__year">{award.year}</p>
              <h3 className="award-card__title">{award.title}</h3>
              <p className="award-card__org">{award.organizer}</p>
              {award.details && award.details.length > 0 && (
                <ul className="award-card__details">
                  {award.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
