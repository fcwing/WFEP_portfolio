"use client";

import { useEffect, useState } from "react";

const sections = [
  { href: "#home", label: "Home", labelZh: "首頁" },
  { href: "#education", label: "Education", labelZh: "學歷" },
  { href: "#work", label: "Work", labelZh: "工作" },
  { href: "#internships", label: "Internships", labelZh: "實習" },
  { href: "#skills", label: "Skills", labelZh: "技能" },
  { href: "#awards", label: "Awards", labelZh: "獎項" },
  { href: "#projects", label: "Projects", labelZh: "專案" },
  { href: "#contact", label: "Contact", labelZh: "聯絡" },
];

export default function SectionNav() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = sections.map((s) => s.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="section-nav" aria-label="Section navigation">
      <ul className="section-nav__list">
        {sections.map((item, index) => (
          <li key={item.href} className="section-nav__item">
            {index > 0 && (
              <span className="section-nav__divider" aria-hidden="true" />
            )}
            <a
              href={item.href}
              className={`section-nav__link ${active === item.href ? "section-nav__link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
            >
              <span className="section-nav__label">{item.label}</span>
              <span className="section-nav__label-zh">{item.labelZh}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
