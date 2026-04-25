import { ItalyNavbar } from "@/components/ItalyNavbar"
import { ItalyHero } from "@/components/ItalyHero"
import { ItalySights } from "@/components/ItalySights"
import { ItalyFashion } from "@/components/ItalyFashion"

export default function Index() {
  return (
    <main className="min-h-screen">
      <ItalyNavbar />
      <ItalyHero />
      <ItalySights />
      <ItalyFashion />
    </main>
  )
}
