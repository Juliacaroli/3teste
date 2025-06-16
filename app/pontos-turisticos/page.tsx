"use client"

import { useState } from "react"
import { MapPin, Clock, Camera, Mountain, Church, Ship, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const touristSpots = [
  {
    id: 1,
    name: "Morro do Cristo",
    category: "Mirante",
    description:
      "Mirante com vista panorâmica de 360° da cidade e baía. Local perfeito para contemplar o pôr do sol e fazer fotos incríveis da região.",
    image: "/placeholder.svg?height=300&width=400",
    coordinates: { lat: -25.8756, lng: -48.5689 },
    visitTime: "1-2 horas",
    difficulty: "Moderada",
    bestTime: "Pôr do sol (17h-19h)",
    highlights: ["Vista panorâmica", "Pôr do sol", "Fotografia", "Trilha"],
    tips: "Leve água e use calçados confortáveis. A subida tem cerca de 20 minutos de caminhada.",
    icon: Mountain,
  },
  {
    id: 2,
    name: "Igreja Matriz São Pedro",
    category: "Histórico",
    description:
      "Marco histórico da cidade construído em 1940, com arquitetura tradicional e importância cultural para a comunidade local.",
    image: "/placeholder.svg?height=300&width=400",
    coordinates: { lat: -25.8834, lng: -48.5756 },
    visitTime: "30 minutos",
    difficulty: "Fácil",
    bestTime: "Manhã (9h-11h)",
    highlights: ["Arquitetura histórica", "Arte sacra", "Cultura local", "Fotografia"],
    tips: "Respeite os horários de missa. Entrada gratuita, mas contribuições são bem-vindas.",
    icon: Church,
  },
  {
    id: 3,
    name: "Ferry Boat",
    category: "Transporte Histórico",
    description:
      "Travessia tradicional que conecta Guaratuba a Matinhos, oferecendo uma experiência única aos visitantes com vista da baía.",
    image: "/placeholder.svg?height=300&width=400",
    coordinates: { lat: -25.8798, lng: -48.5723 },
    visitTime: "30 minutos (travessia)",
    difficulty: "Fácil",
    bestTime: "Manhã (8h-10h)",
    highlights: ["Vista da baía", "Experiência histórica", "Transporte tradicional", "Fotografia"],
    tips: "Funciona de acordo com a maré. Consulte horários antes de ir. Leve documento.",
    icon: Ship,
  },
  {
    id: 4,
    name: "Baía de Guaratuba",
    category: "Natural",
    description:
      "Encontro do rio com o mar, formando uma paisagem única. Ideal para passeios de barco, pesca esportiva e contemplação.",
    image: "/placeholder.svg?height=300&width=400",
    coordinates: { lat: -25.8801, lng: -48.5712 },
    visitTime: "2-4 horas",
    difficulty: "Fácil",
    bestTime: "Manhã (7h-10h)",
    highlights: ["Encontro rio-mar", "Passeios de barco", "Pesca", "Vida marinha"],
    tips: "Contrate passeios com operadoras locais. Melhor época: março a novembro.",
    icon: MapPin,
  },
  {
    id: 5,
    name: "Mercado Municipal",
    category: "Cultural",
    description:
      "Centro de comércio local com produtos típicos, artesanatos e frutos do mar frescos. Experiência autêntica da cultura guaratubense.",
    image: "/placeholder.svg?height=300&width=400",
    coordinates: { lat: -25.8845, lng: -48.5734 },
    visitTime: "1 hora",
    difficulty: "Fácil",
    bestTime: "Manhã (6h-12h)",
    highlights: ["Produtos locais", "Artesanato", "Frutos do mar", "Cultura local"],
    tips: "Funciona principalmente pela manhã. Leve dinheiro em espécie para melhores preços.",
    icon: MapPin,
  },
  {
    id: 6,
    name: "Parque Nacional Saint-Hilaire",
    category: "Natural",
    description: "Área de preservação com trilhas ecológicas, cachoeiras e rica biodiversidade da Mata Atlântica.",
    image: "/placeholder.svg?height=300&width=400",
    coordinates: { lat: -25.8923, lng: -48.5456 },
    visitTime: "3-5 horas",
    difficulty: "Moderada a Difícil",
    bestTime: "Manhã (8h-12h)",
    highlights: ["Trilhas ecológicas", "Cachoeiras", "Mata Atlântica", "Observação de fauna"],
    tips: "Necessário guia local. Use repelente e leve água. Consulte condições climáticas.",
    icon: Mountain,
  },
]

const categories = ["Todos", "Mirante", "Histórico", "Natural", "Cultural", "Transporte Histórico"]

export default function PontosTuristicosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedSpot, setSelectedSpot] = useState<(typeof touristSpots)[0] | null>(null)

  const filteredSpots =
    selectedCategory === "Todos" ? touristSpots : touristSpots.filter((spot) => spot.category === selectedCategory)

  const copyCoordinates = (lat: number, lng: number) => {
    navigator.clipboard.writeText(`${lat}, ${lng}`)
  }

  const openInGoogleMaps = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank")
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-100 text-green-800"
      case "Moderada":
        return "bg-yellow-100 text-yellow-800"
      case "Moderada a Difícil":
        return "bg-orange-100 text-orange-800"
      case "Difícil":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Pontos Turísticos de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {" "}
              Guaratuba
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Explore os principais marcos históricos, mirantes e atrações naturais que fazem de Guaratuba um destino
            único no litoral paranaense.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                    : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist Spots Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpots.map((spot) => {
              const IconComponent = spot.icon
              return (
                <Card
                  key={spot.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={spot.image || "/placeholder.svg"}
                      alt={spot.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-800 hover:bg-white">
                        <IconComponent className="w-3 h-3 mr-1" />
                        {spot.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getDifficultyColor(spot.difficulty)}>{spot.difficulty}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{spot.name}</h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{spot.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">Tempo de visita:</span>
                        <span className="ml-1">{spot.visitTime}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Camera className="w-4 h-4 mr-2" />
                        <span className="font-medium">Melhor horário:</span>
                        <span className="ml-1">{spot.bestTime}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">Destaques:</h4>
                      <div className="flex flex-wrap gap-1">
                        {spot.highlights.slice(0, 3).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                      onClick={() => setSelectedSpot(spot)}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal for Tourist Spot Details */}
      <Dialog open={!!selectedSpot} onOpenChange={() => setSelectedSpot(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedSpot && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-800 flex items-center">
                  <selectedSpot.icon className="w-6 h-6 mr-2" />
                  {selectedSpot.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedSpot.image || "/placeholder.svg"}
                  alt={selectedSpot.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-emerald-100 text-emerald-800">{selectedSpot.category}</Badge>
                  <Badge className={getDifficultyColor(selectedSpot.difficulty)}>{selectedSpot.difficulty}</Badge>
                </div>

                <p className="text-slate-600 leading-relaxed">{selectedSpot.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-slate-500" />
                      <span className="font-medium">Tempo de visita:</span>
                      <span className="ml-1">{selectedSpot.visitTime}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Camera className="w-4 h-4 mr-2 text-slate-500" />
                      <span className="font-medium">Melhor horário:</span>
                      <span className="ml-1">{selectedSpot.bestTime}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Destaques:</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedSpot.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Dicas importantes:</h4>
                  <p className="text-sm text-slate-600">{selectedSpot.tips}</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Coordenadas:</h4>
                  <div className="flex items-center justify-between bg-white p-2 rounded border">
                    <span className="text-sm font-mono text-slate-600">
                      {selectedSpot.coordinates.lat}, {selectedSpot.coordinates.lng}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyCoordinates(selectedSpot.coordinates.lat, selectedSpot.coordinates.lng)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => openInGoogleMaps(selectedSpot.coordinates.lat, selectedSpot.coordinates.lng)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
