import { useState, useEffect } from "react"

export function ItalyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-xl">🇮🇹</span>
            <h1 className="text-2xl font-semibold tracking-tight">Italia</h1>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="text-sm font-medium text-foreground/70 hover:text-[#009246] transition-colors">
              Главная
            </a>
            <a href="#sights" className="text-sm font-medium text-foreground/70 hover:text-[#009246] transition-colors">
              Достопримечательности
            </a>
            <a href="#fashion" className="text-sm font-medium text-foreground/70 hover:text-[#009246] transition-colors">
              Мода
            </a>
            <a href="#fashion" className="text-sm font-medium text-foreground/70 hover:text-[#009246] transition-colors">
              Контакты
            </a>
          </div>

          <a
            href="https://aviasales.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#CE2B37] text-white hover:bg-[#a82229] rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
          >
            ✈️ Забронировать
          </a>

          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="text-2xl">{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-6 space-y-4">
            <a href="#" className="block text-base font-medium text-foreground/70 hover:text-[#009246]">Главная</a>
            <a href="#sights" className="block text-base font-medium text-foreground/70 hover:text-[#009246]">Достопримечательности</a>
            <a href="#fashion" className="block text-base font-medium text-foreground/70 hover:text-[#009246]">Мода</a>
            <a href="#fashion" className="block text-base font-medium text-foreground/70 hover:text-[#009246]">Контакты</a>
            <a
              href="https://aviasales.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#CE2B37] text-white hover:bg-[#a82229] rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              ✈️ Забронировать
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
