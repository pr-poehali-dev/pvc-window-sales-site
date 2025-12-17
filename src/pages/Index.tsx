import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1400);
  const [profile, setProfile] = useState('standard');
  const [glass, setGlass] = useState('double');
  const [mosquitoNet, setMosquitoNet] = useState(false);
  const [windowsill, setWindowsill] = useState(false);
  const [slopes, setSlopes] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const calculatePrice = () => {
    const area = (width * height) / 1000000;
    let basePrice = area * 8000;

    if (profile === 'premium') basePrice *= 1.3;
    if (profile === 'elite') basePrice *= 1.6;

    if (glass === 'triple') basePrice *= 1.25;
    if (glass === 'energy') basePrice *= 1.4;

    if (mosquitoNet) basePrice += 2500;
    if (windowsill) basePrice += 3500;
    if (slopes) basePrice += 4000;

    return Math.round(basePrice);
  };

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'calculator', label: 'Калькулятор', icon: 'Calculator' },
    { id: 'catalog', label: 'Каталог', icon: 'Grid3x3' },
    { id: 'portfolio', label: 'Портфолио', icon: 'Images' },
    { id: 'reviews', label: 'Отзывы', icon: 'Star' },
    { id: 'about', label: 'О компании', icon: 'Building2' },
    { id: 'contacts', label: 'Контакты', icon: 'MapPin' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
                <Icon name="Home" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ОкнаПро
                </h1>
                <p className="text-xs text-muted-foreground">Окна ПВХ премиум-класса</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </Button>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2 animate-fade-in">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className="gap-2 justify-start"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </Button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section id="home" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 text-sm px-4 py-1">№1 на рынке окон ПВХ</Badge>
              <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Окна ПВХ
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  нового поколения
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Энергоэффективные окна с гарантией 25 лет. Бесплатный замер и монтаж за 1 день.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('calculator')} className="gap-2 text-lg">
                  <Icon name="Calculator" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('catalog')} className="gap-2 text-lg">
                  <Icon name="Grid3x3" size={20} />
                  Каталог окон
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">25</div>
                  <div className="text-sm text-muted-foreground">лет гарантии</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/85125b3c-a5c7-4415-912b-9e85681c80ed/files/1be86c2f-4eb0-4160-bf0c-e86e954c8a90.jpg"
                alt="Современные окна ПВХ"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {[
              { icon: 'Shield', title: 'Гарантия 25 лет', desc: 'На все работы и материалы' },
              { icon: 'Zap', title: 'Монтаж за 1 день', desc: 'Быстро и качественно' },
              { icon: 'ThermometerSnowflake', title: 'Энергосбережение', desc: 'Экономия до 40% на отоплении' },
              { icon: 'BadgeCheck', title: 'Сертификаты', desc: 'ISO 9001 и ГОСТ' },
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Калькулятор стоимости</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Рассчитайте стоимость окна</h2>
            <p className="text-xl text-muted-foreground">Узнайте точную цену за 2 минуты</p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-xl border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base mb-3 block">Ширина окна (мм): {width}</Label>
                    <Slider
                      value={[width]}
                      onValueChange={(val) => setWidth(val[0])}
                      min={600}
                      max={2400}
                      step={100}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>600 мм</span>
                      <span>2400 мм</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block">Высота окна (мм): {height}</Label>
                    <Slider
                      value={[height]}
                      onValueChange={(val) => setHeight(val[0])}
                      min={800}
                      max={2200}
                      step={100}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>800 мм</span>
                      <span>2200 мм</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block">Профиль</Label>
                    <Select value={profile} onValueChange={setProfile}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандарт (3-камерный)</SelectItem>
                        <SelectItem value="premium">Премиум (5-камерный)</SelectItem>
                        <SelectItem value="elite">Элит (7-камерный)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block">Стеклопакет</Label>
                    <Select value={glass} onValueChange={setGlass}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="double">Двухкамерный</SelectItem>
                        <SelectItem value="triple">Трёхкамерный</SelectItem>
                        <SelectItem value="energy">Энергосберегающий</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label className="text-base mb-4 block">Дополнительные опции</Label>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="mosquito"
                          checked={mosquitoNet}
                          onCheckedChange={(checked) => setMosquitoNet(checked as boolean)}
                        />
                        <label htmlFor="mosquito" className="text-sm cursor-pointer flex-1">
                          Москитная сетка (+2 500 ₽)
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="sill"
                          checked={windowsill}
                          onCheckedChange={(checked) => setWindowsill(checked as boolean)}
                        />
                        <label htmlFor="sill" className="text-sm cursor-pointer flex-1">
                          Подоконник (+3 500 ₽)
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="slopes"
                          checked={slopes}
                          onCheckedChange={(checked) => setSlopes(checked as boolean)}
                        />
                        <label htmlFor="slopes" className="text-sm cursor-pointer flex-1">
                          Откосы (+4 000 ₽)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl border-2 border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">Размер окна:</span>
                      <span className="font-semibold">{width} × {height} мм</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-muted-foreground">Площадь:</span>
                      <span className="font-semibold">{((width * height) / 1000000).toFixed(2)} м²</span>
                    </div>
                    <div className="border-t-2 border-primary/20 pt-4 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Итоговая стоимость:</span>
                        <span className="text-3xl font-bold text-primary">{calculatePrice().toLocaleString()} ₽</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Заказать окно
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Каталог продукции</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Типы окон</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальное решение для вашего дома</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Одностворчатое',
                desc: 'Классическое решение для небольших проёмов',
                price: 'от 12 000 ₽',
                icon: 'Square',
                features: ['1 створка', 'Поворотное открывание', 'Компактное'],
              },
              {
                title: 'Двустворчатое',
                desc: 'Популярный вариант для жилых помещений',
                price: 'от 18 000 ₽',
                icon: 'LayoutGrid',
                features: ['2 створки', 'Поворотно-откидное', 'Универсальное'],
              },
              {
                title: 'Трёхстворчатое',
                desc: 'Для больших проёмов и панорамных видов',
                price: 'от 25 000 ₽',
                icon: 'Columns3',
                features: ['3 створки', 'Максимум света', 'Панорамное'],
              },
              {
                title: 'Балконная дверь',
                desc: 'Надёжный выход на балкон или лоджию',
                price: 'от 22 000 ₽',
                icon: 'DoorOpen',
                features: ['Усиленная створка', 'Порог/без порога', 'Тёплое'],
              },
              {
                title: 'Раздвижное',
                desc: 'Экономия пространства для балконов',
                price: 'от 28 000 ₽',
                icon: 'ArrowLeftRight',
                features: ['Экономия места', 'Плавное открывание', 'Современное'],
              },
              {
                title: 'Арочное',
                desc: 'Эксклюзивная форма для особых проектов',
                price: 'от 35 000 ₽',
                icon: 'Orbit',
                features: ['Любая форма', 'Индивидуальный дизайн', 'Премиум'],
              },
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button size="sm" variant="outline">Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши работы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Портфолио проектов</h2>
            <p className="text-xl text-muted-foreground">Более 5000 установленных окон по всей России</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: 'https://cdn.poehali.dev/projects/85125b3c-a5c7-4415-912b-9e85681c80ed/files/30fe95aa-3c7b-45cb-9d21-6903cade6a51.jpg',
                title: 'Загородный дом',
                desc: 'Панорамные окна, 120 м²',
                type: 'Трёхстворчатые окна',
              },
              {
                img: 'https://cdn.poehali.dev/projects/85125b3c-a5c7-4415-912b-9e85681c80ed/files/1be86c2f-4eb0-4160-bf0c-e86e954c8a90.jpg',
                title: 'Квартира в новостройке',
                desc: 'Комплексное остекление, 85 м²',
                type: 'Двустворчатые окна',
              },
              {
                img: 'https://cdn.poehali.dev/projects/85125b3c-a5c7-4415-912b-9e85681c80ed/files/924c2cc7-ec74-4be9-bc33-6cae42c2cdd1.jpg',
                title: 'Офисный центр',
                desc: 'Коммерческое остекление, 300 м²',
                type: 'Алюминиевые системы',
              },
            ].map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 right-4">{item.type}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground">Более 500 отзывов на независимых площадках</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна Петрова',
                role: 'Владелица квартиры',
                text: 'Отличная работа! Установили окна за день, всё чисто и аккуратно. Теперь дома стало гораздо теплее, экономия на отоплении заметна уже в первый месяц.',
                rating: 5,
              },
              {
                name: 'Дмитрий Соколов',
                role: 'Владелец загородного дома',
                text: 'Заказывали панорамные окна для загородного дома. Качество на высоте, профессиональный монтаж. Особенно порадовала гарантия 25 лет.',
                rating: 5,
              },
              {
                name: 'Елена Морозова',
                role: 'Менеджер офисного центра',
                text: 'Остеклили весь офис. Работали быстро, не мешали сотрудникам. Окна выглядят современно, отлично держат тепло. Рекомендуем!',
                rating: 5,
              },
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {item.name[0]}
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">15 лет заботимся о вашем комфорте</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ОкнаПро — ведущий производитель и установщик окон ПВХ в России. Мы используем только сертифицированные материалы
                европейского качества и предоставляем полный цикл услуг от замера до монтажа.
              </p>
              <div className="space-y-4">
                {[
                  'Собственное производство с контролем качества',
                  'Команда сертифицированных монтажников',
                  'Бесплатный замер и консультация дизайнера',
                  'Гарантия 25 лет на все работы',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-1">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/85125b3c-a5c7-4415-912b-9e85681c80ed/files/924c2cc7-ec74-4be9-bc33-6cae42c2cdd1.jpg"
                alt="О компании"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Ответим на все вопросы и запишем на бесплатный замер</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Телефон</h3>
                <a href="tel:+78005551234" className="text-primary text-xl font-semibold hover:underline">
                  +7 (800) 555-12-34
                </a>
                <p className="text-sm text-muted-foreground mt-2">Звонок бесплатный</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a href="mailto:info@oknapro.ru" className="text-primary text-xl font-semibold hover:underline">
                  info@oknapro.ru
                </a>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">
                  г. Москва, ул. Промышленная, д. 15
                </p>
                <p className="text-sm text-muted-foreground mt-2">Пн-Вс: 9:00 - 21:00</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto mt-12 shadow-xl border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Заказать бесплатный замер</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="address">Адрес замера</Label>
                  <Input id="address" placeholder="г. Москва, ул. Примерная, д. 1" />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
                  <Icon name="Home" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ОкнаПро</span>
              </div>
              <p className="text-gray-400 text-sm">
                Окна ПВХ премиум-класса с гарантией 25 лет
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('catalog')} className="hover:text-white transition-colors">
                    Типы окон
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('calculator')} className="hover:text-white transition-colors">
                    Калькулятор
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">
                    Портфолио
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                    О нас
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">
                    Отзывы
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-12-34
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@oknapro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ОкнаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
