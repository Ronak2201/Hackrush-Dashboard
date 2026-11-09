import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Layers, 
  Trophy, 
  Bell, 
  Sun, 
  Moon, 
  ExternalLink, 
  AlertTriangle, 
  Image as ImageIcon,
  ChevronRight,
  Sparkles,
  X
} from 'lucide-react';
import { HACKATHON_META } from '../data/hackathonData';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  isOpenMobile: boolean;
  setIsOpenMobile: (open: boolean) => void;
  onOpenSourceImages: () => void;
  onOpenRegisterModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  isDark,
  toggleTheme,
  isOpenMobile,
  setIsOpenMobile,
  onOpenSourceImages,
  onOpenRegisterModal
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'timeline', label: 'Event Timeline', icon: Calendar },
    { id: 'tracks', label: 'Themes & Tracks', icon: Layers },
    { id: 'awards', label: 'Awards & Recognition', icon: Trophy },
    { id: 'announcements', label: 'Announcements', icon: Bell },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpenMobile(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between p-4 sm:p-5 select-none">
      {/* Brand Zone */}
      <div>
        <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            {/* Tech4Hack & HackRush Icon Badge */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center text-white font-heading font-bold shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                  {HACKATHON_META.name}
                </span>
              </div>
              <p className="text-[11px] font-medium text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                {HACKATHON_META.organizer} · IGDTUW
              </p>
            </div>
          </div>
          {isOpenMobile && (
            <button 
              onClick={() => setIsOpenMobile(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close mobile sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Subtitle tag */}
        <div className="mt-4 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-[11px] text-blue-700 dark:text-blue-300 font-medium flex items-center justify-between">
          <span>{HACKATHON_META.subTitle}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-white/80" />}
              </button>
            );
          })}
        </nav>

        {/* Team Size Discrepancy Alert */}
        <div className="mt-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
            <div>
              <p className="font-semibold">Team Size Flag</p>
              <p className="text-[11px] mt-0.5 text-amber-600/90 dark:text-amber-300/80 leading-relaxed">
                Brief says 3–5; poster says 3–6. Awaiting confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions & Footer */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
        {/* Source Posters Button */}
        <button
          onClick={onOpenSourceImages}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-violet-500/40 transition-colors"
        >
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-violet-500" />
            <span>Official Posters (4)</span>
          </div>
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">View</span>
        </button>

        {/* Register / Unstop Portal Button */}
        <button
          onClick={onOpenRegisterModal}
          className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]"
        >
          <span>Unstop Registration</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>

        {/* Theme Toggle & Mode */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Interface Theme</span>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 h-screen sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800/80 z-30 transition-colors">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpenMobile(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Slider */}
      <div
        className={`fixed top-0 bottom-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </div>
    </>
  );
};
