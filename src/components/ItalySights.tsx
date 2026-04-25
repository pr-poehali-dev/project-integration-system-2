const sights = [
  {
    name: "Колизей",
    city: "Рим",
    image: "https://cdn.poehali.dev/projects/a1908fca-8277-4c10-adbe-8b4caf66ad25/files/5bca75f7-852e-4b2d-91bc-d57d01eaaefd.jpg",
    description: "Величественный амфитеатр, символ Вечного города и всей Римской империи",
  },
  {
    name: "Венецианские каналы",
    city: "Венеция",
    image: "https://cdn.poehali.dev/projects/a1908fca-8277-4c10-adbe-8b4caf66ad25/files/54715aaa-7aff-46a1-a1bc-edb92fb8cb8b.jpg",
    description: "Романтичный город на воде с гондолами и средневековой архитектурой",
  },
  {
    name: "Амальфитанское побережье",
    city: "Амальфи",
    image: "https://cdn.poehali.dev/projects/a1908fca-8277-4c10-adbe-8b4caf66ad25/files/4c261684-454c-4e92-8d79-94efac955304.jpg",
    description: "Живописные деревушки на скалах над лазурным Средиземным морем",
  },
  {
    name: "Собор Санта-Мария-дель-Фьоре",
    city: "Флоренция",
    image: "https://cdn.poehali.dev/projects/a1908fca-8277-4c10-adbe-8b4caf66ad25/files/e9cd8632-b5d9-4b55-8933-503c8988fbe3.jpg",
    description: "Кафедральный собор Флоренции — жемчужина итальянского Ренессанса",
  },
  {
    name: "Чинкве-Терре",
    city: "Лигурия",
    image: "https://cdn.poehali.dev/projects/a1908fca-8277-4c10-adbe-8b4caf66ad25/files/dc58be40-7ec7-4359-b896-3f73341c66f9.jpg",
    description: "Пять разноцветных деревень на скалах — объект Всемирного наследия ЮНЕСКО",
  },
  {
    name: "Фонтан Треви",
    city: "Рим",
    image: "https://cdn.poehali.dev/projects/a1908fca-8277-4c10-adbe-8b4caf66ad25/files/5e09dfff-7c26-46cd-a9a5-487c5996679c.jpg",
    description: "Величественный барочный фонтан — бросьте монетку и загадайте желание",
  },
]

export function ItalySights() {
  return (
    <section id="sights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Популярные <span className="font-semibold text-[#009246]">достопримечательности</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Места, которые нужно увидеть хотя бы раз в жизни — каждое из них хранит тысячи лет истории
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sights.map((sight) => (
            <a
              key={sight.name}
              href="https://aviasales.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={sight.image}
                  alt={sight.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider opacity-80 mb-1">{sight.city}</p>
                  <h3 className="text-xl font-semibold">{sight.name}</h3>
                </div>
              </div>
              <div className="bg-white p-5">
                <p className="text-sm text-muted-foreground mb-4">{sight.description}</p>
                <div className="flex items-center justify-center gap-2 bg-[#CE2B37] text-white rounded-full py-3 px-6 font-medium text-sm group-hover:bg-[#a82229] transition-colors">
                  ✈️ Нажми чтобы отправиться и увидеть вживую
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
