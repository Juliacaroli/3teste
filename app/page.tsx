"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Atualizar o array highlights removendo o item do mapa
const highlights = [
  {
    title: "Praias Paradisíacas",
    description: "Descubra as mais belas praias do litoral paranaense",
    href: "/praias",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Pontos Turísticos",
    description: "Explore os principais marcos e atrações da cidade",
    href: "/pontos-turisticos",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Gastronomia Local",
    description: "Saboreie os melhores pratos e restaurantes",
    href: "/gastronomia",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-orange-500 to-red-500",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Descubra
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              {" "}
              Guaratuba
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Onde o mar encontra a natureza exuberante do Paraná. Explore praias paradisíacas, paisagens deslumbrantes e
            a rica cultura local.
          </p>
          <Link href="/pontos-turisticos">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
            >
              Explorar Destinos
            </Button>
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Explore Guaratuba</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Clique nas seções abaixo para descobrir tudo o que nossa cidade tem a oferecer.
            </p>
          </div>

          {/* Atualizar o grid para usar grid-cols-3 em vez de grid-cols-4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Link key={index} href={item.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800">6+ Praias</h4>
              <p className="text-slate-600">
                Praias para todos os gostos, desde as mais movimentadas até as mais selvagens
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800">10+ Pontos Turísticos</h4>
              <p className="text-slate-600">Marcos históricos, mirantes e atrações naturais imperdíveis</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800">15+ Restaurantes</h4>
              <p className="text-slate-600">Gastronomia variada com frutos do mar frescos e pratos típicos</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
