import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OverviewCards } from './components/OverviewCards';
import { EventTimeline } from './components/EventTimeline';
import { ThemesAndTracks } from './components/ThemesAndTracks';
import { AwardsSection } from './components/AwardsSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { ReferenceImagesModal } from './components/ReferenceImagesModal';
import { RegistrationModal } from './components/RegistrationModal';
import { HACKATHON_META } from './data/hackathonData';
import { Sparkles, Heart, ShieldCheck, ExternalLink, Image as ImageIcon } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [isSourceImagesOpen, setIsSourceImagesOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
  const [registerPreselectedTrack, setRegisterPreselectedTrack] = useState<string | undefined>(undefined);

  // Sync theme with HTML class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRegisterModal = (trackName?: string) => {
    setRegisterPreselectedTrack(trackName);
    setIsRegisterModalOpen(true);
  };

  const handleSelectTrackFromSearch = (trackId: string) => {
    setSelectedTrackId(trackId);
    scrollToSection('tracks');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <div className="flex flex-1">
        {/* Navigation Sidebar */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isDark={isDark}
          toggleTheme={toggleTheme}
          isOpenMobile={isOpenMobile}
          setIsOpenMobile={setIsOpenMobile}
          onOpenSourceImages={() => setIsSourceImagesOpen(true)}
          onOpenRegisterModal={() => handleOpenRegisterModal()}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Bar Header */}
          <Header
            onToggleMobileMenu={() => setIsOpenMobile(true)}
            isDark={isDark}
            toggleTheme={toggleTheme}
            onOpenSourceImages={() => setIsSourceImagesOpen(true)}
            onOpenRegisterModal={() => handleOpenRegisterModal()}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectTrack={handleSelectTrackFromSearch}
          />

          {/* Primary Viewport Canvas */}
          <main className="flex-1 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full space-y-4">
            {/* Hero Banner Section */}
            <HeroSection
              onOpenSourceImages={() => setIsSourceImagesOpen(true)}
              onOpenRegisterModal={() => handleOpenRegisterModal()}
              onExploreTracks={() => scrollToSection('tracks')}
            />

            {/* Overview Specifications Strip */}
            <OverviewCards onScrollToSection={scrollToSection} />

            {/* 9-Stage Event Timeline */}
            <EventTimeline />

            {/* 5 Themes & Tracks Section */}
            <ThemesAndTracks
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedTrackId={selectedTrackId}
              onOpenRegisterModal={handleOpenRegisterModal}
            />

            {/* Awards & Recognition Section */}
            <AwardsSection />

            {/* Announcements Panel */}
            <AnnouncementsSection />
          </main>

          {/* Footer */}
          <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 py-8 px-4 sm:px-6 lg:px-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-slate-900 dark:text-white">
                  {HACKATHON_META.name}
                </span>
                <span>·</span>
                <span>Organized by {HACKATHON_META.organizer}, IGDTUW</span>
                <span>·</span>
                <span>Hosted on {HACKATHON_META.partner}</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsSourceImagesOpen(true)}
                  className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Official Posters (4)</span>
                </button>
                <a
                  href="#overview"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Back to Top ↑
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Source Posters Inspection Modal */}
      <ReferenceImagesModal
        isOpen={isSourceImagesOpen}
        onClose={() => setIsSourceImagesOpen(false)}
      />

      {/* Working Registration & Verification Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        preselectedTrack={registerPreselectedTrack}
      />
    </div>
  );
}
