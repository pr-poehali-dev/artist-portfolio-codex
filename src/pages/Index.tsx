import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const artworks = [
  {
    id: 1,
    title: 'Абстрактный космос',
    year: 2024,
    style: 'Абстракция',
    technique: 'Масло',
    image: 'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/c3c2a6e6-5e3f-4480-b3e0-898d73ba79b3.jpg',
  },
  {
    id: 2,
    title: 'Городские грани',
    year: 2024,
    style: 'Урбанизм',
    technique: 'Акрил',
    image: 'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/61f88f31-f40c-4f7d-9eb9-3d4bd5d5830d.jpg',
  },
  {
    id: 3,
    title: 'Внутренний мир',
    year: 2023,
    style: 'Экспрессионизм',
    technique: 'Смешанная техника',
    image: 'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/174adac5-ffcb-4c12-8846-b6e594df79fc.jpg',
  },
  {
    id: 4,
    title: 'Параллели',
    year: 2023,
    style: 'Минимализм',
    technique: 'Графика',
    image: 'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/c3c2a6e6-5e3f-4480-b3e0-898d73ba79b3.jpg',
  },
  {
    id: 5,
    title: 'Энергия цвета',
    year: 2024,
    style: 'Абстракция',
    technique: 'Акрил',
    image: 'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/61f88f31-f40c-4f7d-9eb9-3d4bd5d5830d.jpg',
  },
  {
    id: 6,
    title: 'Архитектура души',
    year: 2022,
    style: 'Концептуализм',
    technique: 'Масло',
    image: 'https://cdn.poehali.dev/projects/722eacc2-3d1c-418b-91f3-55fa032dc6a6/files/174adac5-ffcb-4c12-8846-b6e594df79fc.jpg',
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('gallery');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const styles = ['Абстракция', 'Урбанизм', 'Экспрессионизм', 'Минимализм', 'Концептуализм'];
  const techniques = ['Масло', 'Акрил', 'Графика', 'Смешанная техника'];
  const years = ['2024', '2023', '2022'];

  const filteredArtworks = artworks.filter(artwork => {
    if (selectedStyle && artwork.style !== selectedStyle) return false;
    if (selectedTechnique && artwork.technique !== selectedTechnique) return false;
    if (selectedYear && artwork.year.toString() !== selectedYear) return false;
    return true;
  });

  const resetFilters = () => {
    setSelectedStyle(null);
    setSelectedTechnique(null);
    setSelectedYear(null);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">НИКИФОРОВА АННА ЮРЬЕВНА</h1>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveSection('gallery')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'gallery' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Галерея
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              О художнике
            </button>
            <button
              onClick={() => setActiveSection('process')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'process' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Процесс
            </button>
            <button
              onClick={() => setActiveSection('blog')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'blog' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Блог
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

      <main className="pt-24 pb-16">
        {activeSection === 'gallery' && (
          <div className="container mx-auto px-6 animate-fade-in">
            <div className="mb-16">
              <h2 className="text-7xl font-black mb-4 leading-tight">
                Моя галерея<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Коллекция работ, созданных на стыке эмоций, цвета и формы. Каждая работа — это диалог с внутренним миром.
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
        )}

        {activeSection === 'about' && (
          <div className="container mx-auto px-6 max-w-5xl animate-fade-in">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-6xl font-black mb-6 leading-tight">
                  О художнике<span className="text-primary">.</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Анна Никифорова — современная художница, работающая на стыке абстракции и
                    концептуального искусства. Её работы исследуют взаимосвязь между внутренним
                    состоянием человека и внешним миром через призму женской чувственности и интуиции.
                  </p>
                  <p>
                    Родилась в Санкт-Петербурге. Несмотря на техническое образование, всегда чувствовала
                    глубокую связь с искусством. Творчество стало для неё способом выражения того, что не
                    поддаётся рациональному объяснению. Сегодня её работы находятся в частных коллекциях
                    России и Европы.
                  </p>
                  <p>
                    "Для меня искусство — это способ визуализировать невидимое. Каждая работа
                    начинается с эмоции, которую я пытаюсь перевести на язык формы и цвета."
                  </p>
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
            </div>
          </div>
        )}

        {activeSection === 'process' && (
          <div className="container mx-auto px-6 max-w-5xl animate-fade-in">
            <h2 className="text-6xl font-black mb-12 leading-tight">
              Процесс создания<span className="text-primary">.</span>
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Идея',
                  description:
                    'Всё начинается с эмоции или концепции. Я делаю быстрые скетчи, чтобы зафиксировать первоначальную идею.',
                },
                {
                  step: '02',
                  title: 'Исследование',
                  description:
                    'Изучаю референсы, экспериментирую с цветовыми палитрами и композицией. Это может занять от нескольких дней до недель.',
                },
                {
                  step: '03',
                  title: 'Создание',
                  description:
                    'Работа над холстом. Слой за слоем, цвет за цветом. Процесс интуитивный — работа сама подсказывает направление.',
                },
                {
                  step: '04',
                  title: 'Рефлексия',
                  description:
                    'Даю работе "отлежаться". Возвращаюсь к ней через несколько дней свежим взглядом, чтобы понять, завершена ли она.',
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur border-l-4 border-l-primary animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex gap-8 items-start">
                    <span className="text-6xl font-black text-primary/20">{item.step}</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'blog' && (
          <div className="container mx-auto px-6 max-w-5xl animate-fade-in">
            <h2 className="text-6xl font-black mb-12 leading-tight">
              Блог<span className="text-primary">.</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  date: '15 ноября 2024',
                  title: 'О цвете и эмоциях',
                  excerpt:
                    'Почему определённые цветовые сочетания вызывают у нас такие сильные эмоциональные отклики? Размышления о психологии цвета...',
                },
                {
                  date: '3 ноября 2024',
                  title: 'Работа с пространством',
                  excerpt:
                    'Пространство на холсте — это не просто пустота. Это дыхание картины, её ритм. Рассказываю о композиции...',
                },
                {
                  date: '28 октября 2024',
                  title: 'Новая серия работ',
                  excerpt:
                    'Начал работу над новой серией "Внутренние ландшафты". Это попытка визуализировать эмоциональные состояния через абстрактные формы...',
                },
              ].map((post, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur hover:bg-card transition-all duration-300 cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="container mx-auto px-6 max-w-3xl animate-fade-in">
            <h2 className="text-6xl font-black mb-12 leading-tight">
              Контакты<span className="text-primary">.</span>
            </h2>
            <Card className="p-12 bg-card/50 backdrop-blur">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Свяжитесь со мной</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Открыт для сотрудничества, комиссий и выставочных проектов. Буду рад обсудить
                    ваши идеи.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <span className="text-lg">contact@alexandervolkov.art</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <span className="text-lg">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <span className="text-lg">Москва, Россия</span>
                  </div>
                </div>

                <div className="pt-8 flex gap-4">
                  <Button size="lg" className="flex-1">
                    <Icon name="Send" size={18} className="mr-2" />
                    Написать письмо
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Icon name="Instagram" size={18} className="mr-2" />
                    Instagram
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Александр Волков. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}