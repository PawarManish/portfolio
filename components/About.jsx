import { profileData } from "@/data/profile";

export default function About() {
  const { about } = profileData;

  return (
    <section className="about-section" aria-label="About the Developer">
      <div className="about-content-col">
        <p className="about-eyebrow">{about.eyebrow}</p>
        <h2 className="about-title">
          {about.titleLine1}
          <br />
          {about.titleLine2}
        </h2>
        <div className="gold-divider-about" aria-hidden="true" />
        <div className="about-text-grid">
          <p className="about-paragraph">{about.paragraph1}</p>
          <p className="about-paragraph">{about.paragraph2}</p>
        </div>
      </div>

      <div className="about-image-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={about.image.src}
          alt={about.image.alt}
          className="about-image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
