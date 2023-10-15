import Hero from "../../components/hero"
import { Button } from "../../components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Hero></Hero>
      <div className="w-96 h-96 bg-gradient-linear "></div>
    </main>
  )
}
