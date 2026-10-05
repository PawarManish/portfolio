import "./globals.css";

export const metadata = {
  title: "Manish Pawar \u2014 Full Stack Developer",
  description:
    "Portfolio of Manish Pawar, a full-stack developer building web applications, backend systems and exploring AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="portfolio-wrapper">{children}</main>
      </body>
    </html>
  );
}
