import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Briefcase, 
  Coins, 
  Gift, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  Heart,
  Rocket
} from 'lucide-react';
import { AWARDS_DATA, AwardItem } from '../data/hackathonData';

export const AwardsSection: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const podiumAwards = AWARDS_DATA.filter((a) => a.category === 'podium');
  const specialAwards = AWARDS_DATA.filter((a) => a.category === 'special');
  const recognitionAwards = AWARDS_DATA.filter((a) => a.category === 'recognition');

  const getPerkIcon = (perk: string) => {
    if (perk.toLowerCase().includes('internship')) return <Briefcase className="w-3.5 h-3.5 text-blue-500" />;
    if (perk.toLowerCase().includes('credits')) return <Coins className="w-3.5 h-3.5 text-amber-500" />;
    if (perk.toLowerCase().includes('goodies') || perk.toLowerCase().includes('swag')) return <Gift className="w-3.5 h-3.5 text-pink-500" />;
    if (perk.toLowerCase().includes('certificate')) return <Award className="w-3.5 h-3.5 text-emerald-500" />;
    return <CheckCircle2 className="w-3.5 h-3.5 text-violet-500" />;
  };

  return (
    <section id="awards" className="py-12 space-y-8 scroll-mt-20">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
          Recognition & Incentives
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white mt-0.5">
          Awards & Official Recognition
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Career-defining internships, cloud credits, and curated goodies conferred by Tech4Hack, IGDTUW.
        </p>
      </div>

      {/* 3-Tier Podium (1st, 2nd, 3rd Position) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {podiumAwards.map((item, index) => {
          const isFirst = index === 0;
          return (
            <div
              key={item.id}
              className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:shadow-2xl ${
                isFirst
                  ? 'bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-950 border-2 border-amber-500/60 shadow-xl shadow-amber-500/10 md:-translate-y-2'
                  : 'bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {/* Highlight ribbon for 1st place */}
              {isFirst && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-heading font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                  Winner · Flagship Trophy
                </div>
              )}

              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                    isFirst 
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                  <Trophy className={`w-6 h-6 ${
                    index === 0 ? 'text-amber-400' : index === 1 ? 'text-slate-400' : 'text-amber-600'
                  }`} />
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                    {item.rankTitle}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Guaranteed Perks List */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                    Conferred Benefits
                  </span>
                  {item.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200">
                      {getPerkIcon(perk)}
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Evaluated at Online Finale</span>
                <span className="font-mono text-amber-500 font-semibold">Stage 09</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Special Category Awards: Best Female Team & Most Promising Startup */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specialAwards.map((item) => {
          const isFemaleTeam = item.id === 'best-female-team';
          return (
            <div
              key={item.id}
              className={`p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
                isFemaleTeam
                  ? 'bg-gradient-to-br from-pink-950/30 via-slate-900 to-slate-950 border-pink-500/40 text-white'
                  : 'bg-gradient-to-br from-violet-950/30 via-slate-900 to-slate-950 border-violet-500/40 text-white'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  {isFemaleTeam ? (
                    <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400">
                      <Heart className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400">
                      <Rocket className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                      isFemaleTeam ? 'text-pink-400' : 'text-violet-400'
                    }`}>
                      {item.badge}
                    </span>
                    <h4 className="font-heading font-extrabold text-xl text-white">
                      {item.rankTitle}
                    </h4>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-mono text-slate-300">
                  Special Award
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">
                  Perks Awarded
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.perks.map((perk, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200 flex items-center gap-1.5">
                      {getPerkIcon(perk)}
                      <span>{perk}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Monthly Tech4Hack Distinction: Star of the Month Head & Member */}
      <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Tech4Hack IGDTUW Internal Honors
            </span>
            <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">
              Monthly Leadership & Contributor Citations
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Conferred Monthly
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {recognitionAwards.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
            >
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    {item.rankTitle}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    Monthly
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.perks.map((perk, idx) => (
                    <span key={idx} className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      ✓ {perk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
