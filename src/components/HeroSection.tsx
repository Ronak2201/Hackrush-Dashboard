import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Award, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Globe,
  Layers,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { HACKATHON_META } from '../data/hackathonData';

interface HeroSectionProps {
  onOpenSourceImages: () => void;
  onOpenRegisterModal: () => void;
  onExploreTracks: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenSourceImages,
  onOpenRegisterModal,
  onExploreTracks
}) => {
  // Countdown to 16 Nov 2026 23:59:59 IST
  const targetDate = new Date('2026-11-16T23:59:59+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Background Cyber Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-violet-600/15 to-pink-500/10 blur-[120px] pointer-events-none -z-10" />

      {/* Discrepancy Notification Banner */}
      <div className="mb-6 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/30 dark:border-amber-800/50 p-4 transition-all">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  Specification Discrepancy Flagged
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="text-xs text-amber-800/80 dark:text-amber-300/80 font-medium hidden sm:inline">
                  Awaiting Organizer Confirmation
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5">
                The written brief states <strong className="text-amber-700 dark:text-amber-300">3–5 members</strong>, whereas the official banner poster states <strong className="text-amber-700 dark:text-amber-300">3–6 members</strong>. Both sizes are being monitored on the portal.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenSourceImages}
            className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-800 dark:text-amber-200 transition-colors flex items-center gap-1.5"
          >
            <span>Inspect Poster</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading, Meta, Countdown & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Institutional Trust Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 dark:bg-blue-950/50 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              {HACKATHON_META.name} · {HACKATHON_META.edition}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              {HACKATHON_META.format}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-500/10 dark:bg-violet-950/50 border border-violet-500/20 text-violet-600 dark:text-violet-400 font-medium">
              Tech4Hack, IGDTUW
            </span>
          </div>

          {/* Main Display Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.08] text-slate-900 dark:text-white">
              Ideas into{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 dark:from-blue-400 dark:via-indigo-300 dark:to-pink-400 bg-clip-text text-transparent">
                Impact.
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 tracking-tight">
              {HACKATHON_META.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              The flagship technical hackathon by <strong>Tech4Hack, Indira Gandhi Delhi Technical University for Women</strong> in partnership with <strong>Unstop</strong>. Five cutting-edge innovation tracks, high-impact mentorship, and offline awards.
            </p>
          </div>

          {/* Factual Core Specs Row (Zero invented numbers) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>Event Duration</span>
              </div>
              <p className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                {HACKATHON_META.duration}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                <Users className="w-4 h-4 text-violet-500" />
                <span>Team Composition</span>
              </div>
              <p className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                3 to 5 / 6 Members
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Prize Pool</span>
              </div>
              <p className="font-heading font-bold text-sm sm:text-base text-amber-600 dark:text-amber-400">
                {HACKATHON_META.prizePool}
              </p>
            </div>
          </div>

          {/* Submission Deadline Live Countdown Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-violet-900/20 dark:from-blue-950/60 dark:via-indigo-950/60 dark:to-violet-950/60 border border-blue-500/20 dark:border-blue-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  Idea / PPT Submission Closes In
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                Deadline: 16 Nov 2026, 11:59 PM
              </span>
            </div>

            {/* Tabular Countdown digits */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { label: 'Days', val: timeLeft.days },
                { label: 'Hours', val: timeLeft.hours },
                { label: 'Minutes', val: timeLeft.minutes },
                { label: 'Seconds', val: timeLeft.seconds },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-2 sm:p-3 rounded-xl bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
                    {String(item.val).padStart(2, '0')}
                  </span>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenRegisterModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 active:scale-[0.98] transition-all flex items-center gap-2 group"
            >
              <span>Submit Idea via Unstop</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreTracks}
              className="px-5 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800/80 flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Explore 5 Tracks</span>
            </button>
          </div>
        </div>

        {/* Right Column: Futuristic 3D Funnel Representation */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 border border-slate-800 text-white shadow-2xl overflow-hidden">
            {/* Ambient cyber grid behind */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
            
            {/* Top brand header inside card */}
            <div className="relative flex items-center justify-between pb-6 border-b border-slate-800/80">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400">
                  Competition Funnel Architecture
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white mt-0.5">
                  The Path to Victory
                </h3>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-500/30 text-[11px] font-mono text-blue-300">
                Official Pipeline
              </div>
            </div>

            {/* Interactive 3D Step Staircase (Mirrors the official poster graphic) */}
            <div className="relative py-8 flex flex-col items-center">
              {/* SVG 3D Isometric Steps Graphic */}
              <div className="w-full max-w-sm space-y-3">
                {/* Step 4: WIN */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-900/30 border border-amber-500/40 transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-heading font-extrabold text-base shadow-lg shadow-amber-500/40">
                      🏆
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold">
                        Stage 04 · Finale
                      </span>
                      <p className="font-heading font-bold text-white text-base">
                        WIN & Podium Ceremony
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-amber-300">
                      Top 3 + Awards
                    </span>
                    <p className="text-[10px] text-slate-400">Offline IGDTUW</p>
                  </div>
                </div>

                {/* Step 3: 30 Teams */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-slate-900 border border-blue-500/30 transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-base shadow-lg shadow-blue-600/40">
                      30
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-blue-400 font-bold">
                        Stage 03 · Shortlist
                      </span>
                      <p className="font-heading font-bold text-white text-base">
                        Online Finale Round
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-blue-300">
                      Top 30 Teams
                    </span>
                    <p className="text-[10px] text-slate-400">Sunday, 22 Nov</p>
                  </div>
                </div>

                {/* Step 2: 80 Teams */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-pink-600/20 via-rose-600/10 to-slate-900 border border-pink-500/30 transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-600 flex items-center justify-center text-white font-mono font-bold text-base shadow-lg shadow-pink-600/40">
                      80
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-pink-400 font-bold">
                        Stage 02 · Screening
                      </span>
                      <p className="font-heading font-bold text-white text-base">
                        Mentorship Phase
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-pink-300">
                      Top 80 Teams
                    </span>
                    <p className="text-[10px] text-slate-400">19–20 Nov</p>
                  </div>
                </div>

                {/* Step 1: REGISTER */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/80 transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-slate-200 font-mono font-bold text-xs">
                      PPT
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                        Stage 01 · Open
                      </span>
                      <p className="font-heading font-bold text-white text-base">
                        REGISTER & Submit
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      Active Now
                    </span>
                    <p className="text-[10px] text-slate-400">Deadline 16 Nov</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Poster reference preview snippet */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Verified from official Unstop banner
              </span>
              <button 
                onClick={onOpenSourceImages}
                className="text-blue-400 hover:text-blue-300 font-medium underline flex items-center gap-1"
              >
                <span>View Raw Poster</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
