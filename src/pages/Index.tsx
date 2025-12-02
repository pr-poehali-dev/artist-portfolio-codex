import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const artworks = [
  {
    id: 1,
    title: 'Абстрактный космос',
    year: 2024,
    style: 'Абстракция',
    technique: 'Масло',
    image:
      'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/c3c2a6e6-5e3f-4480-b3e0-898d73ba79b3.jpg',
  },
  {
    id: 2,
    title: 'Городские грани',
    year: 2024,
    style: 'Урбанизм',
    technique: 'Акрил',
    image:
      'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/61f88f31-f40c-4f7d-9eb9-3d4bd5d5830d.jpg',
  },
  {
    id: 3,
    title: 'Внутренний мир',
    year: 2023,
    style: 'Экспрессионизм',
    technique: 'Смешанная техника',
    image:
      'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/174adac5-ffcb-4c12-8846-b6e594df79fc.jpg',
  },
  {
    id: 4,
    title: 'Параллели',
    year: 2023,
    style: 'Минимализм',
    technique: 'Графика',
    image:
      'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/c3c2a6e6-5e3f-4480-b3e0-898d73ba79b3.jpg',
  },
  {
    id: 5,
    title: 'Энергия цвета',
    year: 2024,
    style: 'Абстракция',
    technique: 'Акрил',
    image:
      'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/61f88f31-f40c-4f7d-9eb9-3d4bd5d5830d.jpg',
  },
  {
    id: 6,
    title: 'Архитектура души',
    year: 2022,
    style: 'Концептуализм',
    technique: 'Масло',
    image:
      'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/174adac5-ffcb-4c12-8846-b6e594df79fc.jpg',
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const resetFilters = () => {
    setSelectedStyle(null);
    setSelectedTechnique(null);
    setSelectedYear(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-24 pb-16">
        {activeSection === 'home' && (
          <HomeSection
            artworks={artworks}
            selectedStyle={selectedStyle}
            selectedTechnique={selectedTechnique}
            selectedYear={selectedYear}
            setSelectedStyle={setSelectedStyle}
            setSelectedTechnique={setSelectedTechnique}
            setSelectedYear={setSelectedYear}
            resetFilters={resetFilters}
          />
        )}

        {activeSection === 'about' && <AboutSection />}

        {activeSection === 'gallery' && (
          <GallerySection
            artworks={artworks}
            selectedStyle={selectedStyle}
            selectedTechnique={selectedTechnique}
            selectedYear={selectedYear}
            setSelectedStyle={setSelectedStyle}
            setSelectedTechnique={setSelectedTechnique}
            setSelectedYear={setSelectedYear}
            resetFilters={resetFilters}
          />
        )}

        {activeSection === 'contacts' && <ContactsSection />}
      </main>

      <Footer />
    </div>
  );
}