"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/content";
import { downloadMockCv } from "@/lib/downloadCv";
import SectionNav from "./SectionNav";

const navLinks = [
  { href: "#home", label: "Home", labelZh: "首頁" },
  { href: "#experience", label: "Experience", labelZh: "經歷" },
  { href: "#awards", label: "Awards", labelZh: "獎項" },
  { href: "#projects", label: "Projects", labelZh: "專案" },
  { href: "#contact", label: "Contact", labelZh: "聯絡" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      {/* <div className="navbar">
        <nav className="navbar__inner" aria-label="Main navigation">
          <a
            href="#home"
            className="navbar__brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            aria-label="Daisy Fong — Home"
          >
            <span className="navbar__brand-mark">DF</span>
          </a>

          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__toggle"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <i
                className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}
                aria-hidden="true"
              />
            </button>

            <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
              {navLinks.map((link, index) => (
                <li key={link.href} className="navbar__links-item">
                  {index > 0 && (
                    <span className="navbar__divider" aria-hidden="true" />
                  )}
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    <span className="navbar__link-en">{link.label}</span>
                    <span className="navbar__link-zh">{link.labelZh}</span>
                  </a>
                </li>
              ))}
              <li className="navbar__cv">
                <button
                  type="button"
                  className="btn btn--nav"
                  onClick={() => downloadMockCv(site.cvFileName)}
                >
                  <i className="fa-solid fa-download" aria-hidden="true" />
                  CV
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}

      <SectionNav />
    </header>
  );
}
