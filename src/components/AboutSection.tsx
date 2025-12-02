export default function AboutSection() {
  return (
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
              "Для меня искусство — это способ визуализировать невидимое. Каждая работа начинается
              с эмоции, которую я пытаюсь перевести на язык формы и цвета."
            </p>
          </div>
        </div>
        <div className="aspect-[3/4] rounded-lg overflow-hidden">
          <img
            src="https://cdn.poehali.dev/files/9dd3bac5-1773-4542-85cf-b01c2a928fcd.jpg"
            alt="Анна Никифорова"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
