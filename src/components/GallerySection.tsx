import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Artwork {
  id: number;
  title: string;
  year: number;
  style: string;
  technique: string;
  image: string;
}

interface GallerySectionProps {
  artworks: Artwork[];
  selectedStyle: string | null;
  selectedTechnique: string | null;
  selectedYear: string | null;
  setSelectedStyle: (style: string | null) => void;
  setSelectedTechnique: (technique: string | null) => void;
  setSelectedYear: (year: string | null) => void;
  resetFilters: () => void;
}

export default function GallerySection({
  artworks,
  selectedStyle,
  selectedTechnique,
  selectedYear,
  setSelectedStyle,
  setSelectedTechnique,
  setSelectedYear,
  resetFilters,
}: GallerySectionProps) {
  const styles = ['Абстракция', 'Урбанизм', 'Экспрессионизм', 'Минимализм', 'Концептуализм'];
  const techniques = ['Масло', 'Акрил', 'Графика', 'Смешанная техника'];
  const years = ['2024', '2023', '2022'];

  const filteredArtworks = artworks.filter(artwork => {
    if (selectedStyle && artwork.style !== selectedStyle) return false;
    if (selectedTechnique && artwork.technique !== selectedTechnique) return false;
    if (selectedYear && artwork.year.toString() !== selectedYear) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-6 animate-fade-in">
      <div className="mb-16">
        <h2 className="text-7xl font-black mb-4 leading-tight">
          Галерея<span className="text-primary">.</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Коллекция работ, созданных на стыке эмоций, цвета и формы. Каждая работа — это диалог с
          внутренним миром.
        </p>
      </div>

      <div className="mb-12 space-y-6">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-sm font-medium text-muted-foreground">Фильтры:</span>
          {(selectedStyle || selectedTechnique || selectedYear) && (
            <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8">
              <Icon name="X" size={14} className="mr-1" />
              Сбросить всё
            </Button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2 text-muted-foreground">Стиль</p>
            <div className="flex gap-2 flex-wrap">
              {styles.map(style => (
                <Badge
                  key={style}
                  variant={selectedStyle === style ? 'default' : 'outline'}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => setSelectedStyle(selectedStyle === style ? null : style)}
                >
                  {style}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2 text-muted-foreground">Техника</p>
            <div className="flex gap-2 flex-wrap">
              {techniques.map(technique => (
                <Badge
                  key={technique}
                  variant={selectedTechnique === technique ? 'default' : 'outline'}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() =>
                    setSelectedTechnique(selectedTechnique === technique ? null : technique)
                  }
                >
                  {technique}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2 text-muted-foreground">Год создания</p>
            <div className="flex gap-2 flex-wrap">
              {years.map(year => (
                <Badge
                  key={year}
                  variant={selectedYear === year ? 'default' : 'outline'}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                >
                  {year}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtworks.map((artwork, index) => (
          <Card
            key={artwork.id}
            className="group overflow-hidden border-0 bg-card/50 backdrop-blur hover:bg-card transition-all duration-500 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted/20">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">{artwork.title}</h3>
                <span className="text-sm text-muted-foreground">{artwork.year}</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs">
                  {artwork.style}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {artwork.technique}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredArtworks.length === 0 && (
        <div className="text-center py-20">
          <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
          <p className="text-xl text-muted-foreground mb-4">
            Работы с такими параметрами не найдены
          </p>
          <Button onClick={resetFilters} variant="outline">
            Сбросить фильтры
          </Button>
        </div>
      )}
    </div>
  );
}
