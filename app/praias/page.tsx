"use client"

import { Waves, Sun, Umbrella, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const beaches = [
  {
    id: 1,
    name: "Praia Central",
    description:
      "A principal praia de Guaratuba, com extensa faixa de areia dourada e mar calmo. Ideal para famílias com crianças e prática de esportes aquáticos.",
    image: "/placeholder.svg?height=300&width=500",
    features: ["Salva-vidas", "Estacionamento", "Restaurantes", "Aluguel de equipamentos"],
    difficulty: "Fácil",
    crowdLevel: "Alta",
    bestTime: "Manhã e tarde",
    activities: ["Natação", "Vôlei de praia", "Stand-up paddle", "Caminhada"],
  },
  {
    id: 2,
    name: "Praia de Caieiras",
    description:
      "Praia mais selvagem e preservada, cercada por vegetação nativa. Perfeita para quem busca tranquilidade e contato com a natureza.",
    image: "/placeholder.svg?height=300&width=500",
    features: ["Natureza preservada", "Trilhas", "Pesca", "Observação de aves"],
    difficulty: "Moderada",
    crowdLevel: "Baixa",
    bestTime: "Manhã",
    activities: ["Pesca", "Trilha ecológica", "Fotografia", "Relaxamento"],
  },
  {
    id: 3,
    name: "Praia do Morro",
    description:
      "Localizada próxima ao Morro do Cristo, oferece uma vista espetacular e ondas ideais para surf iniciante.",
    image: "/placeholder.svg?height=300&width=500",
    features: ["Vista panorâmica", "Ondas para surf", "Trilha para o morro", "Pôr do sol"],
    difficulty: "Moderada",
    crowdLevel: "Média",
    bestTime: "Tarde",
    activities: ["Surf", "Escalada", "Contemplação", "Fotografia"],
  },
  {
    id: 4,
    name: "Praia Brejatuba",
    description:
      "Praia familiar com águas calmas e boa infraestrutura. Popular entre os locais e turistas que buscam comodidade.",
    image: "/placeholder.svg?height=300&width=500",
    features: ["Infraestrutura completa", "Águas calmas", "Playground", "Ciclovia"],
    difficulty: "Fácil",
    crowdLevel: "Média",
    bestTime: "Manhã e tarde",
    activities: ["Natação", "Ciclismo", "Playground", "Piquenique"],
  },
  {
    id: 5,
    name: "Praia do Coroados",
    description:
      "Praia extensa com formações rochosas interessantes. Ideal para longas caminhadas e coleta de conchas.",
    image: "/placeholder.svg?height=300&width=500",
    features: ["Formações rochosas", "Coleta de conchas", "Caminhadas", "Pesca de praia"],
    difficulty: "Fácil",
    crowdLevel: "Baixa",
    bestTime: "Manhã",
    activities: ["Caminhada", "Coleta de conchas", "Pesca", "Meditação"],
  },
  {
    id: 6,
    name: "Praia Alegre",
    description:
      "Pequena praia com ambiente descontraído e frequentada principalmente por jovens. Boa para socializar e praticar esportes.",
    image: "/placeholder.svg?height=300&width=500",
    features: ["Ambiente jovem", "Esportes de praia", "Música", "Food trucks"],
    difficulty: "Fácil",
    crowdLevel: "Alta",
    bestTime: "Tarde e noite",
    activities: ["Vôlei", "Futebol de areia", "Música", "Socialização"],
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Fácil":
      return "bg-green-100 text-green-800"
    case "Moderada":
      return "bg-yellow-100 text-yellow-800"
    case "Difícil":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getCrowdColor = (crowd: string) => {
  switch (crowd) {
    case "Baixa":
      return "bg-green-100 text-green-800"
    case "Média":
      return "bg-yellow-100 text-yellow-800"
    case "Alta":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function PraiasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Praias de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Guaratuba</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Descubra as mais belas praias do litoral paranaense, cada uma com sua personalidade única e belezas naturais
            incomparáveis.
          </p>
        </div>
      </section>

      {/* Beaches Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beaches.map((beach) => (
              <Card
                key={beach.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img
                      src={beach.image || "/placeholder.svg"}
                      alt={beach.name}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getDifficultyColor(beach.difficulty)}>{beach.difficulty}</Badge>
                      <Badge className={getCrowdColor(beach.crowdLevel)}>
                        <Users className="w-3 h-3 mr-1" />
                        {beach.crowdLevel}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="md:w-1/2 p-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{beach.name}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{beach.description}</p>

                    <div className="mb-4">
                      <div className="flex items-center text-sm text-slate-500 mb-2">
                        <Sun className="w-4 h-4 mr-2" />
                        <span className="font-medium">Melhor horário:</span>
                        <span className="ml-1">{beach.bestTime}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">Características:</h4>
                      <div className="flex flex-wrap gap-1">
                        {beach.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">Atividades:</h4>
                      <div className="flex flex-wrap gap-1">
                        {beach.activities.map((activity, index) => (
                          <Badge key={index} className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Guide Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Guia das Praias</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Informações importantes para aproveitar ao máximo sua visita às praias de Guaratuba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Condições do Mar</h4>
              <p className="text-slate-600 text-sm">
                Verifique sempre as condições do mar e respeite as orientações dos salva-vidas para sua segurança.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Proteção Solar</h4>
              <p className="text-slate-600 text-sm">
                Use protetor solar, chapéu e óculos escuros. O sol do litoral pode ser mais intenso que o esperado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Umbrella className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Infraestrutura</h4>
              <p className="text-slate-600 text-sm">
                Algumas praias possuem melhor infraestrutura que outras. Planeje-se de acordo com suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
