import React, { useState } from 'react';
import { 
  Bell, 
  Sparkles, 
  AlertCircle, 
  Calendar, 
  Filter, 
  Plus, 
  Check, 
  Send,
  Info
} from 'lucide-react';
import { ANNOUNCEMENTS_DATA, AnnouncementItem } from '../data/hackathonData';

export const AnnouncementsSection: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'official' | 'demo'>('all');
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(ANNOUNCEMENTS_DATA);
  const [showAddDemoModal, setShowAddDemoModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const filtered = announcements.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === 'official') return !item.isDemo;
    if (filterType === 'demo') return item.isDemo;
    return true;
  });

  const handleAddDemoAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newItem: AnnouncementItem = {
      id: `ann-${Date.now()}`,
      title: newTitle.trim(),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      tag: 'DEMO',
      content: newContent.trim(),
      isDemo: true
    };

    setAnnouncements([newItem, ...announcements]);
    setNewTitle('');
    setNewContent('');
    setShowAddDemoModal(false);
    setSuccessMsg('Sample demonstration announcement broadcasted successfully!');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <section id="announcements" className="py-12 space-y-6 scroll-mt-20">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 font-mono">
            Live Feed & Bulletins
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white mt-0.5">
            Announcements & Bulletins
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Official alerts, submissions updates, and demonstration broadcast messages.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Filter segment */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filterType === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All ({announcements.length})
            </button>
            <button
              onClick={() => setFilterType('official')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filterType === 'official'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Official Only
            </button>
            <button
              onClick={() => setFilterType('demo')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filterType === 'demo'
                  ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Demo Tests
            </button>
          </div>

          {/* Test Broadcast Button */}
          <button
            onClick={() => setShowAddDemoModal(true)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Post Demo Alert</span>
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Announcements List */}
      <div className="space-y-3">
        {filtered.map((item) => {
          const isDemo = item.isDemo;
          return (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border transition-all duration-200 hover:shadow-md ${
                isDemo
                  ? 'bg-white dark:bg-slate-900/60 border-amber-300/40 dark:border-amber-900/30'
                  : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                    isDemo
                      ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800'
                      : 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-800'
                  }`}>
                    {isDemo ? '[DEMO NOTICE]' : '[OFFICIAL UPDATE]'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {item.date}
                  </span>
                </div>
                {isDemo && (
                  <span className="text-[10px] text-amber-600 dark:text-amber-400/90 italic">
                    Demonstration Notice
                  </span>
                )}
              </div>

              <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>

      {/* Modal to Post Sample Demo Announcement */}
      {showAddDemoModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    Broadcast Demo Announcement
                  </h3>
                  <p className="text-xs text-slate-500">
                    Will be clearly flagged with [DEMO NOTICE]
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAddDemoModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddDemoAnnouncement} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Announcement Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Workshop on AI Agent Architectures with Tech4Hack"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Bulletin Message
                </label>
                <textarea
                  required
                  rows={3}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Enter details of this demonstration update..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddDemoModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Broadcast Demo</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
