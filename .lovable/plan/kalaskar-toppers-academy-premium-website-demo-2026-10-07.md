# Kalaskar Toppers Academy premium website demo

## Goal
Build a polished, conversion-focused academy website at `/` using the supplied campus, classroom, result, and student photos. The first screen will immediately establish the academy, Kashti location, admissions status, rating, and primary enquiry actions.

## Experience
- Premium Marathi/English visual identity inspired by the academy’s maroon-and-gold branding, with editorial typography, restrained motion, and excellent mobile presentation.
- Sticky navigation and clear calls to call, WhatsApp, check scholarship eligibility, take a mock test, and explore the campus.
- Trust-first content: 4.9 rating, 413 reviews, 600–800+ student community, faculty-led teaching, hostel, library, transport, and test discipline.
- Results showcase with searchable/filterable JEE/NEET topper profiles based on the supplied 2026 result artwork.
- Interactive scholarship calculator that turns marks into an illustrative eligibility band and counselling lead prompt.
- Short diagnostic test with instant score, subject breakdown, recommendations, and counselling action.
- Immersive campus explorer using layered 3D motion and the supplied real academy/classroom/hostel photography; clearly presented as a demo tour rather than fabricated 360° footage.
- Faculty video preview treatment, transport route finder for nearby locations, parent portal preview, reviews, facilities, and admissions contact section.
- Floating bilingual FAQ assistant demo with WhatsApp handoff.

## Technical details
- Keep the demo frontend-only so it is immediately shareable without requiring accounts or setup; forms and portals show realistic interactive demo states without storing personal information.
- Use semantic design tokens in the global stylesheet, reusable React sections, existing shadcn controls, and Lucide icons.
- Create CDN asset pointers for all supplied images and import them into the page.
- Add route-specific title, description, Open Graph, and Twitter metadata to the home route.
- Add reduced-motion support and responsive layouts for phone, tablet, and desktop.
- Record the component and demo-data organization decision in `AGENTS.md`.

## Validation
- Confirm the page builds successfully.
- Open the live preview at desktop and mobile sizes; verify imagery, navigation, calculator, filters, test flow, campus explorer, route finder, portal preview, FAQ assistant, and contact actions.
