import { profileData } from "@/data/profile";

export default function Skills() {
  const { skills } = profileData;

  return (
    <section className="skills-section" aria-label="Areas of Expertise">
      {skills.map((skill) => (
        <div key={skill.number} className="skills-column">
          <p className="skills-number">{skill.number}</p>
          <h2 className="skills-title">{skill.title}</h2>
          <div className="gold-divider-skills" aria-hidden="true" />
          <p className="skills-description">{skill.description}</p>
          <div className="skills-tags">
            {skill.tags.map((tag) => (
              <span key={tag} className="skills-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
