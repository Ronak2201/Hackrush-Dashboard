import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Users, 
  Building, 
  Mail, 
  Layers,
  ArrowRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { HACKATHON_META, TRACKS_DATA } from '../data/hackathonData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTrack?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedTrack
}) => {
  const [teamName, setTeamName] = useState('');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [college, setCollege] = useState('');
  const [track, setTrack] = useState(preselectedTrack || TRACKS_DATA[0].name);
  const [teamSize, setTeamSize] = useState<number>(4);
  const [educationLevel, setEducationLevel] = useState('Engineering');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `HR26-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionId(generatedId);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setTeamName('');
    setLeadName('');
    setLeadEmail('');
    setCollege('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl animate-in fade-in zoom-in-95 duration-150 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
          aria-label="Close registration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold">
                  Official Portal Verification
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Register for {HACKATHON_META.name}
                </h3>
              </div>
            </div>

            {/* Team Size Discrepancy Note */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs mb-5">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-300">Team Size Notice</p>
                  <p className="text-[11px] text-amber-200/90 leading-relaxed mt-0.5">
                    Written brief allows <strong>3 to 5</strong> members; official banner specifies <strong>3 to 6</strong>. You can register any team size between 3 and 6 members below.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Team Name *
                </label>
                <input
                  type="text"
                  required
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. NeuralKnights"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Team Leader Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Leader Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="e.g. lead@university.edu"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    College / University *
                  </label>
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. IGDTUW, Delhi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Academic Stream *
                  </label>
                  <select
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  >
                    <option value="Engineering">Engineering Students</option>
                    <option value="Management">B-School / Management</option>
                    <option value="Undergraduate">Undergraduate (Arts/Sciences/Commerce)</option>
                    <option value="Postgraduate">Postgraduate (Masters/PhD)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Selected Innovation Track *
                </label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                >
                  {TRACKS_DATA.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Team Size Selector (3 to 6) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-slate-300 font-semibold">
                    Number of Team Members
                  </label>
                  <span className="text-[11px] font-mono text-slate-400">
                    Range: 3 to 6 members
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 4, 5, 6].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setTeamSize(num)}
                      className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                        teamSize === num
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/30'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {num} Members
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-400 hover:text-white font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/20 flex items-center gap-2"
                >
                  <span>Verify & Submit Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-6 text-center space-y-5 animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                Registration Confirmed
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                Welcome to HackRush 2026!
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Your team <strong className="text-white">{teamName}</strong> is registered under the <strong className="text-blue-400">{track}</strong> track.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Application ID:</span>
                <span className="font-mono font-bold text-blue-400">{submissionId}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Team Size:</span>
                <span className="font-mono text-white">{teamSize} Members</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Submission Closes:</span>
                <span className="font-mono text-amber-400">16 Nov 2026, 11:59 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Next Stage:</span>
                <span className="text-pink-400 font-semibold">Top 80 Result (18 Nov)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
              >
                Back to Dashboard
              </button>
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Open Unstop Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
