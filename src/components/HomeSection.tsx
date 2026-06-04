"use client";

import Image from "next/image";
import { site } from "@/data/content";
import { downloadMockCv } from "@/lib/downloadCv";

const highlights = [
  { value: "400+", label: "KOLs pitched" },
  { value: "300K", label: "Reach generated" },
  { value: "2×", label: "JA Company CEO" },
];

export default function HomeSection() {
  return (
    <section id="home" className="section home-section">
      <div className="hero-glow hero-glow--left" aria-hidden="true" />
      <div className="hero-glow hero-glow--right" aria-hidden="true" />

      <div className="section-inner hero reveal">
        <div className="hero__content">
          <p className="intro-greeting">
            <span className="intro-greeting__line" aria-hidden="true" />
            Portfolio · 2026
          </p>
          <h1 className="intro-name">{site.heroTitle}</h1>
          <p className="intro-major">{site.major}</p>
          <p className="intro-tagline">{site.tagline}</p>

          <ul className="hero-stats" aria-label="Career highlights">
            {highlights.map((item) => (
              <li key={item.label} className="hero-stats__item">
                <span className="hero-stats__value">{item.value}</span>
                <span className="hero-stats__label">{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => downloadMockCv(site.cvFileName)}
            >
              <i className="fa-solid fa-file-arrow-down" aria-hidden="true" />
              Download CV
            </button>
            <a href="#experience" className="btn btn--ghost">
              View experience
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <Image
              src="/daisy-avatar.png"
              alt="Daisy Fong avatar"
              width={520}
              height={680}
              className="hero__image hero__image--transparent"
              priority
            />
          </div>
          <p className="hero__caption">Marketing · Business · Leadership</p>
        </div>
      </div>
    </section>
  );
}
