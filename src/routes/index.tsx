import { createFileRoute } from "@tanstack/react-router";
import { AcademySite } from "@/components/academy-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalaskar Toppers Academy | JEE, NEET & MHT-CET Coaching in Kashti" },
      { name: "description", content: "Expert JEE, NEET, MHT-CET and Foundation coaching with hostel, transport and personal attention in Kashti, Ahilyanagar." },
      { property: "og:title", content: "Kalaskar Toppers Academy, Kashti" },
      { property: "og:description", content: "Focused preparation, proven results and a complete residential learning ecosystem in Kashti." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcademySite,
});
