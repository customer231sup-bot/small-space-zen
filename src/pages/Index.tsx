import { useState, useEffect } from "react";
import { Check, X, ArrowDown, Star } from "lucide-react";
import heroImg from "@/assets/hero-apartment.jpg";
import transformImg from "@/assets/transformation.jpg";


const HeroSection = () => (
  <section className="relative min-h-screen flex items-center">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Organized, optimized small apartment" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
    </div>
    <div className="relative max-w-3xl mx-auto px-6 py-24 lg:ml-[10%]">
      <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-6">Small Apartment Transformation System</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-[1.15] text-foreground mb-6">
        Transform Your Small Apartment Into an Organized, High-Functioning Home
      </h1>
      <p className="text-lg font-body font-light text-muted-foreground leading-relaxed mb-8 max-w-xl">
        A complete transformation system that helps you optimize every square foot, eliminate clutter for good, and design a small apartment that actually works for the way you live.
      </p>
      <ul className="space-y-3 mb-10 font-body text-foreground/80">
        {[
          "Unlock more usable space — without moving",
          "Organize every room with a proven framework",
          "Reduce daily stress caused by clutter",
          "Build routines that keep your home in order long-term",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="w-3 h-3 text-primary" />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <a href="#pricing" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
        Get the Transformation System
      </a>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 lg:py-32 bg-card">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-8">
        Why Small Apartments Stop Working
      </h2>
      <p className="text-lg font-body font-light text-muted-foreground leading-relaxed mb-10">
        Most small apartments don't feel small because of their size — they feel small because nothing has a system. Without a clear framework, things pile up, storage becomes chaotic, and every room starts working against you instead of for you.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-10">
        {[
          "Too many items, no real place to put them",
          "No system, just constant re-organizing",
          "Tight closets and underused storage",
          "Daily stress from visual clutter",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 text-muted-foreground font-body">
            <X className="w-4 h-4 mt-1 text-destructive/60 flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p className="text-lg font-display italic text-foreground/70">
        This system was built to solve exactly these problems.
      </p>
    </div>
  </section>
);

const WhatYouLearnSection = () => (
  <section className="py-24 lg:py-32">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-6">
        A Proven System for Optimizing Small Apartments
      </h2>
      <p className="text-muted-foreground font-body leading-relaxed mb-8">
        Inside the Small Apartment Transformation System, you get a complete framework that takes you from cluttered and frustrated to organized, functional, and in full control of your home — room by room, step by step.
      </p>
      <ul className="space-y-4 mb-8">
        {[
          "Room-by-room action plans for every space",
          "A framework to optimize closets and storage",
          "Daily organization routines that actually stick",
          "A decluttering process built for small spaces",
          "Smart storage strategies for tight square footage",
          "A long-term system to keep your home in order",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3 font-body text-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <div className="border-l-2 border-primary/30 pl-5">
        <p className="font-display text-lg italic text-foreground/70">
          This isn't theory.<br />
          It's a complete, step-by-step transformation system designed specifically for small urban apartments.
        </p>
      </div>
    </div>
  </section>
);

const TransformationSection = () => (
  <section className="py-24 lg:py-32 bg-card">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-display font-light text-foreground text-center mb-16">
        Imagine Your Apartment Like This
      </h2>
      <div className="mb-12">
        <img src={transformImg} alt="Before and after apartment transformation" className="w-full rounded-sm" />
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-display text-xl text-destructive/70 mb-5">Before</h3>
          <ul className="space-y-3">
            {["Clutter in every room", "Hard to find what you need", "Storage that's always full", "A home that feels stressful"].map((i) => (
              <li key={i} className="flex items-center gap-3 font-body text-muted-foreground">
                <X className="w-4 h-4 text-destructive/50" /> {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl text-primary mb-5">After</h3>
          <ul className="space-y-3">
            {["Clean, organized spaces", "Everything has a defined place", "Rooms that work for your routine", "A calm, functional home"].map((i) => (
              <li key={i} className="flex items-center gap-3 font-body text-foreground/80">
                <Check className="w-4 h-4 text-primary" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const roadmapSteps = [
  {
    title: "Declutter Your Home",
    desc: "Use a clear, low-stress framework to release what no longer serves your space — without hours of decision fatigue.",
  },
  {
    title: "Create Functional Zones",
    desc: "Redesign each room around how you actually live, so every area has a clear purpose and natural flow.",
  },
  {
    title: "Optimize Every Inch",
    desc: "Apply space-maximizing strategies and smart storage solutions that turn small square footage into usable, organized space.",
  },
  {
    title: "Maintain the System",
    desc: "Lock in your transformation with simple daily and weekly routines that keep clutter from creeping back.",
  },
  {
    title: "Build Better Organization Habits",
    desc: "Develop the long-term mindset and habits that keep your apartment running smoothly — month after month.",
  },
];

const ContentSection = () => (
  <section className="py-24 lg:py-32">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-4">The Transformation Roadmap</p>
      <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-6">
        Your Apartment Transformation Roadmap
      </h2>
      <p className="text-muted-foreground font-body mb-16 max-w-xl mx-auto">
        A proven 5-step path that takes your apartment from cluttered and chaotic to organized, optimized, and stress-free.
      </p>

      <div className="space-y-4 text-left">
        {roadmapSteps.map((step, idx) => (
          <div key={step.title}>
            <div className="bg-card border border-border rounded-sm p-6 md:p-8 flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-xl">
                {idx + 1}
              </div>
              <div className="flex-1">
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">Step {idx + 1}</p>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
            {idx < roadmapSteps.length - 1 && (
              <div className="flex justify-center py-3">
                <ArrowDown className="w-5 h-5 text-primary/40" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Trust & Info Banner */}
      <div className="mt-16 max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-sm p-8 text-center space-y-4">
          <p className="font-body text-sm text-foreground/70 flex items-center justify-center gap-2">
            🔒 <span className="font-medium">Secure Checkout</span>
          </p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            Your purchase is processed through <strong>Hotmart</strong> — one of the world's largest digital product platforms. Every transaction is 100% managed and protected by Hotmart, with instant access delivered to your inbox after checkout.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const standardComponents = [
  "Core Decluttering Framework",
  "Essential Room-by-Room Action Steps",
  "Foundational Storage Strategies",
  "Daily Organization Routine (Starter Version)",
  "Closet & Drawer Optimization Basics",
  "Quick-Start Space Optimization Methods",
  "Entryway & Living Room Setup",
  "Kitchen & Bathroom Organization Essentials",
];

const premiumComponents = [
  "Room-by-Room Action Plans",
  "Declutter Framework",
  "Daily Organization Routine",
  "Space Optimization System",
  "Visual Layout Strategies",
  "Furniture Selection Framework",
  "Smart Storage Solutions",
  "Home Maintenance Checklist",
];

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const SEVEN_HOURS = 7 * 60 * 60;
    const stored = sessionStorage.getItem("countdown_start");
    if (stored) {
      const elapsed = Math.floor((Date.now() - parseInt(stored)) / 1000);
      return Math.max(0, SEVEN_HOURS - elapsed);
    }
    sessionStorage.setItem("countdown_start", Date.now().toString());
    return SEVEN_HOURS;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, [timeLeft > 0]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="mt-10 bg-destructive/90 rounded-sm p-6 text-center max-w-2xl mx-auto animate-pulse-subtle">
      <p className="font-display text-xl md:text-2xl text-white font-semibold mb-2">
        🔥 Launch Pricing — Save Up to 80%
      </p>
      <p className="font-body text-white/90 text-sm mb-4">
        This launch offer expires soon. Lock in your transformation system before the price goes back up.
      </p>
      <div className="flex items-center justify-center gap-3">
        {[
          { value: pad(hours), label: "Hours" },
          { value: pad(minutes), label: "Min" },
          { value: pad(seconds), label: "Sec" },
        ].map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur rounded px-4 py-2 min-w-[60px]">
              <span className="font-display text-3xl text-white font-bold">{unit.value}</span>
              <p className="text-[10px] text-white/70 uppercase tracking-wider">{unit.label}</p>
            </div>
            {i < 2 && <span className="text-white text-2xl font-bold">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const PricingSection = () => (
  <section id="pricing" className="py-24 lg:py-32 bg-card">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-display font-light text-foreground text-center mb-4">
        Choose Your Transformation System
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16">
        Two options. Same proven framework. Pick the one that fits where you are right now.
      </p>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Standard */}
        <div className="bg-background rounded-sm p-8 border border-border">
          <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">Starter</p>
          <h3 className="font-display text-2xl text-foreground mb-2">Small Apartment Starter System</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-display text-lg text-muted-foreground line-through">$69</span>
            <span className="font-display text-4xl text-foreground">$10</span>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
            A streamlined version of the Small Apartment Transformation System — built for people who want a clear, practical starting point to organize their apartment using the core strategies.
          </p>
          <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-wider mb-3">
            What's Included
          </p>
          <ul className="space-y-3 mb-8">
            {standardComponents.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2 mb-8 text-xs font-body text-muted-foreground">
            <li>• Beginner friendly</li>
            <li>• Core organization principles</li>
            <li>• Quick to implement</li>
          </ul>
          <a
            href="https://pay.hotmart.com/I104801317H?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 border border-foreground/20 text-foreground font-body text-sm uppercase tracking-wider rounded-sm hover:bg-foreground/5 transition-colors text-center"
          >
            Get the Starter System
          </a>
        </div>

        {/* Premium */}
        <div className="bg-background rounded-sm p-8 border-2 border-primary relative">
          <div className="absolute -top-3 left-8 bg-primary text-primary-foreground px-4 py-1 text-xs font-body uppercase tracking-wider rounded-sm">
            Most Popular
          </div>
          <p className="font-body text-xs uppercase tracking-wider text-primary mb-2">Complete System</p>
          <h3 className="font-display text-2xl text-foreground mb-2">Small Apartment Transformation System</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-display text-lg text-muted-foreground line-through">$99</span>
            <span className="font-display text-4xl text-foreground">$19</span>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
            The complete transformation system for people who want to fully optimize their small apartment, maximize every room, and build long-term organization habits that actually last.
          </p>
          <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-wider mb-3">
            Components Included
          </p>
          <ul className="space-y-3 mb-6">
            {premiumComponents.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mb-8 p-4 bg-accent/50 rounded-sm">
            <p className="font-body text-xs font-medium text-accent-foreground">
              🎁 BONUS: Essential Items Checklist for Optimizing a Small Apartment
            </p>
          </div>
          <a
            href="https://pay.hotmart.com/M104805078P?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity text-center"
          >
            Get the Complete System
          </a>
        </div>
      </div>

      {/* Countdown Timer */}
      <CountdownBanner />
    </div>
  </section>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: "SM",
      name: "Sarah Mitchell",
      location: "Chicago, IL",
      role: "Studio Apartment",
      quote: "I was skeptical at first, but this system completely changed how I use my 450 sq ft studio. I finally have defined zones for sleeping, working, and relaxing. My friends keep asking if I moved to a bigger place.",
    },
    {
      initials: "JK",
      name: "James & Lila Kowalski",
      location: "Brooklyn, NY",
      role: "One-Bedroom Family",
      quote: "With a baby on the way, our one-bedroom felt impossible. This gave us a clear plan to create a nursery zone, maximize closet space, and keep our living room functional. Best investment we made before the baby arrived.",
    },
    {
      initials: "MT",
      name: "Marcus Thompson",
      location: "Austin, TX",
      role: "Rented Apartment",
      quote: "As a renter, I couldn't renovate or drill into walls. The system taught me landlord-friendly solutions that made my apartment feel twice as big. I was ready to move; now I actually love my place.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
          Real Results
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-light text-foreground text-center mb-6">
          What Customers Are Saying
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Join hundreds of people who have transformed their small apartments using this system.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-sm p-6 md:p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display text-sm text-primary font-medium">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.role} • {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-24 lg:py-32">
    <div className="max-w-2xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-6">
        Start Your Small Apartment Transformation Today
      </h2>
      <p className="text-lg font-body font-light text-muted-foreground leading-relaxed mb-4">
        You don't need a bigger apartment.
      </p>
      <p className="text-lg font-body font-light text-muted-foreground leading-relaxed mb-4">
        You need a better system.
      </p>
      <p className="text-muted-foreground font-body mb-10">
        The Small Apartment Transformation System gives you a clear framework to create more space, build calm, and finally make your apartment work for the way you live.
      </p>
      <a href="#pricing" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
        Choose Your System
      </a>
    </div>
  </section>
);

const FAQSection = () => {
  const faqs = [
    {
      q: "Is this a physical product or a digital system?",
      a: "The Small Apartment Transformation System is a fully digital product. After checkout, you receive instant access through Hotmart's secure delivery platform, so you can start transforming your apartment within minutes.",
    },
    {
      q: "How do I access the system after purchase?",
      a: "Once your payment is confirmed, Hotmart sends a secure email with your access link and instructions. You can view the system on any device — phone, tablet, or computer.",
    },
    {
      q: "Will this work for my specific apartment size?",
      a: "Yes. The framework is designed for small apartments including studios, one-bedrooms, and compact two-bedrooms. The strategies adapt to your layout, storage, and daily routine.",
    },
    {
      q: "Do I need to buy new furniture or organizers?",
      a: "No. The system focuses on optimizing what you already have. While it includes smart storage recommendations, the core transformation comes from better layout, zoning, and habits — not spending more money.",
    },
    {
      q: "What if I am not satisfied with the purchase?",
      a: "Your purchase is protected by Hotmart's buyer guarantee. If the system does not meet your expectations, you can request a refund through the platform according to their terms.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
          Got Questions?
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-light text-foreground text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Everything you need to know before starting your apartment transformation.
        </p>
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-background border border-border rounded-sm p-6">
              <h3 className="font-display text-lg text-foreground mb-2">{faq.q}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <WhatYouLearnSection />
      <TransformationSection />
      <ContentSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTA />
      <FAQSection />
      <footer className="py-8 border-t border-border text-center space-y-2">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Small Apartment Transformation System. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Support: <a href="mailto:customer231.sup@gmail.com" className="text-primary hover:underline">customer231.sup@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
