import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { site } from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <AwardsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <p className="site-footer__brand">Daisy Fong</p>
            <p className="site-footer__copy">© 2025 Daisy Fong. All rights reserved.</p>
          </div>
          <div className="footer-socials" aria-label="Social links">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email">
              <i className="fa-solid fa-envelope" aria-hidden="true" />
            </a>
            <a href="#home" aria-label="Back to top" className="footer-socials__top">
              <i className="fa-solid fa-arrow-up" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
