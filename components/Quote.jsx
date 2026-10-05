import { profileData } from "@/data/profile";

export default function Quote() {
  const { quote } = profileData;

  return (
    <section className="quote-section" aria-label="Statement on the Work">
      <div className="quote-image-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={quote.image.src}
          alt={quote.image.alt}
          className="quote-image"
          loading="lazy"
        />
      </div>

      <div className="quote-content-col">
        <p className="quote-eyebrow">{quote.eyebrow}</p>
        <blockquote className="quote-blockquote">{quote.text}</blockquote>
        <div className="gold-divider-quote" aria-hidden="true" />
      </div>
    </section>
  );
}
