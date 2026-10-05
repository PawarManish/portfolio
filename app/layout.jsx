import { Playfair_Display, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-worksans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
  display: "swap",
});

export const metadata = {
  title: "Manish Pawar — Full Stack Developer",
  description:
    "Portfolio of Manish Pawar, a full-stack developer building web applications, backend systems and exploring AI.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${workSans.variable} ${spaceMono.variable}`}
    >
      <body>
        <main className="portfolio-wrapper">{children}</main>
      </body>
    </html>
  );
}
