import { profileData } from "@/data/profile";

export default function Hero() {
  const { hero } = profileData;

  return (
    <section className="hero-section" aria-label="Introduction">
      <div className="hero-image-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="hero-image"
          loading="eager"
        />
        <div className="hero-accent-strip" aria-hidden="true" />
      </div>

      <div className="hero-content-col">
        <div>
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </h1>
          <div className="gold-divider-hero" aria-hidden="true" />
          <p className="hero-paragraph-lead drop-cap">{hero.bioParagraph1}</p>
          <p className="hero-paragraph-secondary">{hero.bioParagraph2}</p>
        </div>

        <div className="hero-meta-grid">
          {hero.details.map((item, idx) => (
            <div key={idx}>
              <p className="meta-label">{item.label}</p>
              <p className="meta-value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
