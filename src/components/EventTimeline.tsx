import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Award, 
  Users, 
  Flag,
  ArrowUpRight
} from 'lucide-react';
import { TIMELINE_STAGES, HACKATHON_META, TimelineStage } from '../data/hackathonData';

export const EventTimeline: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<TimelineStage | null>(TIMELINE_STAGES[1]); // Default to Idea submission

  const filteredStages = TIMELINE_STAGES.filter((stage) => {
    if (filterType === 'all') return true;
    if (filterType === 'submission') return stage.type === 'submission' || stage.id === 1;
    if (filterType === 'mentorship') return stage.type === 'mentorship' || stage.id === 4;
    if (filterType === 'finale') return stage.type === 'finale' || stage.type === 'milestone';
    return true;
  });

  const getBadgeStyle = (type: TimelineStage['type']) => {
    switch (type) {
      case 'submission':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'evaluation':
        return 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20';
      case 'mentorship':
        return 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20';
      case 'finale':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  return (
    <section id="timeline" className="py-12 space-y-8 scroll-mt-20">
      {/* Header and Interactive Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
            Chronological Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white mt-0.5">
            Event Stages & Timelines
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Nine official milestones leading from submission to the IGDTUW campus awards.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'All 9 Stages' },
            { id: 'submission', label: 'Idea / PPT' },
            { id: 'mentorship', label: 'Mentorship' },
            { id: 'finale', label: 'Finale & Results' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                filterType === tab.id
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Timeline List (8 cols) */}
        <div className="lg:col-span-8 space-y-3">
          {filteredStages.map((stage) => {
            const isSelected = selectedStage?.id === stage.id;
            return (
              <div
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50/60 dark:bg-blue-950/30 border-blue-500/50 dark:border-blue-500/40 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    {/* Stage Number Badge */}
                    <span className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                    }`}>
                      {stage.stageNumber}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                          {stage.title}
                        </h4>
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${getBadgeStyle(stage.type)}`}>
                          {stage.type.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 sm:line-clamp-none">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Date & Day */}
                  <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 block">
                      {stage.date}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {stage.day}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Spotlight & Offline Ceremony Card (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Spotlight Card */}
          {selectedStage && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider">
                  Selected Milestone
                </span>
                <span className="font-mono text-xs text-slate-400">
                  Step {selectedStage.stageNumber} / 09
                </span>
              </div>

              <div className="py-4 space-y-2">
                <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold border ${getBadgeStyle(selectedStage.type)}`}>
                  {selectedStage.day} · {selectedStage.date}
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  {selectedStage.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedStage.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Phase: {selectedStage.type}</span>
                <span className="text-blue-400 font-medium">Official Schedule</span>
              </div>
            </div>
          )}

          {/* Offline Ceremony Card */}
          <div className="p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/30 text-slate-900 dark:text-slate-100">
            <div className="flex items-center gap-2.5 mb-2 text-amber-700 dark:text-amber-400">
              <MapPin className="w-5 h-5 shrink-0" />
              <h4 className="font-heading font-bold text-sm uppercase tracking-wide">
                Offline Award Ceremony
              </h4>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              While the hackathon competition is conducted online, the grand finale award ceremony will be celebrated <strong>offline on campus at Indira Gandhi Delhi Technical University for Women (IGDTUW)</strong>.
            </p>
            <div className="mt-3 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400">
              <span>Venue: IGDTUW Campus, Delhi</span>
              <span className="text-[11px] font-mono">Date: TBA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
