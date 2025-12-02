interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">НИКИФОРОВА АННА</h1>
        <div className="flex gap-6">
          <button
            onClick={() => setActiveSection('home')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Главная
          </button>
          <button
            onClick={() => setActiveSection('contacts')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Контакты
          </button>
        </div>
      </div>
    </nav>
  );
}
