import {
  education,
  workExperience,
  internships,
  skills,
} from "@/data/content";
import SectionHead from "./SectionHead";
import TimelineBlock from "./TimelineBlock";

export default function AboutSection() {
  return (
    <section id="experience" className="section about-section">
      <span className="section-watermark" aria-hidden="true">
        Experience
      </span>
      <div className="section-inner">
        <SectionHead
          eyebrow="Curriculum"
          title="Education & Experience"
          lead="A journey across marketing, operations, finance, and leadership."
        />

        <div id="education" className="about-block reveal scroll-anchor">
          <h3 className="subsection-title">
            <span className="subsection-title__index">01</span>
            Education
          </h3>
          <TimelineBlock items={education} ariaLabel="Education timeline" />
        </div>

        <div id="work" className="about-block reveal scroll-anchor">
          <h3 className="subsection-title">
            <span className="subsection-title__index">02</span>
            Work Experience
          </h3>
          <TimelineBlock
            items={workExperience}
            ariaLabel="Work experience timeline"
          />
        </div>

        <div id="internships" className="about-block reveal scroll-anchor">
          <h3 className="subsection-title">
            <span className="subsection-title__index">03</span>
            Internships
          </h3>
          <TimelineBlock items={internships} ariaLabel="Internships timeline" />
        </div>

        <div id="skills" className="about-block skills-block reveal scroll-anchor">
          <h3 className="subsection-title">
            <span className="subsection-title__index">04</span>
            Skills & Languages
          </h3>
          <div className="skills-grid">
            <div className="skills-card">
              <div className="skills-card__icon" aria-hidden="true">
                <i className="fa-solid fa-wand-magic-sparkles" />
              </div>
              <h4 className="skills-card__label">Software</h4>
              <ul className="skills-card__list">
                {skills.software.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="skills-card">
              <div className="skills-card__icon" aria-hidden="true">
                <i className="fa-solid fa-language" />
              </div>
              <h4 className="skills-card__label">Languages</h4>
              <ul className="skills-card__chips">
                {skills.languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
