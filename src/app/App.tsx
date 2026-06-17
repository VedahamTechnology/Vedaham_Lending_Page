import { useState, useEffect } from "react";
import {
  Moon, Sun, Menu, X, Code2, Smartphone, Cloud, Palette,
  ShoppingCart, TrendingUp, MessageSquare, Settings,
  ArrowRight, CheckCircle, Star, ChevronDown, ChevronUp,
  MapPin, Phone, Mail, Clock, Github, Twitter, Linkedin,
  Facebook, Instagram, Award, Users, Zap, Shield,
  HeadphonesIcon, DollarSign, ExternalLink,
  ChevronLeft, ChevronRight, Globe, Database, Server,
  Layers, BarChart3, Lock, Rocket, Target, Play, Monitor,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import vedahamLogo from "@/imports/vedaham_Company_Logo.jpeg";
import darklogo from  "@/imports/darklogo.jpeg";

// ─── Brand color constants ───────────────────────────────────────────────────
const BRAND_BLUE   = "#3D8FD4";
const BRAND_TEAL   = "#2BBFC0";
const BRAND_ORANGE = "#F7A723";
const BRAND_GREEN  = "#7DC242";
const CONTACT_PHONE = "+91 75879 87770";
const CONTACT_PHONE_WHATSAPP = "917587987770";
const CONTACT_EMAIL = "vedahamtechnology1@gmail.com";
const CONTACT_ADDRESS = "PU4, Near Medanta Hospital, Indore, Madhya Pradesh 452010";
const WHATSAPP_MESSAGE = "Hi, I need something.";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const CONTACT_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`;

// ─── Data ───────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: Globe,         title: "Website Development",      desc: "Custom, responsive websites built with modern frameworks that drive conversions and deliver exceptional user experiences.",                        iconCls: `text-[${BRAND_BLUE}] bg-[${BRAND_BLUE}]/10 dark:bg-[${BRAND_BLUE}]/15` },
  { icon: Smartphone,    title: "Mobile App Development",   desc: "Native and cross-platform iOS & Android apps that engage users and scale with your business from day one.",                                       iconCls: `text-[${BRAND_ORANGE}] bg-[${BRAND_ORANGE}]/10 dark:bg-[${BRAND_ORANGE}]/15` },
  { icon: Code2,         title: "Custom Software Development", desc: "Bespoke software engineered to automate workflows, solve complex problems, and accelerate growth.",                                           iconCls: `text-[${BRAND_TEAL}] bg-[${BRAND_TEAL}]/10 dark:bg-[${BRAND_TEAL}]/15` },
  { icon: Palette,       title: "UI/UX Design",             desc: "Human-centered design systems that balance aesthetics with function, creating interfaces users genuinely love.",                                   iconCls: `text-[${BRAND_GREEN}] bg-[${BRAND_GREEN}]/10 dark:bg-[${BRAND_GREEN}]/15` },
  { icon: Cloud,         title: "Cloud Solutions",          desc: "Scalable cloud infrastructure on AWS, Azure & GCP — migration, architecture, DevOps, and managed services.",                                      iconCls: `text-[${BRAND_TEAL}] bg-[${BRAND_TEAL}]/10 dark:bg-[${BRAND_TEAL}]/15` },
  { icon: TrendingUp,    title: "Digital Marketing",        desc: "Data-driven strategies spanning SEO, PPC, content, and social that generate qualified leads at scale.",                                           iconCls: `text-[${BRAND_GREEN}] bg-[${BRAND_GREEN}]/10 dark:bg-[${BRAND_GREEN}]/15` },
  { icon: ShoppingCart,  title: "E-Commerce Development",   desc: "High-converting stores with seamless checkout, inventory management, and payment gateway integration.",                                           iconCls: `text-[${BRAND_ORANGE}] bg-[${BRAND_ORANGE}]/10 dark:bg-[${BRAND_ORANGE}]/15` },
  { icon: MessageSquare, title: "IT Consulting",            desc: "Strategic consulting that aligns your IT roadmap with business goals and drives real digital transformation.",                                     iconCls: `text-[${BRAND_BLUE}] bg-[${BRAND_BLUE}]/10 dark:bg-[${BRAND_BLUE}]/15` },
];

const PORTFOLIO = [
  { id: 1, name: "FinanceFlow Dashboard",  category: "Web Development",    tech: ["React", "Node.js", "PostgreSQL"],    desc: "Real-time financial analytics platform with AI-powered insights for enterprise clients.",                              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=420&fit=crop&auto=format" },
  { id: 2, name: "MediCare Mobile App",    category: "Mobile Apps",        tech: ["React Native", "Firebase", "ML Kit"], desc: "Patient management and telemedicine app serving 50,000+ users across Southeast Asia.",                               img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&h=420&fit=crop&auto=format" },
  { id: 3, name: "RetailEdge Platform",    category: "Software Solutions", tech: ["Python", "Django", "AWS"],            desc: "Omnichannel retail management system reducing operational costs by 40% for enterprise clients.",                         img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=420&fit=crop&auto=format" },
  { id: 4, name: "Artisan Marketplace",    category: "Web Development",    tech: ["Next.js", "Stripe", "Prisma"],        desc: "Premium e-commerce marketplace connecting 2,000+ artisans with global buyers across 30 countries.",                    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=640&h=420&fit=crop&auto=format" },
  { id: 5, name: "LogiTrack Enterprise",   category: "Software Solutions", tech: ["Java", "Spring Boot", "K8s"],         desc: "End-to-end logistics and supply chain visibility platform used by Fortune 500 companies.",                              img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&h=420&fit=crop&auto=format" },
  { id: 6, name: "Lumina Design System",   category: "UI/UX Design",       tech: ["Figma", "Storybook", "React"],        desc: "Comprehensive design system and component library adopted across 12 enterprise product suites.",                         img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&h=420&fit=crop&auto=format" },
];

const TESTIMONIALS = [
  { name: "Rajesh Krishnamurthy", role: "CTO",              company: "TechVentures India", review: "Vedaham delivered our cloud migration 3 weeks ahead of schedule. Their technical depth and proactive communication were outstanding — genuinely the best vendor relationship we've ever had.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format", rating: 5 },
  { name: "Sarah Mitchell",       role: "Product Director", company: "HealthBridge UK",    review: "The mobile app they built has a 4.8-star rating on both stores. The UI/UX work was exceptional — they understood our users better than we expected from a first engagement.",              avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=80&h=80&fit=crop&auto=format", rating: 5 },
  { name: "Ahmed Al-Rashid",      role: "Founder & CEO",    company: "RetailPro MENA",     review: "We needed a complex ERP integration in 6 months. Vedaham delivered on time and built it in a way our internal team can maintain. That kind of thoughtfulness is genuinely rare.",           avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format", rating: 5 },
  { name: "Priya Nambiar",        role: "VP Engineering",   company: "StartScale SG",      review: "Their agile process and transparent project tracking gave us complete confidence throughout. The final product exceeded the brief — and post-launch support has been superb.",               avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format", rating: 5 },
];

const PROCESS = [
  { step: "01", title: "Requirement Analysis",   desc: "Deep-dive discovery workshops to map business goals, user needs, technical constraints, and success metrics.",                                              icon: Target },
  { step: "02", title: "Planning & Architecture", desc: "System architecture, technology stack selection, sprint planning, and a clear project roadmap with milestones.",                                           icon: Layers },
  { step: "03", title: "UI/UX Design",            desc: "Wireframes, high-fidelity prototypes, and design systems built iteratively with your stakeholder feedback.",                                               icon: Palette },
  { step: "04", title: "Development",             desc: "Agile sprints with weekly demos, rigorous code reviews, CI/CD pipelines, and thorough documentation.",                                                    icon: Code2 },
  { step: "05", title: "QA & Testing",            desc: "Comprehensive automated and manual testing — unit, integration, performance, security, and full UAT.",                                                     icon: Shield },
  { step: "06", title: "Deployment",              desc: "Zero-downtime production deployments with monitoring, rollback plans, and infrastructure-as-code.",                                                        icon: Rocket },
  { step: "07", title: "Maintenance & Growth",    desc: "24/7 monitoring, proactive maintenance, performance optimization, and ongoing feature development.",                                                       icon: Settings },
];

const FAQS = [
  { q: "What is your typical project timeline?",       a: "Timelines vary by scope. A standard website takes 4–8 weeks; a mobile app 12–20 weeks; enterprise software 16–36 weeks. We provide detailed timelines during discovery and treat on-time delivery as a core metric — 97% of our projects ship on schedule." },
  { q: "How do you handle project communication?",     a: "Every project gets a dedicated project manager, a shared Slack workspace, weekly video calls, and access to our real-time project tracking dashboard. You always know exactly what's in progress, what's coming, and where any risks lie." },
  { q: "Do you offer post-launch support?",            a: "Yes — all projects include a 60-day warranty with bug fixes at no charge. Beyond that, we offer flexible retainer packages for ongoing support, feature development, and performance optimization." },
  { q: "What technologies do you specialize in?",      a: "Our core stack spans React, Next.js, React Native, Node.js, Python, Java, and Go on the application layer; PostgreSQL, MongoDB, and Redis for data; and AWS, Azure, and GCP for cloud. We choose the right tools for each project rather than forcing a single stack." },
  { q: "Can you integrate with our existing systems?", a: "Absolutely — integration is a core competency. We've connected with 100+ third-party platforms: ERP systems, CRMs, payment gateways, logistics APIs, and custom internal tools." },
  { q: "How do you price your services?",              a: "We offer fixed-price contracts for well-defined projects and time-and-materials for evolving scopes. We provide detailed, transparent quotes after discovery — no hidden costs or scope-creep surprises." },
];

const WHY_US = [
  { icon: Award,           title: "Expert Team",         desc: "100+ senior engineers, designers, and architects with deep domain expertise across industries worldwide." },
  { icon: Zap,             title: "On-Time Delivery",    desc: "97% of our projects ship on schedule. We plan meticulously and communicate proactively when anything shifts." },
  { icon: Layers,          title: "Scalable Solutions",  desc: "Architecture built for growth — systems designed to handle 10× traffic without a re-engineering effort." },
  { icon: HeadphonesIcon,  title: "24/7 Support",        desc: "Round-the-clock monitoring and support with clear SLAs that keep your business running without interruption." },
  { icon: DollarSign,      title: "Transparent Pricing", desc: "Detailed quotes, no surprise invoices, and flexible engagement models that fit any budget stage." },
  { icon: Shield,          title: "Latest Technologies", desc: "Always current with emerging tech — AI/ML, edge computing, real-time systems, and beyond." },
];

const STATS = [
  { value: "250+", label: "Projects Completed" },
  { value: "180+", label: "Happy Clients" },
  { value: "8+",   label: "Years of Experience" },
  { value: "120+", label: "Team Members" },
];

const FILTERS = ["All", "Web Development", "Mobile Apps", "Software Solutions", "UI/UX Design"];

// ─── Shared primitives ───────────────────────────────────────────────────────

function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_TEAL})` }}
    >
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
      style={{
        background: `${BRAND_BLUE}18`,
        color: BRAND_BLUE,
        borderColor: `${BRAND_BLUE}33`,
      }}
    >
      {children}
    </span>
  );
}

function SectionHead({ badge, title, sub, center = true }: { badge: string; title: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      <Badge>{badge}</Badge>
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {title}
      </h2>
      {sub && (
        <p className={`text-muted-foreground text-lg leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────

function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "About",     href: "#about" },
    { label: "Services",  href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process",   href: "#process" },
    { label: "Contact",   href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300  ${
        scrolled
          ? "backdrop-blur-2xl bg-background/80 border-b border-border shadow-lg shadow-black/5 dark:shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between" style={{ height: 72 }}>
        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0">
          <img
  src={dark ? darklogo : vedahamLogo}
  alt="Vedaham Technology"
  className="h-16 object-contain transition-all duration-300"
/>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all shadow-lg"
            style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_TEAL})`, boxShadow: `0 4px 18px ${BRAND_BLUE}40` }}
          >
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border backdrop-blur-2xl bg-background/95 px-6 py-5 space-y-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center py-2.5 rounded-xl text-white text-sm font-semibold"
              style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_TEAL})` }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
  id="hero"
  className="relative min-h-screen flex items-center overflow-hidden pt-10"
>
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Copy */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border"
            style={{ background: `${BRAND_BLUE}18`, color: BRAND_BLUE, borderColor: `${BRAND_BLUE}33` }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for new projects
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] tracking-tight mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Building Innovative<br />
            <GradientText>Digital Solutions</GradientText><br />
            for Your Business
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
            From web development and mobile apps to cloud solutions and IT consulting — we engineer software that transforms how your business operates and competes.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5 duration-200 shadow-xl"
              style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_TEAL})`, boxShadow: `0 8px 28px ${BRAND_BLUE}40` }}
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted transition-all hover:-translate-y-0.5 duration-200"
            >
              <Play className="w-4 h-4 fill-current" style={{ color: BRAND_BLUE }} /> View Our Work
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "Node.js", "Python", "AWS", "Flutter", "Figma"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-card text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="hidden lg:block relative">
          {/* Floating tech badges */}
          <div className="absolute -top-10 -left-6 z-10 px-3 py-2.5 rounded-2xl backdrop-blur-xl border border-border bg-card/80 shadow-xl flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "3s" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${BRAND_BLUE}22` }}>
              <Globe className="w-4 h-4" style={{ color: BRAND_BLUE }} />
            </div>
            <div><p className="text-xs font-semibold text-foreground">Web Dev</p><p className="text-[10px] text-muted-foreground">React · Next.js</p></div>
          </div>
          <div className="absolute top-8 -right-6 z-10 px-3 py-2.5 rounded-2xl backdrop-blur-xl border border-border bg-card/80 shadow-xl flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.4s" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${BRAND_TEAL}22` }}>
              <Cloud className="w-4 h-4" style={{ color: BRAND_TEAL }} />
            </div>
            <div><p className="text-xs font-semibold text-foreground">Cloud</p><p className="text-[10px] text-muted-foreground">AWS · GCP</p></div>
          </div>
          <div className="absolute -bottom-8 -left-6 z-10 px-3 py-2.5 rounded-2xl backdrop-blur-xl border border-border bg-card/80 shadow-xl flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.8s" }}>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div><p className="text-xs font-semibold text-foreground">98.7%</p><p className="text-[10px] text-muted-foreground">Client Satisfaction</p></div>
          </div>

          {/* Main card */}
          <div className="rounded-3xl border border-border bg-card shadow-2xl overflow-hidden" style={{ boxShadow: `0 20px 60px ${BRAND_BLUE}12` }}>
            {/* Window chrome */}
            <div className="px-5 py-3.5 border-b border-border flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="px-3 py-1 rounded-lg bg-muted border border-border text-xs text-muted-foreground text-center font-mono max-w-[180px] mx-auto">
                  vedaham.tech/dashboard
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_TEAL})` }} />
            </div>

            <div className="p-5 space-y-4">
              {/* KPI row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Total Revenue", "$2.4M",  "+18%", `text-[${BRAND_GREEN}]`],
                  ["Active Users",  "48,291",  "+12%", `text-[${BRAND_BLUE}]`],
                  ["Conversion",   "3.7%",    "+0.4%", `text-[${BRAND_TEAL}]`],
                ].map(([label, val, change, cls]) => (
                  <div key={label} className="p-3 rounded-xl bg-muted/50 border border-border">
                    <p className="text-[10px] text-muted-foreground mb-1 truncate">{label}</p>
                    <p className="text-base font-bold text-foreground">{val}</p>
                    <p className={`text-[10px] font-semibold ${cls}`}>{change}</p>
                  </div>
                ))}
              </div>

              {/* Sparkline chart */}
              <div className="rounded-xl border border-border p-4 bg-muted/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-foreground">Growth Trend</span>
                  <span className="text-[10px] text-muted-foreground">Last 6 months</span>
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[35, 58, 42, 75, 62, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{ height: `${h}%`, background: `linear-gradient(to top, ${BRAND_BLUE}, ${BRAND_TEAL})`, opacity: 0.55 + i * 0.08 }}
                    />
                  ))}
                </div>
              </div>

              {/* Project list */}
              <div className="space-y-1.5">
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider px-1">Active Projects</p>
                {[
                  ["FinanceFlow v2.0", "In Progress", `bg-[${BRAND_BLUE}]`],
                  ["MediCare App",     "Deployed",    "bg-green-500"],
                  ["RetailEdge ERP",   "QA Testing",  `bg-[${BRAND_ORANGE}]`],
                ].map(([name, status, dot]) => (
                  <div key={name} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/60 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                      <span className="text-xs font-medium text-foreground">{name}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats bar ───────────────────────────────────────────────────────────────

function StatsBar() {
  return (
    <section className="border-y border-border bg-muted/30 dark:bg-muted/10 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center px-4">
              <p
                className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent mb-1.5"
                style={{ backgroundImage: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_TEAL})`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHead
            badge="About Us"
            title={<>Built for <GradientText>Ambitious</GradientText> Businesses</>}
            sub="Since 2016, Vedaham Technology has helped 180+ businesses across 24 countries build products that matter — on time, within budget, and engineered to last."
            center={false}
          />
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Target, title: "Our Mission", desc: "Deliver technology that creates measurable business impact — on time, within budget, and built to scale." },
              { icon: Rocket, title: "Our Vision",  desc: "To be the most trusted technology partner for businesses navigating digital transformation globally." },
              { icon: Users,  title: "Our Culture", desc: "Engineering excellence meets genuine partnership. We care about your outcomes as much as the code." },
              { icon: Award,  title: "Our Standards", desc: "ISO 27001-aligned security, rigorous code review, and quality gates at every stage of delivery." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 rounded-2xl border border-border bg-card transition-all duration-200 group cursor-default hover:shadow-lg hover:-translate-y-0.5"
                style={{ "--tw-border-opacity": 1 } as React.CSSProperties}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${BRAND_BLUE}55`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ""; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors" style={{ background: `${BRAND_BLUE}18` }}>
                  <Icon className="w-5 h-5" style={{ color: BRAND_BLUE }} />
                </div>
                <h4 className="font-bold text-sm mb-1.5 text-foreground">{title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}18, ${BRAND_TEAL}18)` }} />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=720&h=520&fit=crop&auto=format"
              alt="Vedaham Technology team collaborating"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-bold text-foreground text-sm">Our Engineering Team</p>
              <p className="text-xs text-muted-foreground mt-1">120+ engineers across Chennai, Bangalore &amp; Singapore</p>
              <div className="flex items-center gap-1.5 mt-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=40&h=40&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&auto=format",
                ].map((src, i) => (
                  <img key={i} src={src} alt="Team member" className="w-7 h-7 rounded-full border-2 border-card object-cover bg-muted" style={{ marginLeft: i > 0 ? "-8px" : 0 }} />
                ))}
                <span className="ml-2 text-xs text-muted-foreground">+116 more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="py-10 bg-muted/20 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          badge="Services"
          title={<>What We <GradientText>Build</GradientText> for You</>}
          sub="End-to-end digital solutions across the full technology stack — from strategy and design to deployment and growth."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc, iconCls }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-border bg-card transition-all duration-300 cursor-default hover:-translate-y-1.5 hover:shadow-2xl"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${BRAND_BLUE}55`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ""; }}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${iconCls}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold mb-2 text-foreground transition-colors group-hover:text-[#3D8FD4]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: BRAND_BLUE }}>
                Learn more <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ───────────────────────────────────────────────────────────────

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          badge="Portfolio"
          title={<>Our <GradientText>Featured Work</GradientText></>}
          sub="Handpicked projects demonstrating technical depth, design quality, and measurable business impact."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={
                filter === f
                  ? { background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_TEAL})`, color: "#fff", boxShadow: `0 4px 18px ${BRAND_BLUE}35` }
                  : {}
              }
              {...(filter !== f ? { className: "px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border border-border text-muted-foreground hover:text-foreground bg-card" } : {})}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <div
              key={p.id}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${BRAND_BLUE}50`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ""; }}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur-sm text-white text-[10px] font-semibold border border-white/10">
                  {p.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm mb-2 text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-[10px] bg-muted text-muted-foreground border border-border" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-colors"
                    style={{ background: `${BRAND_BLUE}18`, color: BRAND_BLUE }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `${BRAND_BLUE}28`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `${BRAND_BLUE}18`; }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-border text-muted-foreground text-xs font-semibold transition-all hover:border-current"
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.color = BRAND_ORANGE; el.style.borderColor = `${BRAND_ORANGE}55`; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.color = ""; el.style.borderColor = ""; }}
                  >
                    <BarChart3 className="w-3.5 h-3.5" /> Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Us ──────────────────────────────────────────────────────────────────

function WhyUs() {
  return (
    <section id="why-us" className="py-10 bg-muted/20 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          badge="Why Vedaham"
          title={<>The <GradientText>Difference</GradientText> You'll Feel</>}
          sub="250+ projects have taught us what great technology partnership looks like. Here's what we've built into everything we do."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${BRAND_BLUE}50`;
                el.style.background = `linear-gradient(135deg, ${BRAND_BLUE}08, ${BRAND_TEAL}08)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "";
                el.style.background = "";
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all"
                style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}20, ${BRAND_TEAL}20)` }}
              >
                <Icon className="w-6 h-6" style={{ color: BRAND_BLUE }} />
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((c) => (c + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section id="testimonials" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          badge="Testimonials"
          title={<>Trusted by <GradientText>Industry Leaders</GradientText></>}
          sub="The measure of our work is what our clients say about it."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main quote */}
          <div className="relative p-8 md:p-12 rounded-3xl border border-border bg-card overflow-hidden mb-6">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_TEAL})` }} />
            <div className="absolute -top-4 right-8 text-9xl font-serif select-none leading-none pointer-events-none" style={{ color: `${BRAND_BLUE}14` }}>"</div>

            <div className="flex items-start gap-4 mb-6">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 bg-muted flex-shrink-0"
                style={{ borderColor: `${BRAND_BLUE}50` }}
              />
              <div>
                <p className="font-bold text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role} · {t.company}</p>
                <div className="flex gap-0.5 mt-1.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              "{t.review}"
            </blockquote>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <button onClick={() => setIdx((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={i === idx ? { width: 32, background: BRAND_BLUE } : { width: 8, background: "rgba(120,140,160,0.3)" }}
              />
            ))}
            <button onClick={() => setIdx((c) => (c + 1) % TESTIMONIALS.length)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Person thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TESTIMONIALS.map((tm, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="flex items-center gap-2.5 p-3 rounded-xl border transition-all text-left"
                style={i === idx ? { borderColor: `${BRAND_BLUE}60`, background: `${BRAND_BLUE}08` } : {}}
                onMouseEnter={(e) => { if (i !== idx) (e.currentTarget as HTMLElement).style.borderColor = `${BRAND_BLUE}30`; }}
                onMouseLeave={(e) => { if (i !== idx) (e.currentTarget as HTMLElement).style.borderColor = ""; }}
              >
                <img src={tm.avatar} alt={tm.name} className="w-8 h-8 rounded-full object-cover bg-muted flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold truncate text-foreground">{tm.name}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{tm.company}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section id="process" className="py-10 bg-muted/20 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          badge="Our Process"
          title={<>How We <GradientText>Deliver</GradientText></>}
          sub="A proven, transparent process that takes you from idea to production — with full visibility at every milestone."
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Center spine */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block -translate-x-px"
            style={{ background: `linear-gradient(to bottom, ${BRAND_BLUE}55, ${BRAND_TEAL}40, transparent)` }}
          />

          <div className="space-y-6">
            {PROCESS.map(({ step, title, desc, icon: Icon }, i) => (
              <div key={step} className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <div
                    className="inline-block p-6 rounded-2xl border border-border bg-card transition-all duration-200 text-left w-full md:max-w-sm hover:shadow-lg hover:-translate-y-0.5"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${BRAND_BLUE}50`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ""; }}
                  >
                    <span className="text-xs font-mono font-bold" style={{ color: BRAND_BLUE }}>{step}</span>
                    <h3 className="text-base font-bold mt-1 mb-2 text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>

                {/* Center icon node */}
                <div
                  className="hidden md:flex w-14 h-14 rounded-2xl items-center justify-center shadow-xl flex-shrink-0 z-10 relative"
                  style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_TEAL})`, boxShadow: `0 8px 24px ${BRAND_BLUE}40` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          badge="Contact Us"
          title={<>Start Your <GradientText>Project</GradientText> Today</>}
          sub="Tell us about your project. We'll respond within 24 hours with a tailored plan."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border border-green-500/30 bg-green-500/5">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Inquiry Sent!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thank you! We'll get back to you within 24 hours. Check your inbox for a confirmation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4 p-8 rounded-2xl border border-border bg-card"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name",      placeholder: "John Smith",        type: "text",  required: true },
                    { label: "Email Address",  placeholder: "john@company.com",  type: "email", required: true },
                  ].map(({ label, placeholder, type, required }) => (
                    <div key={label}>
                      <label className="block text-sm font-semibold mb-1.5 text-foreground">{label} {required && <span style={{ color: BRAND_BLUE }}>*</span>}</label>
                      <input
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all text-sm"
                        style={{ ["--tw-ring-color" as string]: BRAND_BLUE }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = `${BRAND_BLUE}80`; e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND_BLUE}25`; }}
                        onBlur={(e)  => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.boxShadow = ""; }}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Phone Number",  placeholder: "+91 98765 43210",  type: "tel" },
                    { label: "Company Name",  placeholder: "Acme Corporation", type: "text" },
                  ].map(({ label, placeholder, type }) => (
                    <div key={label}>
                      <label className="block text-sm font-semibold mb-1.5 text-foreground">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all text-sm"
                        onFocus={(e) => { e.currentTarget.style.borderColor = `${BRAND_BLUE}80`; e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND_BLUE}25`; }}
                        onBlur={(e)  => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.boxShadow = ""; }}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-foreground">Service Required</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-foreground focus:outline-none transition-all text-sm appearance-none"
                      onFocus={(e) => { e.currentTarget.style.borderColor = `${BRAND_BLUE}80`; e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND_BLUE}25`; }}
                      onBlur={(e)  => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.boxShadow = ""; }}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-foreground">Project Budget</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-foreground focus:outline-none transition-all text-sm appearance-none"
                      onFocus={(e) => { e.currentTarget.style.borderColor = `${BRAND_BLUE}80`; e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND_BLUE}25`; }}
                      onBlur={(e)  => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.boxShadow = ""; }}
                    >
                      <option>Under $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $50,000</option>
                      <option>$50,000 – $150,000</option>
                      <option>$150,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-foreground">Message <span style={{ color: BRAND_BLUE }}>*</span></label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline…"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all text-sm resize-none"
                    onFocus={(e) => { e.currentTarget.style.borderColor = `${BRAND_BLUE}80`; e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND_BLUE}25`; }}
                    onBlur={(e)  => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.boxShadow = ""; }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5 duration-200 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_TEAL})`, boxShadow: `0 6px 20px ${BRAND_BLUE}35` }}
                >
                  Send Inquiry →
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail,  label: "Email",         value: CONTACT_EMAIL,                    sub: "We respond within 24 hours" },
              { icon: Phone, label: "Phone",         value: CONTACT_PHONE,                    sub: "Mon–Fri, 9 AM – 7 PM IST" },
              { icon: MapPin,label: "Office",        value: CONTACT_ADDRESS,                  sub: "Indore, Madhya Pradesh" },
              { icon: Clock, label: "Working Hours", value: "Mon–Fri: 9 AM – 7 PM IST",       sub: "Sat: 10 AM – 2 PM IST" },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="flex gap-4 p-5 rounded-2xl border border-border bg-card transition-all"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${BRAND_BLUE}50`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ""; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${BRAND_BLUE}18` }}>
                  <Icon className="w-5 h-5" style={{ color: BRAND_BLUE }} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{label}</p>
                  <p className="font-semibold text-sm text-foreground mt-0.5">{value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="relative rounded-2xl border border-border overflow-hidden h-44 bg-muted">
              <div
                className="absolute inset-0 opacity-30 dark:opacity-20"
                style={{ backgroundImage: `linear-gradient(${BRAND_BLUE}40 1px, transparent 1px), linear-gradient(90deg, ${BRAND_BLUE}40 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-2.5 shadow-lg border-2"
                  style={{ background: `${BRAND_BLUE}30`, borderColor: `${BRAND_BLUE}60`, boxShadow: `0 4px 16px ${BRAND_BLUE}30` }}
                >
                  <MapPin className="w-5 h-5" style={{ color: BRAND_BLUE }} />
                </div>
                <p className="text-sm font-semibold text-foreground">{CONTACT_ADDRESS}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Indore, Madhya Pradesh</p>
                <a href={CONTACT_MAP_URL} target="_blank" rel="noreferrer" className="mt-3 text-xs font-semibold hover:underline" style={{ color: BRAND_BLUE }}>
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 bg-muted/20 dark:bg-muted/10">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHead
          badge="FAQ"
          title={<>Common <GradientText>Questions</GradientText></>}
          sub="Answers to what our prospective clients ask most. Don't see yours? Just reach out."
        />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border transition-all duration-200"
              style={open === i ? { borderColor: `${BRAND_BLUE}50`, background: `${BRAND_BLUE}08` } : {}}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {f.q}
                </span>
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                  style={open === i ? { background: `${BRAND_BLUE}28`, color: BRAND_BLUE } : {}}
                >
                  {open === i
                    ? <ChevronUp className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                    : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </div>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, #1fa8a8, ${BRAND_TEAL})` }} />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "52px 52px" }}
          />
          <div className="relative">
            <p className="text-teal-100 text-sm font-semibold tracking-widest uppercase mb-4">Ready to Transform?</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Ready to Start Your<br />Next Project?
            </h2>
            <p className="text-teal-50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join 180+ businesses that have trusted Vedaham to build their most important technology — from startup MVPs to enterprise platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl font-bold hover:opacity-90 transition-colors shadow-xl text-sm"
                style={{ background: "#FFFFFF", color: BRAND_BLUE }}
              >
                Schedule a Consultation
              </a>
              <a
                href="#portfolio"
                className="px-8 py-3.5 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-colors text-sm"
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 dark:bg-muted/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src={vedahamLogo} alt="Vedaham Technology" className="h-10 object-contain" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Transforming Ideas Into Digital Excellence. Full-service software development and digital transformation partner for ambitious businesses worldwide.
            </p>
            <div className="flex gap-2">
              {[Linkedin, Twitter, Github, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground transition-all"
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = BRAND_BLUE; el.style.borderColor = `${BRAND_BLUE}50`; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = ""; el.style.borderColor = ""; }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About Us", "Our Team", "Careers", "Blog", "Press Kit"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}><a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND_BLUE }} />{CONTACT_EMAIL}
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND_BLUE }} />{CONTACT_PHONE}
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND_BLUE }} />
                <span>{CONTACT_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2024 Vedaham Technology Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App root ────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.body.style.fontFamily = "'Inter', 'Plus Jakarta Sans', sans-serif";
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased" style={{ overscrollBehavior: "none" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${BRAND_BLUE}55; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${BRAND_BLUE}88; }
        * { box-sizing: border-box; }
      `}</style>
      <Navbar dark={dark} setDark={setDark} />
      <div className="px-6 py-4">

      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Process />
      <Contact />
      <FAQ />
      <CTA />
      </div>
      <Footer />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full px-3 py-3 text-white shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02]"
        style={{ background: "#25D366", boxShadow: "0 16px 35px rgba(37, 211, 102, 0.35)" }}
      >
        <FaWhatsapp className="h-6 w-6" />
        {/* <span className="hidden sm:inline text-sm font-semibold"></span> */}
      </a>
    </div>
  );
}
