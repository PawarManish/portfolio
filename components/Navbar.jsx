import { profileData } from "@/data/profile";

export default function Navbar() {
  const { header } = profileData;

  return (
    <header className="site-header" role="banner">
      <span>
        {header.portfolioLabel} &nbsp;|&nbsp; {header.edition}
      </span>
      <span>{header.byText}</span>
    </header>
  );
}
