import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  CalendarCheck2,
  Bell,
  Users,
  Shield,
  Star,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function TaskFlowLanding() {
  return (
    <div className="container min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 antialiased selection:bg-indigo-500/20 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <WorkflowIcon className="h-7 w-7" />
            <span className="font-semibold tracking-tight text-lg">TaskFlow</span>
          </a>
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white/90 text-white/70">Features</a>
            <a href="#reviews" className="hover:text-white/90 text-white/70">Reviews</a>
            <a href="#pricing" className="hover:text-white/90 text-white/70">Pricing</a>
            <a href="#contact" className="hover:text-white/90 text-white/70">Contact</a>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-2xl px-4 py-2 font-medium bg-indigo-500 hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/30"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden" aria-labelledby="hero-title">
          <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-[50rem] rounded-full bg-indigo-500/20 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl/tight md:text-6xl/tight font-extrabold tracking-tight"
            >
              Organize more. <span className="text-indigo-400">Stress less.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-4 md:mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto"
            >
              TaskFlow is a simple, powerful app to capture tasks, plan your day, and ship work on time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold bg-indigo-500 hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/30"
              >
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                Start Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold ring-1 ring-white/20 hover:ring-white/40"
              >
                See Features
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" aria-labelledby="features-title" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="text-center">
              <h2 id="features-title" className="text-2xl md:text-4xl font-bold">
                Everything you need to stay on track
              </h2>
              <p className="mt-3 text-white/70 max-w-2xl mx-auto">
                Three focused features that keep your tasks organized and your team aligned.
              </p>
            </header>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<CalendarCheck2 className="h-6 w-6" aria-hidden="true" />}
                title="Smart Scheduling"
                text="Plan your day with drag-and-drop calendars and auto-prioritized to-dos."
              />
              <FeatureCard
                icon={<Bell className="h-6 w-6" aria-hidden="true" />}
                title="Timely Reminders"
                text="Never miss a deadline with flexible reminders that adapt to your routine."
              />
              <FeatureCard
                icon={<Users className="h-6 w-6" aria-hidden="true" />}
                title="Team Collaboration"
                text="Share lists, assign tasks, and track progress in real-time with your team."
              />
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" aria-labelledby="reviews-title" className="py-16 md:py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="text-center">
              <h2 id="reviews-title" className="text-2xl md:text-4xl font-bold">Loved by makers and teams</h2>
              <p className="mt-3 text-white/70">Here’s what users say about TaskFlow.</p>
            </header>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Testimonial quote="TaskFlow cut my context switching in half. It’s the only list I actually stick to." name="Aylin R." role="Product Designer" />
              <Testimonial quote="We coordinate sprints and personal tasks in one place now. Huge clarity boost." name="Marco D." role="Engineering Manager" />
              <Testimonial quote="Clean, fast, and the reminders are perfect. I shipped my course a month early." name="Sara K." role="Creator" />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" aria-labelledby="pricing-title" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="text-center">
              <h2 id="pricing-title" className="text-2xl md:text-4xl font-bold">Simple pricing</h2>
              <p className="mt-3 text-white/70">Start free. Upgrade when you grow.</p>
            </header>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <PricingCard name="Free" price="$0" period="/month" features={["Unlimited personal tasks","Basic reminders","1 shared list"]} />
              <PricingCard name="Pro" price="$9" period="/month" highlight badge="Most Popular" features={["Everything in Free","Calendar & timeline views","Advanced reminders","Unlimited shared lists"]} />
              <PricingCard name="Team" price="$19" period="/user/month" features={["Team workspaces","Role-based permissions","Priority support"]} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-2">
              <WorkflowIcon className="h-7 w-7" />
              <span className="font-semibold">TaskFlow</span>
            </div>
            <address className="text-white/70 text-sm not-italic">
              <p>
                Contact: <a className="underline hover:text-white" href="mailto:hello@taskflow.app">hello@taskflow.app</a>
              </p>
              <p className="mt-1">© {new Date().getFullYear()} TaskFlow Inc. All rights reserved.</p>
            </address>
            <div className="flex items-center md:justify-end gap-3">
              <SocialIcon href="#" label="Email"><Mail className="h-5 w-5" /></SocialIcon>
              <SocialIcon href="#" label="Twitter"><Twitter className="h-5 w-5" /></SocialIcon>
              <SocialIcon href="#" label="Instagram"><Instagram className="h-5 w-5" /></SocialIcon>
              <SocialIcon href="#" label="Facebook"><Facebook className="h-5 w-5" /></SocialIcon>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
