/* Single source of truth for site-wide constants for Aman Kumar (@2006-Aman). */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Aman Kumar",
  jobTitle: "AI & ML Engineer · Full Stack Web Developer",
  bio: "AI & ML Student passionate about building intelligent solutions and solving real-world problems using Machine Learning and Generative AI.",
  email: "amankumar.kumar2006@gmail.com",
  location: "India",
  /* exact profile URLs */
  sameAs: [
    "https://github.com/2006-Aman",
    "https://github.com/Aman-kumar2006",
  ],
};
