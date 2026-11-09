import React from 'react';
import { 
  Calendar, 
  Layers, 
  Globe2, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { HACKATHON_META } from '../data/hackathonData';

interface OverviewCardsProps {
  onScrollToSection: (sectionId: string) => void;
}

export const OverviewCards: React.FC<OverviewCardsProps> = ({ onScrollToSection }) => {
  const cards = [
    {
      id: 'dates',
      title: 'Event Dates',
      primaryValue: '9–25 Nov 2026',
      subtext: '17 Days Duration',
      badge: 'Active Window',
      icon: Calendar,
      gradient: 'from-blue-600/10 via-indigo-600/5 to-transparent',
      borderColor: 'group-hover:border-blue-500/50',
      iconColor: 'text-blue-500',
      actionLabel: 'View Schedule',
      target: 'timeline'
    },
    {
      id: 'tracks',
      title: 'Challenge Tracks',
      primaryValue: '5 Distinct Themes',
      subtext: 'AI, Web3, Health, Cyber, Cities',
      badge: 'Multi-disciplinary',
      icon: Layers,
      gradient: 'from-violet-600/10 via-purple-600/5 to-transparent',
      borderColor: 'group-hover:border-violet-500/50',
      iconColor: 'text-violet-500',
      actionLabel: 'Explore Tracks',
      target: 'tracks'
    },
    {
      id: 'format',
      title: 'Event Format',
      primaryValue: 'Online Hackathon',
      subtext: 'With Offline IGDTUW Finale Ceremony',
      badge: 'Hybrid Recognition',
      icon: Globe2,
      gradient: 'from-emerald-600/10 via-teal-600/5 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
      iconColor: 'text-emerald-500',
      actionLabel: 'Venue Info',
      target: 'timeline'
    },
    {
      id: 'prize',
      title: 'Prize Pool',
      primaryValue: 'TBA',
      subtext: 'Internships, Credits & Goodies',
      badge: 'Official Perks',
      icon: Award,
      gradient: 'from-amber-600/10 via-yellow-600/5 to-transparent',
      borderColor: 'group-hover:border-amber-500/50',
      iconColor: 'text-amber-500',
      actionLabel: 'See Award Perks',
      target: 'awards'
    }
  ];

  return (
    <section id="overview" className="py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
            Key Event Dimensions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white mt-0.5">
            Overview & Core Specifications
          </h2>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Strictly verified against HackRush 2026 official documents
        </p>
      </div>

      {/* 4 Core Factual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onScrollToSection(card.target)}
              className={`group relative p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${card.borderColor}`}
            >
              {/* Subtle gradient wash */}
              <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-50 pointer-events-none`} />

              <div className="relative flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {card.title}
                </span>
                <div className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-800 ${card.iconColor} transition-transform group-hover:scale-110`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="relative space-y-1 mb-4">
                <p className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white tracking-tight">
                  {card.primaryValue}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {card.subtext}
                </p>
              </div>

              <div className="relative pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-400">
                  {card.badge}
                </span>
                <span className="font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                  {card.actionLabel} →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Eligibility & Inclusion Strip */}
      <div className="p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Inclusive Eligibility
              </span>
              <p className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                Who Can Participate?
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {HACKATHON_META.eligibility.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
