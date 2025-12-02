import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <div className="container mx-auto px-6 max-w-3xl animate-fade-in">
      <h2 className="text-6xl font-black mb-12 leading-tight">
        Контакты<span className="text-primary">.</span>
      </h2>
      <Card className="p-12 bg-card/50 backdrop-blur">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Свяжитесь со мной</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Открыт для сотрудничества, комиссий и выставочных проектов. Буду рад обсудить ваши
              идеи.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Icon name="Mail" size={24} className="text-primary" />
              <span className="text-lg">lily.limited@bk.ru</span>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="Phone" size={24} className="text-primary" />
              <span className="text-lg">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="MapPin" size={24} className="text-primary" />
              <span className="text-lg">Санкт-Петербург, Россия</span>
            </div>
          </div>

          <div className="pt-8 flex gap-4">
            <Button size="lg" className="flex-1" asChild>
              <a href="mailto:lily.limited@bk.ru">
                <Icon name="Send" size={18} className="mr-2" />
                Написать письмо
              </a>
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              <Icon name="Instagram" size={18} className="mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
