"use client"

import { useState } from "react"
import { Star, MapPin, Phone, Clock, Utensils, Fish, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const restaurants = [
  {
    id: 1,
    name: "Restaurante Maré Alta",
    category: "Frutos do Mar",
    rating: 4.8,
    price: "$$",
    image: "/placeholder.svg?height=250&width=400",
    description:
      "Especializado em frutos do mar frescos com vista para a baía. Famoso pelo camarão na moranga e moqueca de peixe.",
    address: "Av. Beira Mar, 123 - Centro",
    phone: "(41) 3472-1234",
    hours: "11h às 23h",
    specialties: ["Moqueca de Peixe", "Camarão na Moranga", "Casquinha de Caranguejo"],
    icon: Fish,
  },
  {
    id: 2,
    name: "Pizzaria Bella Vista",
    category: "Pizzaria",
    rating: 4.6,
    price: "$",
    image: "/placeholder.svg?height=250&width=400",
    description:
      "Pizzas artesanais com massa fina e ingredientes selecionados. Ambiente familiar com vista para o mar.",
    address: "Rua das Palmeiras, 456 - Brejatuba",
    phone: "(41) 3472-5678",
    hours: "18h às 24h",
    specialties: ["Pizza Margherita", "Pizza de Camarão", "Pizza Portuguesa"],
    icon: Utensils,
  },
  {
    id: 3,
    name: "Café da Praia",
    category: "Café & Lanches",
    rating: 4.7,
    price: "$",
    image: "/placeholder.svg?height=250&width=400",
    description: "Café aconchegante com vista para a praia. Serve cafés especiais, açaí e lanches naturais.",
    address: "Praia Central, s/n - Orla",
    phone: "(41) 3472-9012",
    hours: "6h às 22h",
    specialties: ["Açaí na Tigela", "Sanduíche Natural", "Café Especial"],
    icon: Coffee,
  },
  {
    id: 4,
    name: "Churrascaria Gaúcha",
    category: "Churrascaria",
    rating: 4.5,
    price: "$$",
    image: "/placeholder.svg?height=250&width=400",
    description: "Rodízio de carnes nobres com buffet completo. Ambiente climatizado e atendimento diferenciado.",
    address: "Av. 29 de Abril, 789 - Centro",
    phone: "(41) 3472-3456",
    hours: "11h30 às 15h / 18h30 às 23h",
    specialties: ["Picanha", "Costela", "Linguiça Artesanal"],
    icon: Utensils,
  },
  {
    id: 5,
    name: "Sorveteria Tropical",
    category: "Sorveteria",
    rating: 4.9,
    price: "$",
    image: "/placeholder.svg?height=250&width=400",
    description: "Sorvetes artesanais com sabores tropicais únicos. Especialidade em picolés de frutas regionais.",
    address: "Rua XV de Novembro, 321 - Centro",
    phone: "(41) 3472-7890",
    hours: "10h às 23h",
    specialties: ["Sorvete de Caju", "Picolé de Açaí", "Milk Shake Tropical"],
    icon: Coffee,
  },
  {
    id: 6,
    name: "Restaurante do Porto",
    category: "Comida Caseira",
    rating: 4.4,
    price: "$",
    image: "/placeholder.svg?height=250&width=400",
    description: "Comida caseira com tempero especial. Pratos fartos e preços acessíveis em ambiente familiar.",
    address: "Rua do Porto, 654 - Porto",
    phone: "(41) 3472-2468",
    hours: "11h às 15h / 17h às 22h",
    specialties: ["Peixe Grelhado", "Feijoada", "Moqueca de Camarão"],
    icon: Utensils,
  },
]

const categories = [
  "Todos",
  "Frutos do Mar",
  "Pizzaria",
  "Café & Lanches",
  "Churrascaria",
  "Sorveteria",
  "Comida Caseira",
]

export default function GastronomiaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredRestaurants =
    selectedCategory === "Todos"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Gastronomia de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              {" "}
              Guaratuba
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Descubra os sabores únicos da nossa cidade, desde frutos do mar frescos até pratos tradicionais paranaenses.
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
                    ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                    : "border-orange-200 text-orange-600 hover:bg-orange-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant) => {
              const IconComponent = restaurant.icon
              return (
                <Card
                  key={restaurant.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-800 hover:bg-white">
                        <IconComponent className="w-3 h-3 mr-1" />
                        {restaurant.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-500 text-white">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {restaurant.rating}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">{restaurant.name}</h3>
                      <span className="text-lg font-bold text-green-600">{restaurant.price}</span>
                    </div>

                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{restaurant.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {restaurant.address}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Phone className="w-4 h-4 mr-2" />
                        {restaurant.phone}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {restaurant.hours}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">Especialidades:</h4>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Sabores Únicos de Guaratuba</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Nossa gastronomia é uma mistura perfeita entre os frutos do mar frescos do litoral e os sabores tradicionais
            paranaenses. Cada restaurante oferece uma experiência única, desde pratos sofisticados até comida caseira
            com muito carinho.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Frutos do Mar Frescos</h4>
              <p className="text-slate-600 text-sm">Pescados diariamente por pescadores locais</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Pratos Tradicionais</h4>
              <p className="text-slate-600 text-sm">Receitas passadas de geração em geração</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Ambiente Acolhedor</h4>
              <p className="text-slate-600 text-sm">Hospitalidade típica do povo paranaense</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
