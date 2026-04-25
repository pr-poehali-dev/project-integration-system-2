export function ItalyHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Italian flag animated */}
      <div className="absolute top-24 right-8 md:right-16 z-20 flex shadow-2xl rounded overflow-hidden w-20 h-14 md:w-32 md:h-20">
        <div className="flex-1 bg-[#009246] animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="flex-1 bg-white border-x border-gray-200" />
        <div className="flex-1 bg-[#CE2B37] animate-pulse" style={{ animationDuration: "3s" }} />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-100/60 via-white/40 to-red-100/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <div className="flex justify-center gap-2 text-4xl md:text-5xl mb-4">
            <span>🇮🇹</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance">
            Добро пожаловать в
            <span className="block font-semibold mt-2 text-[#009246]">Италию</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Страна, где каждый уголок — это шедевр. Италия манит своими древними руинами, романтичными каналами Венеции, непревзойдённой кухней и бескрайними виноградниками Тосканы. Здесь история встречается с современностью, а каждый закат превращается в картину.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8 text-left">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-semibold mb-1">Вечный Рим</h3>
              <p className="text-sm text-muted-foreground">Колизей, Ватикан и тысячи лет истории под открытым небом</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-red-100">
              <div className="text-3xl mb-3">🍕</div>
              <h3 className="font-semibold mb-1">Кулинарный рай</h3>
              <p className="text-sm text-muted-foreground">Пицца, паста, тирамису — итальянская кухня покорила весь мир</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold mb-1">Искусство везде</h3>
              <p className="text-sm text-muted-foreground">Микеланджело, Леонардо да Винчи — родина величайших гениев</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="#sights" className="inline-flex items-center gap-2 bg-[#009246] text-white hover:bg-[#007a3a] rounded-full px-8 h-14 text-base font-medium transition-colors">
              Смотреть достопримечательности
            </a>
            <a href="#fashion" className="inline-flex items-center gap-2 border-2 border-[#CE2B37] text-[#CE2B37] hover:bg-[#CE2B37] hover:text-white rounded-full px-8 h-14 text-base font-medium transition-colors bg-transparent">
              Мода Италии
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">58 млн</div>
            <div className="text-sm text-muted-foreground">Туристов в год</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">58</div>
            <div className="text-sm text-muted-foreground">Объектов ЮНЕСКО</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">4.9</div>
            <div className="text-sm text-muted-foreground">Рейтинг путешествий</div>
          </div>
        </div>
      </div>
    </section>
  )
}
