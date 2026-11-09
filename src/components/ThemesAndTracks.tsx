import React, { useState } from 'react';
import { 
  Cpu, 
  Coins, 
  Activity, 
  ShieldCheck, 
  Leaf, 
  Search, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Lightbulb, 
  X,
  ExternalLink
} from 'lucide-react';
import { TRACKS_DATA, TrackItem } from '../data/hackathonData';

interface ThemesAndTracksProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedTrackId: string | null;
  onOpenRegisterModal: (trackName?: string) => void;
}

export const ThemesAndTracks: React.FC<ThemesAndTracksProps> = ({
  searchQuery,
  setSearchQuery,
  selectedTrackId,
  onOpenRegisterModal
}) => {
  const [activeModalTrack, setActiveModalTrack] = useState<TrackItem | null>(null);

  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-400" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-blue-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-rose-400" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  const filteredTracks = TRACKS_DATA.filter((track) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      track.name.toLowerCase().includes(query) ||
      track.shortDesc.toLowerCase().includes(query) ||
      track.fullDesc.toLowerCase().includes(query) ||
      track.suggestedTech.some((t) => t.toLowerCase().includes(query)) ||
      track.sampleProblems.some((p) => p.toLowerCase().includes(query))
    );
  });

  return (
    <section id="tracks" className="py-12 space-y-8 scroll-mt-20">
      {/* Header and Live Search Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
            Innovation Arenas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white mt-0.5">
            Five Challenge Themes & Tracks
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Pick a theme. Pick a problem. Build the fix. Click any card to inspect sample problems.
          </p>
        </div>

        {/* Track search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter tracks by keyword..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
        </div>
      </div>

      {/* Tracks Grid (5 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map((track) => {
          const isHighlighted = selectedTrackId === track.id;
          return (
            <div
              key={track.id}
              className={`group relative flex flex-col justify-between p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-white overflow-hidden ${
                isHighlighted 
                  ? 'border-blue-400 ring-2 ring-blue-500/40' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Subtle track-colored radial glow behind */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none`} 
              />

              <div className="relative space-y-4">
                {/* Top Track Tag & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    {track.tag}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                    {getTrackIcon(track.iconName)}
                  </div>
                </div>

                {/* Track Title */}
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                    {track.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {track.shortDesc}
                  </p>
                </div>

                {/* Suggested Tech Tags (Pill-free clean unboxed tags) */}
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                    Suggested Stack
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300">
                    {track.suggestedTech.map((tech, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-slate-300">
                        {tech} {idx < track.suggestedTech.length - 1 && <span className="text-slate-600">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Trigger Buttons */}
              <div className="relative pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalTrack(track)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group/btn"
                >
                  <span>Sample Problems</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenRegisterModal(track.name)}
                  className="px-3 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/40 text-blue-200 text-xs font-medium transition-colors"
                >
                  Choose Track
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTracks.length === 0 && (
        <div className="p-8 text-center rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            No track matches your search query "{searchQuery}".
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Interactive Track Details Modal */}
      {activeModalTrack && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setActiveModalTrack(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Close track details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30">
                {getTrackIcon(activeModalTrack.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                  {activeModalTrack.tag} · Official Hackathon Track
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  {activeModalTrack.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 py-3 border-y border-slate-800">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalTrack.fullDesc}
              </p>

              {/* Sample Problem Statements */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 font-mono">
                  <Lightbulb className="w-4 h-4" />
                  <span>Sample Innovation Prompts</span>
                </h4>
                <ul className="space-y-2">
                  {activeModalTrack.sampleProblems.map((problem, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Stack */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 font-mono">
                  <Code2 className="w-4 h-4" />
                  <span>Suggested Tools & Frameworks</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalTrack.suggestedTech.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-5 flex items-center justify-between">
              <button
                onClick={() => setActiveModalTrack(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const trackName = activeModalTrack.name;
                  setActiveModalTrack(null);
                  onOpenRegisterModal(trackName);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md flex items-center gap-1.5"
              >
                <span>Select & Register for Track</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
