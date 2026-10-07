import { createFileRoute } from "@tanstack/react-router";
import { AcademySite, faqs } from "@/components/academy-site";

const URL = "https://kalaskar-digital-ascend.lovable.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalaskar Toppers Academy | JEE, NEET & MHT-CET Coaching in Kashti" },
      { name: "description", content: "JEE, NEET, MHT-CET and Foundation coaching in Kashti, Ahilyanagar. Hostel, transport, 4.9 Google rating from 413 reviews. Admissions 2026-27 open." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Kalaskar Toppers Academy, Kashti" },
      { property: "og:description", content: "Focused preparation, proven results and a complete residential learning ecosystem in Kashti." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Kalaskar Toppers Academy",
          url: URL,
          telephone: "+919657575252",
          founder: { "@type": "Person", name: "Prof. Ganesh Kalaskar", jobTitle: "Founder and Director" },
          address: { "@type": "PostalAddress", streetAddress: "Shrigonda Road Chowk, next to Sagar Traders", addressLocality: "Kashti", addressRegion: "Maharashtra", postalCode: "414701", addressCountry: "IN" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "413" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: URL }],
        }),
      },
    ],
  }),
  component: AcademySite,
});
