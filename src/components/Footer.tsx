import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Анна Никифорова. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:lily.limited@bk.ru">
                <Icon name="Mail" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
