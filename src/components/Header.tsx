import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  Sparkles, 
  Image as ImageIcon,
  Check,
  ChevronDown
} from 'lucide-react';
import { HACKATHON_META, ANNOUNCEMENTS_DATA } from '../data/hackathonData';

interface HeaderProps {
  onToggleMobileMenu: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  onOpenSourceImages: () => void;
  onOpenRegisterModal: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectTrack: (trackId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleMobileMenu,
  isDark,
  toggleTheme,
  onOpenSourceImages,
  onOpenRegisterModal,
  searchQuery,
  setSearchQuery,
  onSelectTrack
}) => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);
  const [notifications, setNotifications] = useState(ANNOUNCEMENTS_DATA);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close notifications if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllRead = () => {
    setUnreadCount(0);
  };

  const quickSearchSuggestions = [
    { label: 'AI & Generative AI', type: 'Track', action: () => onSelectTrack('ai-ml-genai') },
    { label: 'Fintech & Blockchain', type: 'Track', action: () => onSelectTrack('fintech-blockchain') },
    { label: 'Top 80 Stage Announcement', type: 'Timeline', action: () => {
      const el = document.getElementById('timeline');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }},
    { label: 'Best Female Team Award', type: 'Award', action: () => {
      const el = document.getElementById('awards');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }}
  ];

  return (
    <header className="sticky top-0 z-20 w-full h-16 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 flex items-center justify-between gap-4 transition-colors">
      {/* Left: Mobile trigger & breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Open mobile menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="font-semibold text-slate-800 dark:text-slate-200 font-heading">
            {HACKATHON_META.name}
          </span>
          <span className="text-slate-400">/</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            Command Center
          </span>
          <span className="text-slate-400 hidden md:inline">/</span>
          <span className="text-slate-500 dark:text-slate-400 hidden md:inline">
            Tech4Hack IGDTUW
          </span>
        </div>
      </div>

      {/* Middle: Interactive Search Bar */}
      <div className="relative flex-1 max-w-md" ref={searchRef}>
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            placeholder="Search tracks, stages, awards..."
            className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/80 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Search Quick Dropdown */}
        {isSearchFocused && !searchQuery && (
          <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
            <p className="px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Quick Suggestions
            </p>
            <div className="space-y-0.5 mt-1">
              {quickSearchSuggestions.map((item, idx) => (
                <button
                  key={idx}
                  onMouseDown={() => {
                    item.action();
                    setIsSearchFocused(false);
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between group transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-blue-500">
                    {item.type}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Controls: Posters, Notifications, Theme, Register */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Source Posters Button */}
        <button
          onClick={onOpenSourceImages}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400 transition-all"
          title="View the 4 official source posters provided for this hackathon"
        >
          <ImageIcon className="w-3.5 h-3.5 text-violet-500" />
          <span>Source Posters</span>
        </button>

        {/* Notifications Popover */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="View notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500 ring-2 ring-white dark:ring-slate-950" />
            )}
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    Event Notifications
                  </span>
                  {unreadCount > 0 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400 text-[10px] font-semibold">
                      {unreadCount} New
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <Check className="w-3 h-3" />
                    <span>Mark all read</span>
                  </button>
                )}
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800/80 max-h-80 overflow-y-auto mt-2">
                {notifications.map((n) => (
                  <div key={n.id} className="py-2.5 text-xs">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        n.tag === 'OFFICIAL'
                          ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                          : 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                      }`}>
                        [{n.tag}]
                      </span>
                      <span className="text-[10px] text-slate-400">{n.date}</span>
                    </div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {n.title}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                      {n.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
                <button
                  onClick={() => {
                    setIsNotifOpen(false);
                    const el = document.getElementById('announcements');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View All Announcements
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600" />
          )}
        </button>

        {/* Unstop Register CTA */}
        <button
          onClick={onOpenRegisterModal}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-sm transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Register</span>
        </button>
      </div>
    </header>
  );
};
