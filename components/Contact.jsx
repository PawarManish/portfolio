import { profileData } from "@/data/profile";

export default function Contact() {
  const { contact } = profileData;

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-left-col">
        <p className="footer-eyebrow">{contact.eyebrow}</p>
        <h2 className="footer-title">{contact.title}</h2>
        <a
          href={contact.emailHref}
          className="footer-email-link"
        >
          {contact.email}
        </a>
      </div>

      <div className="footer-right-col">
        <div className="footer-links-grid">
          {contact.links.map((link, idx) => (
            <div key={idx} className="footer-link-item">
              <p className="meta-label">{link.label}</p>
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-value"
                >
                  {link.value}
                </a>
              ) : (
                <p className="meta-value">{link.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span className="footer-copyright">{contact.copyright}</span>
        <span className="footer-tagline">{contact.tagline}</span>
      </div>
    </footer>
  );
}
