import { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Bot,
  Bus,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock3,
  ExternalLink,
  GraduationCap,
  Headphones,
  HeartHandshake,
  Home,
  Library,
  LockKeyhole,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  Play,
  Quote,
  Search,
  ShieldCheck,
  Sparkle,
  Star,
  Trophy,
  Users,
  Utensils,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import buildingAsset from "@/assets/academy-building.png.asset.json";
import resultAsset from "@/assets/jee-result-2026.png.asset.json";
import facultyAsset from "@/assets/faculty-room.png.asset.json";
import classroomAsset from "@/assets/smart-classroom.png.asset.json";
import facilitiesAsset from "@/assets/academy-facilities.png.asset.json";
import examAsset from "@/assets/exam-hall.png.asset.json";
import campusAsset from "@/assets/academy-campus.png.asset.json";
import hostelAsset from "@/assets/hostel-building.png.asset.json";
import communityAsset from "@/assets/student-community.png.asset.json";

const PHONE = "9657575252";
const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Namaskar, I would like to know more about admissions at Kalaskar Toppers Academy.")}`;

const toppers = [
  { name: "Anuradha Haral", exam: "JEE Main", year: "2026", score: "99.4128", rank: "Academy Rank 1", initials: "AH" },
  { name: "Mayur Yadav", exam: "JEE Main", year: "2026", score: "99.3032", rank: "Academy Rank 2", initials: "MY" },
  { name: "Shivam Shitole", exam: "JEE Main", year: "2026", score: "99.1982", rank: "Academy Rank 3", initials: "SS" },
  { name: "Om Gavali", exam: "JEE Main", year: "2026", score: "98.34", rank: "Top Performer", initials: "OG" },
  { name: "Sai Gaikwad", exam: "NEET", year: "2025", score: "682", rank: "Medical Achiever", initials: "SG" },
  { name: "Sakshi Lagad", exam: "NEET", year: "2025", score: "674", rank: "Medical Achiever", initials: "SL" },
];

const tourStops = [
  { name: "Smart Classrooms", label: "Focused learning", image: classroomAsset.url, detail: "Technology-enabled teaching spaces designed for clarity, comfort and daily discipline." },
  { name: "Exam Hall", label: "Real exam practice", image: examAsset.url, detail: "Structured tests in a serious exam environment build speed, accuracy and confidence." },
  { name: "Residential Hostel", label: "A second home", image: hostelAsset.url, detail: "A secure residential environment with study routines, mess facilities and mentor support." },
  { name: "Main Campus", label: "Kashti, Ahilyanagar", image: buildingAsset.url, detail: "A purpose-built academic setting that keeps learning, mentoring and student life connected." },
];

const questions = [
  { subject: "Physics", question: "A body starts from rest with acceleration 2 m/s². Its velocity after 5 seconds is:", options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"], answer: 1 },
  { subject: "Chemistry", question: "Which element has the highest electronegativity?", options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"], answer: 1 },
  { subject: "Mathematics", question: "If x² − 5x + 6 = 0, the roots are:", options: ["1, 6", "2, 3", "−2, −3", "3, 5"], answer: 1 },
];

const routes = [
  { place: "Kashti Bus Stand", distance: "1.2 km", time: "07:25 AM", route: "Route K1" },
  { place: "Shrigonda", distance: "18 km", time: "06:35 AM", route: "Route S2" },
  { place: "Belwandi", distance: "16 km", time: "06:45 AM", route: "Route B1" },
  { place: "Daund", distance: "28 km", time: "06:15 AM", route: "Route D3" },
];

const quickAnswers = [
  { question: "When do admissions close?", answer: "Admissions for 2026–27 are currently open. The team can confirm seat availability for your course." },
  { question: "Is hostel available?", answer: "Yes, the academy offers residential hostel and mess facilities. Availability is confirmed during counselling." },
  { question: "मराठीत माहिती", answer: "नमस्कार! प्रवेश, बॅच, वसतिगृह आणि वाहतूक याबद्दल माहितीसाठी खाली WhatsApp वर संपर्क करा." },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Kalaskar Toppers Academy home">
      <span className={`grid shrink-0 place-items-center border border-brand-gold/35 bg-brand-deep text-brand-gold shadow-emblem ${compact ? "size-10" : "size-12"}`}>
        <Trophy className={compact ? "size-4" : "size-5"} />
      </span>
      <span className="min-w-0 leading-none">
        <strong className="block font-display text-[1.05rem] font-bold text-foreground sm:text-[1.15rem]">Kalaskar Toppers</strong>
        <span className="mt-1 block text-[0.63rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">Academy · Kashti</span>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-brand-gold" : "text-primary"}`}>
        <span className="h-px w-8 bg-current" /> {eyebrow}
      </p>
      <h2 className={`font-display text-4xl font-normal leading-[1.08] sm:text-5xl lg:text-6xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
      {copy && <p className={`mt-5 max-w-2xl text-base leading-7 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{copy}</p>}
    </div>
  );
}

export function AcademySite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [examFilter, setExamFilter] = useState("All exams");
  const [resultSearch, setResultSearch] = useState("");
  const [marks, setMarks] = useState(88);
  const [stream, setStream] = useState("JEE");
  const [tourIndex, setTourIndex] = useState(0);
  const [mockOpen, setMockOpen] = useState(false);
  const [mockStep, setMockStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [mockDone, setMockDone] = useState(false);
  const [routeQuery, setRouteQuery] = useState("");
  const [portalOpen, setPortalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatAnswer, setChatAnswer] = useState("Namaskar! Choose a question below. I can help in English or मराठी.");

  const scholarship = marks >= 95 ? 40 : marks >= 90 ? 30 : marks >= 80 ? 20 : marks >= 70 ? 10 : 0;
  const filteredToppers = toppers.filter((topper) => (examFilter === "All exams" || topper.exam === examFilter) && topper.name.toLowerCase().includes(resultSearch.toLowerCase()));
  const filteredRoutes = routes.filter((route) => route.place.toLowerCase().includes(routeQuery.toLowerCase()));
  const mockScore = answers.reduce((score, answer, index) => score + (answer === questions[index]?.answer ? 1 : 0), 0);
  const currentTour = tourStops[tourIndex] ?? tourStops[0];
  const currentQuestion = questions[mockStep] ?? questions[0];

  if (!currentTour || !currentQuestion) return null;

  function chooseAnswer(answer: number) {
    const next = [...answers];
    next[mockStep] = answer;
    setAnswers(next);
    if (mockStep === questions.length - 1) setMockDone(true);
    else setMockStep((step) => step + 1);
  }

  function resetMock() {
    setMockStep(0);
    setAnswers([]);
    setMockDone(false);
  }

  const scholarshipLabel = useMemo(() => {
    if (scholarship === 0) return "Counselling-based support";
    return `Up to ${scholarship}% scholarship band`;
  }, [scholarship]);

  return (
    <main id="top" className="overflow-hidden bg-background">
      <div className="bg-brand-deep px-4 py-2.5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground sm:text-xs">
        <span className="text-brand-gold">Admissions open for 2026–27</span>
        <span className="mx-3 text-primary-foreground/30">|</span>
        JEE · NEET · MHT-CET · Foundation
        <a href={`tel:+91${PHONE}`} className="ml-3 hidden items-center gap-1.5 text-primary-foreground underline decoration-brand-gold underline-offset-4 sm:inline-flex"><Phone className="size-3" /> +91 {PHONE}</a>
      </div>

      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[84px] max-w-[1400px] items-center justify-between px-5 lg:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {[["Results", "#results"], ["Courses", "#courses"], ["Campus", "#campus"], ["Scholarship", "#scholarship"], ["Facilities", "#facilities"]].map(([label, href]) => (
              <a key={label} href={href} className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-brand-gold">{label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" className="h-11 rounded-none border-foreground/20 text-xs uppercase tracking-[0.08em]" onClick={() => setPortalOpen(true)}><LockKeyhole /> Parent login</Button>
            <Button asChild className="h-11 rounded-none bg-brand-gold px-5 text-brand-deep shadow-none hover:bg-primary hover:text-primary-foreground"><a href="#enquire">Enquire now <ArrowRight /></a></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</Button>
        </div>
        {mobileOpen && (
          <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
            <nav className="grid gap-1">
              {[["Results", "#results"], ["Courses", "#courses"], ["Campus", "#campus"], ["Scholarship", "#scholarship"], ["Facilities", "#facilities"]].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-3 font-semibold hover:bg-muted">{label}</a>
              ))}
              <Button className="mt-3" asChild><a href="#enquire" onClick={() => setMobileOpen(false)}>Enquire now</a></Button>
            </nav>
          </div>
        )}
      </header>

      <section className="relative min-h-[760px] overflow-hidden bg-brand-deep lg:min-h-[820px]">
        <img src={communityAsset.url} alt="Kalaskar Toppers Academy students outside the Kashti campus" className="absolute inset-0 h-full w-full object-cover object-[60%_center] grayscale opacity-42" />
        <div className="absolute inset-0 bg-hero-wash" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-deep to-transparent" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-20 pt-16 lg:min-h-[820px] lg:px-8">
          <div className="max-w-3xl animate-rise">
            <div className="mb-8 inline-flex items-center gap-2 border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground backdrop-blur-md">
              <span className="flex text-brand-gold"><Star className="size-4 fill-current" /></span> 4.9 rated by 413 families
            </div>
            <p className="mb-4 font-devanagari text-xl font-semibold text-brand-gold sm:text-2xl">कळसकर सरांचे टॉपर्स अकॅडेमी, काष्टी</p>
            <h1 className="max-w-4xl font-display text-5xl font-normal leading-[1.02] text-primary-foreground sm:text-7xl lg:text-[5.75rem]">
              Where ambition<br />gets a <span className="italic text-brand-gold">rank.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-primary-foreground/78">Focused JEE, NEET and MHT-CET preparation with expert teachers, rigorous testing and a residential ecosystem built around every student.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
               <Button size="lg" className="h-14 rounded-none bg-brand-gold px-8 text-xs uppercase tracking-[0.14em] text-brand-deep shadow-none hover:bg-primary-foreground" onClick={() => setMockOpen(true)}><Zap /> Take a free mock test</Button>
               <Button size="lg" variant="outline" className="h-14 rounded-none border-primary-foreground/30 bg-transparent px-8 text-xs uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild><a href="#campus"><Play /> Explore campus</a></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-primary-foreground/70">
              {['Daily tests & analysis', 'Hostel & mess', 'Transport available'].map((item) => <span key={item} className="flex items-center gap-2"><CircleCheck className="size-4 text-brand-gold" /> {item}</span>)}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-primary-foreground/15 bg-brand-deep/92 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-primary-foreground/15 px-5 sm:grid-cols-4 lg:px-8">
            {[['600–800+', 'Student community'], ['4.9 / 5', 'Google rating'], ['413', 'Public reviews'], ['2026', 'Admissions open']].map(([value, label]) => (
               <div key={label} className="px-4 py-5 sm:px-7"><strong className="block font-display text-2xl font-normal text-primary-foreground sm:text-3xl">{value}</strong><span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/45">{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-24 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Results that speak" title="Meet the students who raised the bar." copy="Explore recent achievers across competitive exams. Every score represents disciplined practice, close mentoring and a family that believed." />
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Search toppers" value={resultSearch} onChange={(e) => setResultSearch(e.target.value)} placeholder="Search student" className="h-11 w-full pl-10 sm:w-48" /></div>
              <Select value={examFilter} onValueChange={setExamFilter}><SelectTrigger className="h-11 w-full sm:w-40"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="All exams">All exams</SelectItem><SelectItem value="JEE Main">JEE Main</SelectItem><SelectItem value="NEET">NEET</SelectItem></SelectContent></Select>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredToppers.map((topper, index) => (
              <article key={topper.name} className={`group relative overflow-hidden border bg-card p-8 transition-all hover:-translate-y-1 hover:border-brand-gold hover:shadow-premium ${index === 0 ? "border-brand-gold" : "border-border"}`}>
                {index === 0 && <div className="absolute right-0 top-0 bg-brand-gold px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider text-brand-deep">Featured</div>}
                 <div className="flex items-center gap-5"><div className="grid size-16 shrink-0 place-items-center bg-primary text-lg font-bold text-primary-foreground">{topper.initials}</div><div><p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-gold">{topper.rank}</p><h3 className="mt-1 font-display text-xl font-normal">{topper.name}</h3></div></div>
                 <div className="mt-8 flex items-end justify-between border-t border-border pt-6"><div><span className="block text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">{topper.exam} · {topper.year}</span><strong className="mt-2 block font-display text-3xl font-normal text-foreground">{topper.score}<span className="ml-1 text-sm text-muted-foreground">{topper.exam === 'JEE Main' ? '%ile' : ' marks'}</span></strong></div><Award className="size-7 text-brand-gold" /></div>
              </article>
            ))}
          </div>
          <div className="mt-14 overflow-hidden border border-foreground/10 bg-brand-soft p-4 sm:p-7">
            <div className="grid items-center gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <img src={resultAsset.url} alt="JEE Main 2026 results poster showing Kalaskar Toppers Academy achievers" className="mx-auto max-h-[430px] w-full max-w-md object-contain shadow-premium" />
              <div className="px-2 sm:px-9"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">JEE Main 2026</p><h3 className="mt-5 font-display text-3xl font-normal sm:text-4xl">Three academy toppers above 99 percentile.</h3><p className="mt-5 max-w-xl leading-7 text-muted-foreground">A culture of consistent tests, doubt-solving and individual performance reviews helps students turn preparation into measurable outcomes.</p><Button className="mt-8 rounded-none bg-primary px-7 text-xs uppercase tracking-[0.12em]" asChild><a href="#enquire">Plan your preparation <ArrowRight /></a></Button></div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="border-y border-foreground/10 bg-brand-soft py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Academic pathways" title="One goal. A sharper plan to reach it." copy="Choose a focused preparation pathway backed by concept clarity, daily discipline and frequent performance checks." />
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {[{icon:Microscope,title:'NEET',sub:'Medical entrance',copy:'Concept mastery, NCERT depth and high-frequency testing across Physics, Chemistry and Biology.',tag:'XI–XII + Repeaters'}, {icon:Zap,title:'JEE + MHT-CET',sub:'Engineering entrance',copy:'Problem-solving depth, speed training and targeted preparation for national and state engineering entrances.',tag:'XI–XII + Repeaters'}, {icon:BookOpen,title:'Foundation',sub:'Build early advantage',copy:'Strong fundamentals, reasoning and exam temperament for students preparing ahead from school years.',tag:'VIII–X'}].map((course) => (
              <article key={course.title} className="bg-card p-8 transition-colors hover:bg-background sm:p-10"><course.icon className="size-9 text-brand-gold" /><p className="mt-10 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">{course.sub}</p><h3 className="mt-3 font-display text-3xl font-normal">{course.title}</h3><p className="mt-5 min-h-24 leading-7 text-muted-foreground">{course.copy}</p><div className="mt-8 flex items-center justify-between border-t border-border pt-5"><span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{course.tag}</span><ArrowRight className="size-5 text-brand-gold" /></div></article>
            ))}
          </div>
        </div>
      </section>

      <section id="scholarship" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <SectionHeading eyebrow="Scholarship estimator" title="Merit should open doors, not create limits." copy="Use this instant estimator to understand your likely scholarship band, then book a counselling session for the official eligibility review." />
          <div className="rounded-md border border-border bg-card p-6 shadow-premium sm:p-9">
            <div className="flex items-center justify-between"><div><p className="text-sm font-bold text-foreground">Your latest score</p><p className="mt-1 text-xs text-muted-foreground">Board percentage or comparable mock score</p></div><strong className="font-display text-4xl text-primary">{marks}%</strong></div>
            <input aria-label="Marks percentage" type="range" min="50" max="100" value={marks} onChange={(event) => setMarks(Number(event.target.value))} className="mt-7 w-full accent-primary" />
            <div className="mt-3 flex justify-between text-xs text-muted-foreground"><span>50%</span><span>100%</span></div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {['JEE','NEET'].map((item) => <Button key={item} variant={stream === item ? 'default' : 'outline'} className="h-11" onClick={() => setStream(item)}>{item} pathway</Button>)}
            </div>
            <div className="mt-7 rounded-md bg-brand-soft p-6"><div className="flex items-start justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Illustrative eligibility</p><h3 className="mt-2 font-display text-2xl font-semibold">{scholarshipLabel}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">For the {stream} preparation pathway. Final award is confirmed after assessment and counselling.</p></div><div className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-gold text-brand-deep"><Sparkle className="size-5" /></div></div></div>
            <Button className="mt-5 h-12 w-full" asChild><a href="#enquire">Claim counselling slot <ArrowRight /></a></Button>
          </div>
        </div>
      </section>

      <section id="campus" className="bg-brand-deep py-24 text-primary-foreground sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading light eyebrow="Immersive campus explorer" title="Step inside the student experience." copy="Explore real academy spaces through an interactive, depth-enhanced tour. Select a location and move through the campus story." />
            <div className="flex gap-2"><Button variant="outline" size="icon" className="size-11 border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => setTourIndex((tourIndex + tourStops.length - 1) % tourStops.length)} aria-label="Previous campus view"><ChevronLeft /></Button><Button variant="outline" size="icon" className="size-11 border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => setTourIndex((tourIndex + 1) % tourStops.length)} aria-label="Next campus view"><ChevronRight /></Button></div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_310px]">
            <div className="campus-stage group relative min-h-[500px] overflow-hidden rounded-md bg-muted sm:min-h-[620px]">
              <img key={currentTour.image} src={currentTour.image} alt={currentTour.name} className="absolute inset-0 h-full w-full animate-soft-zoom object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-brand-deep/10" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-brand-deep/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur"><span className="size-2 animate-pulse rounded-full bg-brand-gold" /> Interactive tour · {tourIndex + 1}/{tourStops.length}</div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">{currentTour.label}</p><h3 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{currentTour.name}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-primary-foreground/72 sm:text-base">{currentTour.detail}</p></div>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {tourStops.map((stop, index) => <Button key={stop.name} variant="ghost" onClick={() => setTourIndex(index)} className={`h-auto justify-start whitespace-normal rounded-md border p-3 text-left text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground lg:p-4 ${index === tourIndex ? 'border-brand-gold bg-primary-foreground/10' : 'border-primary-foreground/15'}`}><img src={stop.image} alt="" className="size-14 rounded-sm object-cover" /><span><strong className="block text-sm">{stop.name}</strong><span className="mt-1 block text-xs font-normal text-primary-foreground/55">{stop.label}</span></span></Button>)}
            </div>
          </div>
          <p className="mt-5 text-center text-xs text-primary-foreground/45">Interactive photographic demo · A full 360° scan can be integrated after an on-site capture.</p>
        </div>
      </section>

      <section id="facilities" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="A complete ecosystem" title="Everything a focused student needs, in one place." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[{icon:Library,title:'24×7 study culture',copy:'Library and supervised study spaces.'},{icon:Home,title:'Residential hostel',copy:'Purpose-built living for outstation students.'},{icon:Utensils,title:'Quality mess',copy:'Consistent meals that support student routines.'},{icon:Bus,title:'Transport network',copy:'Pickup support across nearby villages.'},{icon:ShieldCheck,title:'Safe environment',copy:'A structured campus with close supervision.'},{icon:Headphones,title:'Doubt support',copy:'Accessible teachers and guided revision.'},{icon:Users,title:'Personal attention',copy:'Performance reviews beyond classroom teaching.'},{icon:Clock3,title:'Disciplined schedule',copy:'A balanced routine of classes, tests and study.'}].map((item) => <article key={item.title} className="rounded-md border border-border p-6 transition-colors hover:border-primary/35 hover:bg-brand-soft"><item.icon className="size-7 text-primary" /><h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p></article>)}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <img src={facilitiesAsset.url} alt="Academy facilities overview including hostel, transport, library and laboratories" className="h-full max-h-[540px] w-full rounded-md bg-muted object-contain p-3" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"><img src={facultyAsset.url} alt="Academic meeting and guidance room at the academy" className="h-60 w-full rounded-md object-cover lg:h-full" /><img src={campusAsset.url} alt="Kalaskar Toppers Academy building in Kashti" className="h-60 w-full rounded-md object-cover lg:h-full" /></div>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-md bg-brand-deep">
            <img src={classroomAsset.url} alt="A smart classroom at Kalaskar Toppers Academy" className="aspect-[4/3] w-full object-cover opacity-80" />
            <div className="absolute inset-0 grid place-items-center bg-brand-deep/15"><Button size="icon" className="size-20 rounded-full bg-brand-gold text-brand-deep shadow-gold hover:bg-brand-gold/90" aria-label="Play faculty lesson preview"><Play className="size-7 fill-current" /></Button></div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep to-transparent p-7 pt-20"><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">Faculty lesson preview</p><h3 className="mt-2 font-display text-2xl text-primary-foreground">See how a difficult concept becomes clear.</h3></div>
          </div>
          <div><SectionHeading eyebrow="Teaching before telling" title="Experience the classroom before you enrol." copy="Short concept sessions let students and parents understand the academy’s teaching style, pace and emphasis on fundamentals." /><div className="mt-8 grid gap-3 sm:grid-cols-2">{['Concept-first teaching','Bilingual explanations','Exam-focused practice','Accessible doubt solving'].map((item)=><div key={item} className="flex items-center gap-3 border-b border-border py-3 text-sm font-semibold"><Check className="size-4 text-primary" />{item}</div>)}</div><Button className="mt-8" onClick={() => setMockOpen(true)}>Try the diagnostic test <ArrowRight /></Button></div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-md border border-border lg:grid-cols-2">
            <div className="bg-card p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Smart transport finder</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Find your nearest pickup.</h2><p className="mt-3 leading-7 text-muted-foreground">Search a nearby town or landmark to preview the closest demo route and morning pickup.</p>
              <div className="relative mt-7"><MapPin className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary" /><Input value={routeQuery} onChange={(e)=>setRouteQuery(e.target.value)} placeholder="Try Kashti, Shrigonda, Belwandi…" className="h-12 pl-12" /></div>
              <div className="mt-5 space-y-2">{filteredRoutes.length ? filteredRoutes.map((route)=><div key={route.place} className="flex items-center justify-between rounded-md bg-brand-soft p-4"><div><strong className="block text-sm">{route.place}</strong><span className="text-xs text-muted-foreground">{route.distance} · {route.route}</span></div><span className="rounded-sm bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">{route.time}</span></div>) : <p className="rounded-md bg-brand-soft p-5 text-sm text-muted-foreground">No demo route found. Ask the admissions team to confirm pickup availability.</p>}</div>
            </div>
            <div className="relative min-h-[430px] overflow-hidden bg-brand-deep p-7 text-primary-foreground sm:p-10"><div className="absolute inset-0 opacity-20 map-grid" /><div className="relative"><Bus className="size-10 text-brand-gold" /><h3 className="mt-6 font-display text-3xl font-semibold">From village to classroom, with less uncertainty.</h3><p className="mt-4 max-w-md leading-7 text-primary-foreground/65">The final website can map every operational stop, route and timing for parents in one clear view.</p><div className="relative mt-12 h-44"><span className="absolute left-[8%] top-[50%] size-4 rounded-full border-4 border-brand-gold bg-brand-deep" /><span className="absolute right-[12%] top-[8%] size-5 rounded-full border-4 border-brand-gold bg-brand-deep" /><span className="absolute left-[10%] right-[14%] top-[48%] h-1 origin-left -rotate-[18deg] bg-brand-gold/70" /><span className="absolute left-[42%] top-[28%] grid size-12 place-items-center rounded-full bg-brand-gold text-brand-deep shadow-gold"><Bus className="size-5" /></span><span className="absolute bottom-2 right-0 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">Academy campus</span></div></div></div>
          </div>
        </div>
      </section>

      <section className="bg-brand-deep py-24 text-primary-foreground sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading light eyebrow="Parent confidence" title="Accountability you can see." copy="The parent portal preview demonstrates how attendance, test performance and mentor observations can stay visible throughout the academic year." />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-md border border-primary-foreground/15 bg-primary-foreground/7 p-5 sm:p-8"><div className="flex flex-col justify-between gap-4 border-b border-primary-foreground/15 pb-6 sm:flex-row sm:items-center"><div><p className="text-sm text-primary-foreground/55">Student overview</p><h3 className="mt-1 font-display text-2xl">Aarav K. · JEE Batch A</h3></div><span className="w-fit rounded-sm bg-success/15 px-3 py-2 text-xs font-bold text-success">On track</span></div><div className="mt-7 grid gap-4 sm:grid-cols-3">{[['94%','Attendance'],['87%','Latest test'],['+12','Score growth']].map(([value,label])=><div key={label} className="rounded-md bg-primary-foreground/7 p-5"><strong className="font-display text-3xl text-brand-gold">{value}</strong><span className="mt-2 block text-xs uppercase tracking-wider text-primary-foreground/45">{label}</span></div>)}</div><div className="mt-7"><div className="mb-3 flex justify-between text-sm"><span>Physics mastery</span><span className="text-primary-foreground/55">82%</span></div><Progress value={82} className="bg-primary-foreground/10 [&>div]:bg-brand-gold" /><div className="mb-3 mt-5 flex justify-between text-sm"><span>Chemistry mastery</span><span className="text-primary-foreground/55">91%</span></div><Progress value={91} className="bg-primary-foreground/10 [&>div]:bg-brand-gold" /></div></div>
            <div className="flex flex-col justify-between rounded-md bg-brand-gold p-7 text-brand-deep sm:p-9"><div><LockKeyhole className="size-9" /><h3 className="mt-7 font-display text-3xl font-semibold">One view for parents. One clear path for students.</h3><p className="mt-4 leading-7 text-brand-deep/70">Attendance, OMR analysis, test trends, homework and mentor notes—designed to reduce guesswork.</p></div><Button className="mt-10 h-12 bg-brand-deep text-primary-foreground hover:bg-brand-deep/90" onClick={()=>setPortalOpen(true)}>Open portal preview <ExternalLink /></Button></div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><SectionHeading eyebrow="Voices of confidence" title="Trusted by students. Recommended by families." /><div className="mt-7 flex items-center gap-4"><strong className="font-display text-6xl">4.9</strong><div><div className="flex text-brand-gold">{[1,2,3,4,5].map((item)=><Star key={item} className="size-5 fill-current" />)}</div><p className="mt-1 text-sm text-muted-foreground">Based on 413 Google reviews</p></div></div></div><div className="grid gap-4 sm:grid-cols-2">{[{name:'Mohini Mhaske',quote:'In two years I experienced that I increased my knowledge only because of Toppers Academy and their brilliant team. All teachers are well educated.'},{name:'Vini Datir',quote:'The academy is very good. Teaching faculty is very helpful and teaching is excellent. Overall experience is very good.'}].map((review)=><blockquote key={review.name} className="rounded-md border border-border bg-card p-7"><Quote className="size-8 text-brand-gold" /><p className="mt-6 text-base leading-7 text-foreground">“{review.quote}”</p><footer className="mt-6 flex items-center justify-between border-t border-border pt-5"><strong className="text-sm">{review.name}</strong><div className="flex text-brand-gold">{[1,2,3,4,5].map((item)=><Star key={item} className="size-3.5 fill-current" />)}</div></footer></blockquote>)}</div></div></div>
      </section>

      <section id="enquire" className="relative overflow-hidden bg-brand-soft py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div><SectionHeading eyebrow="Admissions 2026–27" title="Your next result starts with one conversation." copy="Meet the academic team, understand the right pathway and experience the academy before making a decision." /><div className="mt-8 grid gap-4 sm:grid-cols-2"><a href={`tel:+91${PHONE}`} className="flex items-center gap-4 rounded-md border border-border bg-card p-5 transition hover:border-primary/40"><span className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground"><Phone className="size-4" /></span><span><small className="block text-muted-foreground">Call admissions</small><strong>+91 {PHONE}</strong></span></a><a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-md border border-border bg-card p-5 transition hover:border-primary/40"><span className="grid size-11 place-items-center rounded-full bg-success text-success-foreground"><MessageCircle className="size-4" /></span><span><small className="block text-muted-foreground">Chat on WhatsApp</small><strong>Quick response</strong></span></a></div><p className="mt-7 flex items-start gap-3 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0 text-primary" /> Shrigonda Road Chowk, next to Sagar Traders, Kashti, Maharashtra 414701</p></div>
          <form className="rounded-md border border-border bg-card p-6 shadow-premium sm:p-8" onSubmit={(e)=>e.preventDefault()}><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Request a counselling call</p><h3 className="mt-3 font-display text-2xl font-semibold">Tell us where you are in the journey.</h3><div className="mt-7 grid gap-4 sm:grid-cols-2"><Input aria-label="Student name" placeholder="Student name" className="h-12" /><Input aria-label="Phone number" placeholder="Phone number" className="h-12" /><Select defaultValue="JEE"><SelectTrigger className="h-12"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="JEE">JEE preparation</SelectItem><SelectItem value="NEET">NEET preparation</SelectItem><SelectItem value="Foundation">Foundation</SelectItem></SelectContent></Select><Select defaultValue="Class 11"><SelectTrigger className="h-12"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Class 10">Class 10</SelectItem><SelectItem value="Class 11">Class 11</SelectItem><SelectItem value="Class 12">Class 12</SelectItem><SelectItem value="Repeater">Repeater</SelectItem></SelectContent></Select></div><Button type="button" className="mt-5 h-12 w-full" asChild><a href={WHATSAPP} target="_blank" rel="noreferrer">Continue on WhatsApp <ArrowRight /></a></Button><p className="mt-4 text-center text-xs text-muted-foreground">Demo enquiry flow · No details are stored</p></form>
        </div>
      </section>

      <footer className="bg-brand-deep py-12 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-end lg:justify-between lg:px-8"><div><BrandMark compact /><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/55">JEE, NEET, MHT-CET and Foundation coaching with residential support in Kashti, Ahilyanagar.</p></div><div className="text-sm text-primary-foreground/50"><p className="font-devanagari text-base text-primary-foreground/75">प्रामाणिक मार्गदर्शन. शिस्तबद्ध तयारी. उज्ज्वल भविष्य.</p><p className="mt-3">© 2026 Kalaskar Toppers Academy. Demo experience.</p></div></div></footer>

      <Dialog open={mockOpen} onOpenChange={(open)=>{setMockOpen(open); if(!open) resetMock();}}><DialogContent className="max-w-2xl overflow-hidden p-0"><div className="bg-brand-deep p-6 text-primary-foreground sm:p-8"><DialogHeader><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">15-minute diagnostic · Demo</p><DialogTitle className="mt-2 font-display text-3xl">JEE / NEET readiness check</DialogTitle><DialogDescription className="text-primary-foreground/60">Answer three representative questions for instant analysis.</DialogDescription></DialogHeader></div><div className="p-6 sm:p-8">{!mockDone ? <><div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground"><span>{currentQuestion.subject}</span><span>Question {mockStep+1} of {questions.length}</span></div><Progress value={((mockStep+1)/questions.length)*100} className="mt-4" /><h3 className="mt-7 text-lg font-semibold leading-7">{currentQuestion.question}</h3><div className="mt-6 grid gap-3">{currentQuestion.options.map((option,index)=><Button key={option} variant="outline" onClick={()=>chooseAnswer(index)} className="h-auto justify-start whitespace-normal p-4 text-left"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-xs">{String.fromCharCode(65+index)}</span>{option}</Button>)}</div></> : <div className="text-center"><div className="mx-auto grid size-20 place-items-center rounded-full bg-brand-gold text-brand-deep"><Trophy className="size-8" /></div><p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">Instant analysis</p><h3 className="mt-2 font-display text-4xl font-semibold">{mockScore}/{questions.length} correct</h3><p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">{mockScore === 3 ? 'Excellent fundamentals. You are ready for advanced problem-solving.' : mockScore >= 2 ? 'Good base. Focused practice can quickly close your remaining gaps.' : 'A structured concept plan will give you the strongest start.'}</p><div className="mt-7 grid grid-cols-3 gap-2">{questions.map((question,index)=><div key={question.subject} className="rounded-md bg-brand-soft p-3"><span className="block text-xs text-muted-foreground">{question.subject}</span><strong className={`mt-1 block text-sm ${answers[index]===question.answer?'text-success':'text-destructive'}`}>{answers[index]===question.answer?'Strong':'Needs focus'}</strong></div>)}</div><Button className="mt-7 w-full" asChild><a href="#enquire" onClick={()=>setMockOpen(false)}>Book detailed counselling <ArrowRight /></a></Button></div>}</div></DialogContent></Dialog>

      <Dialog open={portalOpen} onOpenChange={setPortalOpen}><DialogContent><DialogHeader><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Parent–student portal</p><DialogTitle className="font-display text-3xl">Accountability, in your pocket.</DialogTitle><DialogDescription>This interactive preview shows the proposed secure experience for enrolled families.</DialogDescription></DialogHeader><div className="mt-4 rounded-md bg-brand-soft p-5"><div className="flex items-center gap-4"><div className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground"><GraduationCap /></div><div><strong className="block">Demo Student</strong><span className="text-sm text-muted-foreground">JEE · Batch A</span></div></div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-md bg-card p-4"><span className="text-xs text-muted-foreground">Attendance</span><strong className="mt-1 block text-2xl">94%</strong></div><div className="rounded-md bg-card p-4"><span className="text-xs text-muted-foreground">Test rank</span><strong className="mt-1 block text-2xl">12 / 186</strong></div></div></div><Button asChild className="mt-3"><a href="#enquire" onClick={()=>setPortalOpen(false)}>Ask about admissions <ArrowRight /></a></Button></DialogContent></Dialog>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {chatOpen && <div className="w-[min(360px,calc(100vw-40px))] rounded-md border border-border bg-card shadow-premium"><div className="flex items-center justify-between bg-brand-deep p-4 text-primary-foreground"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-brand-gold text-brand-deep"><Bot className="size-4" /></span><div><strong className="block text-sm">Toppers Guide</strong><span className="block text-xs text-primary-foreground/55">Admissions assistant · Demo</span></div></div><Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={()=>setChatOpen(false)}><X /></Button></div><div className="p-4"><p className="rounded-md bg-brand-soft p-3 text-sm leading-6">{chatAnswer}</p><div className="mt-3 grid gap-2">{quickAnswers.map((item)=><Button key={item.question} variant="outline" className="h-auto justify-start whitespace-normal p-3 text-left text-xs" onClick={()=>setChatAnswer(item.answer)}>{item.question}</Button>)}</div><Button asChild className="mt-3 w-full bg-success text-success-foreground hover:bg-success/90"><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Continue on WhatsApp</a></Button></div></div>}
        <Button size="icon" className="size-14 rounded-full bg-primary shadow-cta" onClick={()=>setChatOpen(!chatOpen)} aria-label="Open admissions assistant">{chatOpen ? <ChevronDown /> : <MessageCircle className="size-6" />}</Button>
      </div>
    </main>
  );
}
