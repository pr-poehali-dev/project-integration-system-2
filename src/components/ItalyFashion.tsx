const fashionShows = [
  {
    title: "Неделя моды в Милане",
    image: "https://cdn.poehali.dev/projects/a1908fca-8277-4c10-adbe-8b4caf66ad25/files/180683e7-01b3-49ac-8e7e-45d4ea0759dd.jpg",
    caption: "Milano Fashion Week — главное событие мирового fashion-календаря",
  },
  {
    title: "Haute Couture",
    image: "https://cdn.poehali.dev/projects/a1908fca-8277-4c10-adbe-8b4caf66ad25/files/1dad7dc9-0891-44c9-9993-de08d303af8b.jpg",
    caption: "Итальянские дизайнеры задают тон мировой моде уже несколько веков",
  },
  {
    title: "Итальянский стиль",
    image: "https://cdn.poehali.dev/projects/a1908fca-8277-4c10-adbe-8b4caf66ad25/files/7d5180b7-262f-4a02-8452-0e7671ec30be.jpg",
    caption: "Versace, Gucci, Prada, Armani — легенды, рождённые в Италии",
  },
]

export function ItalyFashion() {
  return (
    <section id="fashion" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Италия — <span className="font-semibold text-[#CE2B37]">столица моды</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Милан — бесспорная столица мировой моды, где каждый сезон рождаются тренды, которые затем разлетаются по всему свету. Именно здесь Джанни Версаче, Миучча Прада и Джорджо Армани создали свои империи, навсегда изменив понятие о роскоши и стиле.
            </p>
            <p>
              Итальянская мода — это не просто одежда, это искусство. Безупречный крой, лучшие ткани, неповторимый вкус — всё это стало синонимом слова «итальянский». Неделя моды в Милане дважды в год собирает весь цвет мирового fashion-бизнеса: дизайнеров, фотографов, знаменитостей и журналистов со всего мира.
            </p>
            <p>
              Побывать в Италии и не посетить бутики на Via Montenapoleone или Via della Vigna Nuova — всё равно что побывать в Риме и не увидеть Колизей. Итальянский шопинг — это отдельное путешествие в мир красоты.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {fashionShows.map((item) => (
            <div key={item.title} className="group rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Легендарные итальянские бренды</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-2xl font-light text-gray-400">
            <span className="hover:text-gray-700 transition-colors cursor-default">GUCCI</span>
            <span className="hover:text-gray-700 transition-colors cursor-default">PRADA</span>
            <span className="hover:text-gray-700 transition-colors cursor-default">VERSACE</span>
            <span className="hover:text-gray-700 transition-colors cursor-default">ARMANI</span>
            <span className="hover:text-gray-700 transition-colors cursor-default">FENDI</span>
            <span className="hover:text-gray-700 transition-colors cursor-default">VALENTINO</span>
          </div>
        </div>

        {/* Contacts */}
        <div className="bg-gradient-to-r from-[#009246]/10 via-white to-[#CE2B37]/10 rounded-3xl p-10 md:p-16 text-center border border-gray-100 shadow-sm">
          <div className="text-5xl mb-4">📞</div>
          <h3 className="text-3xl font-semibold mb-3">Контакты для связи</h3>
          <p className="text-muted-foreground mb-6">Готовы помочь вам спланировать путешествие мечты в Италию</p>
          <div className="inline-flex flex-col items-center gap-2">
            <a
              href="tel:+79002997449"
              className="text-3xl md:text-4xl font-light text-[#009246] hover:text-[#007a3a] transition-colors tracking-wide"
            >
              +7 900 299 74 49
            </a>
            <span className="text-lg text-muted-foreground font-medium">Алиса</span>
          </div>
        </div>
      </div>
    </section>
  )
}
