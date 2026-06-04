"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);

  const onChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const required = [
      form.firstName.trim(),
      form.lastName.trim(),
      form.email.trim(),
      form.message.trim(),
    ];

    if (required.some((item) => !item)) {
      alert("Please fill in First Name, Last Name, Email and Message.");
      return;
    }

    alert("Message sent successfully! (frontend demo)");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <SectionHead
          eyebrow="Let's connect"
          title="Contact Me"
          lead="Open to collaborations, internships, and meaningful opportunities."
          align="center"
        />

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="contact-grid">
            <label className="field">
              <span>First Name</span>
              <input value={form.firstName} onChange={onChange("firstName")} />
            </label>
            <label className="field">
              <span>Last Name</span>
              <input value={form.lastName} onChange={onChange("lastName")} />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" value={form.email} onChange={onChange("email")} />
            </label>
            <label className="field">
              <span>Phone Number</span>
              <input value={form.phone} onChange={onChange("phone")} />
            </label>
          </div>
          <label className="field">
            <span>Message</span>
            <textarea rows={6} value={form.message} onChange={onChange("message")} />
          </label>
          <div className="contact-actions">
            <button type="button" className="btn btn--ghost" onClick={scrollToProjects}>
              View my projects
            </button>
            <button type="submit" className="btn btn--primary">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
