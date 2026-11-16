/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Aman Kumar",
  jobTitle: "Full Stack Developer & Computer Science Engineer",
  email: "amankumar.kumar2006@gmail.com",
  location: "India",
  /* exact profile URLs */
  sameAs: [
    "https://github.com/2006-Aman",
    "https://github.com/Aman-kumar2006",
  ],
};
