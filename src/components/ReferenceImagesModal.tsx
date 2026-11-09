import React, { useState } from 'react';
import { X, Image as ImageIcon, CheckCircle, ExternalLink, AlertTriangle, ZoomIn } from 'lucide-react';
import { HACKATHON_META } from '../data/hackathonData';

interface ReferenceImagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceImagesModal: React.FC<ReferenceImagesModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const currentImg = HACKATHON_META.referenceImages[activeTab];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-5xl h-[90vh] bg-slate-950 border border-slate-800 rounded-3xl flex flex-col overflow-hidden shadow-2xl text-white animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
                Official Hackathon Reference Documents
              </h3>
              <p className="text-xs text-slate-400">
                Direct source imagery provided by Tech4Hack, IGDTUW
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 p-3 border-b border-slate-800 bg-slate-950 overflow-x-auto">
          {HACKATHON_META.referenceImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{img.title}</span>
            </button>
          ))}
        </div>

        {/* Main Content Area: Image Viewer & Explanation */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Image Display */}
          <div className="flex-1 bg-slate-900/40 p-4 flex items-center justify-center overflow-auto border-b lg:border-b-0 lg:border-r border-slate-800">
            <div className="max-h-full max-w-full flex items-center justify-center relative group">
              <img
                src={currentImg.path}
                alt={currentImg.title}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] lg:max-h-[70vh] object-contain rounded-xl shadow-2xl border border-slate-800"
              />
            </div>
          </div>

          {/* Details & Discrepancy Analysis Sidebar */}
          <div className="w-full lg:w-80 p-5 space-y-4 overflow-y-auto bg-slate-950 text-xs">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold block mb-1">
                Document {activeTab + 1} of 4
              </span>
              <h4 className="font-heading font-bold text-base text-white">
                {currentImg.title}
              </h4>
              <p className="text-slate-300 mt-1 leading-relaxed">
                {currentImg.caption}
              </p>
            </div>

            {/* Document Specific Context Highlights */}
            {activeTab === 0 && (
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/50 space-y-2">
                <span className="font-bold text-blue-300 block">Poster Key Facts:</span>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  <li>Platform: Unstop partnership</li>
                  <li>Mode: Online</li>
                  <li>Funnel Steps: REGISTER → 80 → 30 → WIN</li>
                  <li><strong className="text-amber-400">Team Size: Teams of 3-6</strong></li>
                  <li>Prize Pool: To be Declared Soon</li>
                </ul>
              </div>
            )}

            {activeTab === 1 && (
              <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-800/50 space-y-2">
                <span className="font-bold text-violet-300 block">Brief Key Facts:</span>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  <li>Flagship Hackathon of Tech4Hack, IGDTUW</li>
                  <li><strong className="text-amber-400">Team Size: 3 to 5 Members</strong></li>
                  <li>Registration Deadline: 17th Aug / 16th Nov</li>
                  <li>Eligibility: Engineering, B-School, UG, PG, Arts, Commerce</li>
                  <li>Star of Month Head & Member certificates</li>
                </ul>
              </div>
            )}

            {activeTab === 2 && (
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/50 space-y-2">
                <span className="font-bold text-amber-300 block">Awards Document Facts:</span>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  <li>1st, 2nd, 3rd: Internship Opportunity + Credits + Goodies</li>
                  <li>Best Female Team: Goodies</li>
                  <li>Most Promising Startup Idea: Goodies</li>
                </ul>
              </div>
            )}

            {activeTab === 3 && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 space-y-2">
                <span className="font-bold text-emerald-300 block">Timeline Document Facts:</span>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  <li>9 Nov: Announcement & PPT Submission begins</li>
                  <li>16 Nov: Submission ends</li>
                  <li>18 Nov: Top 80 Teams</li>
                  <li>19-20 Nov: Mentorship Round</li>
                  <li>21 Nov: Top 30 Teams</li>
                  <li>22 Nov: Online Finale</li>
                  <li>25 Nov: Result Declaration</li>
                  <li>Award Ceremony offline at IGDTUW campus</li>
                </ul>
              </div>
            )}

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Confirmed Discrepancy Note</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-200/90">
                Notice how Image 1 (Poster) clearly prints "Teams of 3-6", while Image 2 (Brief) prints "Team Size: 3 to 5 Members". This application explicitly highlights this nuance for organizing leads!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
