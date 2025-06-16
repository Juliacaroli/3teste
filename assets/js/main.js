// Variáveis globais
let currentModal = null
let selectedCategory = "Todos"
const searchTerm = ""

// Dados dos restaurantes
const restaurants = [
  {
    id: 1,
    name: "Restaurante Maré Alta",
    category: "Frutos do Mar",
    rating: 4.8,
    price: "$$",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop",
    description:
      "Especializado em frutos do mar frescos com vista para a baía. Famoso pelo camarão na moranga e moqueca de peixe.",
    address: "Av. Beira Mar, 123 - Centro",
    phone: "(41) 3472-1234",
    hours: "11h às 23h",
    specialties: ["Moqueca de Peixe", "Camarão na Moranga", "Casquinha de Caranguejo"],
  },
  {
    id: 2,
    name: "Pizzaria Bella Vista",
    category: "Pizzaria",
    rating: 4.6,
    price: "$",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop",
    description:
      "Pizzas artesanais com massa fina e ingredientes selecionados. Ambiente familiar com vista para o mar.",
    address: "Rua das Palmeiras, 456 - Brejatuba",
    phone: "(41) 3472-5678",
    hours: "18h às 24h",
    specialties: ["Pizza Margherita", "Pizza de Camarão", "Pizza Portuguesa"],
  },
  {
    id: 3,
    name: "Café da Praia",
    category: "Café & Lanches",
    rating: 4.7,
    price: "$",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop",
    description: "Café aconchegante com vista para a praia. Serve cafés especiais, açaí e lanches naturais.",
    address: "Praia Central, s/n - Orla",
    phone: "(41) 3472-9012",
    hours: "6h às 22h",
    specialties: ["Açaí na Tigela", "Sanduíche Natural", "Café Especial"],
  },
  {
    id: 4,
    name: "Churrascaria Gaúcha",
    category: "Churrascaria",
    rating: 4.5,
    price: "$$",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop",
    description: "Rodízio de carnes nobres com buffet completo. Ambiente climatizado e atendimento diferenciado.",
    address: "Av. 29 de Abril, 789 - Centro",
    phone: "(41) 3472-3456",
    hours: "11h30 às 15h / 18h30 às 23h",
    specialties: ["Picanha", "Costela", "Linguiça Artesanal"],
  },
  {
    id: 5,
    name: "Sorveteria Tropical",
    category: "Sorveteria",
    rating: 4.9,
    price: "$",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=250&fit=crop",
    description: "Sorvetes artesanais com sabores tropicais únicos. Especialidade em picolés de frutas regionais.",
    address: "Rua XV de Novembro, 321 - Centro",
    phone: "(41) 3472-7890",
    hours: "10h às 23h",
    specialties: ["Sorvete de Caju", "Picolé de Açaí", "Milk Shake Tropical"],
  },
  {
    id: 6,
    name: "Restaurante do Porto",
    category: "Comida Caseira",
    rating: 4.4,
    price: "$",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
    description: "Comida caseira com tempero especial. Pratos fartos e preços acessíveis em ambiente familiar.",
    address: "Rua do Porto, 654 - Porto",
    phone: "(41) 3472-2468",
    hours: "11h às 15h / 17h às 22h",
    specialties: ["Peixe Grelhado", "Feijoada", "Moqueca de Camarão"],
  },
]

// Dados das praias
const beaches = [
  {
    id: 1,
    name: "Praia Central",
    description:
      "A principal praia de Guaratuba, com extensa faixa de areia dourada e mar calmo. Ideal para famílias com crianças e prática de esportes aquáticos.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=500&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1471756424749-5ca73b6e4e5a?w=500&h=300&fit=crop",
    features: ["Ambiente jovem", "Esportes de praia", "Música", "Food trucks"],
    difficulty: "Fácil",
    crowdLevel: "Alta",
    bestTime: "Tarde e noite",
    activities: ["Vôlei", "Futebol de areia", "Música", "Socialização"],
  },
]

// Dados dos pontos turísticos
const touristSpots = [
  {
    id: 1,
    name: "Morro do Cristo",
    category: "Mirante",
    description:
      "Mirante com vista panorâmica de 360° da cidade e baía. Local perfeito para contemplar o pôr do sol e fazer fotos incríveis da região.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8756, lng: -48.5689 },
    visitTime: "1-2 horas",
    difficulty: "Moderada",
    bestTime: "Pôr do sol (17h-19h)",
    highlights: ["Vista panorâmica", "Pôr do sol", "Fotografia", "Trilha"],
    tips: "Leve água e use calçados confortáveis. A subida tem cerca de 20 minutos de caminhada.",
  },
  {
    id: 2,
    name: "Igreja Matriz São Pedro",
    category: "Histórico",
    description:
      "Marco histórico da cidade construído em 1940, com arquitetura tradicional e importância cultural para a comunidade local.",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8834, lng: -48.5756 },
    visitTime: "30 minutos",
    difficulty: "Fácil",
    bestTime: "Manhã (9h-11h)",
    highlights: ["Arquitetura histórica", "Arte sacra", "Cultura local", "Fotografia"],
    tips: "Respeite os horários de missa. Entrada gratuita, mas contribuições são bem-vindas.",
  },
  {
    id: 3,
    name: "Ferry Boat",
    category: "Transporte Histórico",
    description:
      "Travessia tradicional que conecta Guaratuba a Matinhos, oferecendo uma experiência única aos visitantes com vista da baía.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8798, lng: -48.5723 },
    visitTime: "30 minutos (travessia)",
    difficulty: "Fácil",
    bestTime: "Manhã (8h-10h)",
    highlights: ["Vista da baía", "Experiência histórica", "Transporte tradicional", "Fotografia"],
    tips: "Funciona de acordo com a maré. Consulte horários antes de ir. Leve documento.",
  },
  {
    id: 4,
    name: "Baía de Guaratuba",
    category: "Natural",
    description:
      "Encontro do rio com o mar, formando uma paisagem única. Ideal para passeios de barco, pesca esportiva e contemplação.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8801, lng: -48.5712 },
    visitTime: "2-4 horas",
    difficulty: "Fácil",
    bestTime: "Manhã (7h-10h)",
    highlights: ["Encontro rio-mar", "Passeios de barco", "Pesca", "Vida marinha"],
    tips: "Contrate passeios com operadoras locais. Melhor época: março a novembro.",
  },
  {
    id: 5,
    name: "Mercado Municipal",
    category: "Cultural",
    description:
      "Centro de comércio local com produtos típicos, artesanatos e frutos do mar frescos. Experiência autêntica da cultura guaratubense.",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8845, lng: -48.5734 },
    visitTime: "1 hora",
    difficulty: "Fácil",
    bestTime: "Manhã (6h-12h)",
    highlights: ["Produtos locais", "Artesanato", "Frutos do mar", "Cultura local"],
    tips: "Funciona principalmente pela manhã. Leve dinheiro em espécie para melhores preços.",
  },
  {
    id: 6,
    name: "Parque Nacional Saint-Hilaire",
    category: "Natural",
    description: "Área de preservação com trilhas ecológicas, cachoeiras e rica biodiversidade da Mata Atlântica.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8923, lng: -48.5456 },
    visitTime: "3-5 horas",
    difficulty: "Moderada a Difícil",
    bestTime: "Manhã (8h-12h)",
    highlights: ["Trilhas ecológicas", "Cachoeiras", "Mata Atlântica", "Observação de fauna"],
    tips: "Necessário guia local. Use repelente e leve água. Consulte condições climáticas.",
  },
]

// Funções utilitárias
function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case "Fácil":
      return "badge-success"
    case "Moderada":
      return "badge-warning"
    case "Moderada a Difícil":
      return "badge-warning"
    case "Difícil":
      return "badge-danger"
    default:
      return "badge-secondary"
  }
}

function getCrowdColor(crowd) {
  switch (crowd) {
    case "Baixa":
      return "badge-success"
    case "Média":
      return "badge-warning"
    case "Alta":
      return "badge-danger"
    default:
      return "badge-secondary"
  }
}

function getCategoryIcon(category) {
  const icons = {
    Mirante: "🏔️",
    Histórico: "🏛️",
    Natural: "🌿",
    Cultural: "🎭",
    "Transporte Histórico": "⛵",
  }
  return icons[category] || "📍"
}

function copyCoordinates(lat, lng) {
  const text = `${lat}, ${lng}`
  navigator.clipboard.writeText(text).then(() => {
    alert("Coordenadas copiadas para a área de transferência!")
  })
}

function openInGoogleMaps(lat, lng) {
  window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank")
}

// Funções de modal
function openModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.add("active")
    currentModal = modal
    document.body.style.overflow = "hidden"
  }
}

function closeModal() {
  if (currentModal) {
    currentModal.classList.remove("active")
    currentModal = null
    document.body.style.overflow = "auto"
  }
}

// Funções de menu mobile
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu")
  const overlay = document.getElementById("overlay")

  if (menu && overlay) {
    menu.classList.toggle("active")
    overlay.classList.toggle("active")
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu")
  const overlay = document.getElementById("overlay")

  if (menu && overlay) {
    menu.classList.remove("active")
    overlay.classList.remove("active")
  }
}

// Funções de filtro
function setFilter(category, buttonElement) {
  selectedCategory = category

  // Atualizar botões ativos
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach((btn) => btn.classList.remove("active"))
  buttonElement.classList.add("active")

  // Aplicar filtro baseado na página atual
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  if (currentPage.includes("gastronomia")) {
    filterRestaurants()
  } else if (currentPage.includes("pontos-turisticos")) {
    filterTouristSpots()
  }
}

// Funções específicas das páginas
function filterRestaurants() {
  const filteredRestaurants =
    selectedCategory === "Todos"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === selectedCategory)

  const grid = document.getElementById("restaurantsGrid")
  if (!grid) return

  grid.innerHTML = ""

  filteredRestaurants.forEach((restaurant) => {
    const card = document.createElement("div")
    card.className = "card fade-in"
    card.innerHTML = `
      <div style="position: relative; overflow: hidden;">
        <img src="${restaurant.image}" alt="${restaurant.name}" class="card-image">
        <div style="position: absolute; top: 1rem; left: 1rem;">
          <span class="badge badge-primary">
            🍽️ ${restaurant.category}
          </span>
        </div>
        <div style="position: absolute; top: 1rem; right: 1rem;">
          <span class="badge" style="background: #fbbf24; color: white;">
            ⭐ ${restaurant.rating}
          </span>
        </div>
      </div>
      <div class="card-content">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
          <h3 class="card-title">${restaurant.name}</h3>
          <span style="font-size: 1.125rem; font-weight: bold; color: #059669;">${restaurant.price}</span>
        </div>
        <p class="card-description">${restaurant.description}</p>
        
        <div style="margin-bottom: 1rem;">
          <div style="display: flex; align-items: center; font-size: 0.875rem; color: #64748b; margin-bottom: 0.5rem;">
            📍 ${restaurant.address}
          </div>
          <div style="display: flex; align-items: center; font-size: 0.875rem; color: #64748b; margin-bottom: 0.5rem;">
            📞 ${restaurant.phone}
          </div>
          <div style="display: flex; align-items: center; font-size: 0.875rem; color: #64748b;">
            🕒 ${restaurant.hours}
          </div>
        </div>

        <div>
          <h4 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin-bottom: 0.5rem;">Especialidades:</h4>
          <div class="tags-container">
            ${restaurant.specialties.map((specialty) => `<span class="tag">${specialty}</span>`).join("")}
          </div>
        </div>
      </div>
    `
    grid.appendChild(card)
  })
}

function loadBeaches() {
  const grid = document.getElementById("beachesGrid")
  if (!grid) return

  grid.innerHTML = ""

  beaches.forEach((beach) => {
    const card = document.createElement("div")
    card.className = "card fade-in"
    card.innerHTML = `
      <div style="display: flex; flex-direction: column; min-height: 400px;">
        <div style="display: flex; flex-direction: column; flex: 1;">
          <div style="position: relative; overflow: hidden; flex: 1;">
            <img src="${beach.image}" alt="${beach.name}" class="card-image" style="height: 16rem;">
            <div style="position: absolute; top: 1rem; left: 1rem; display: flex; gap: 0.5rem;">
              <span class="badge ${getDifficultyColor(beach.difficulty)}">${beach.difficulty}</span>
              <span class="badge ${getCrowdColor(beach.crowdLevel)}">
                👥 ${beach.crowdLevel}
              </span>
            </div>
          </div>

          <div class="card-content" style="flex: 1; display: flex; flex-direction: column;">
            <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 0.75rem;">${beach.name}</h3>
            <p class="card-description" style="margin-bottom: 1rem; flex: 1;">${beach.description}</p>

            <div style="margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; font-size: 0.875rem; color: #64748b; margin-bottom: 0.5rem;">
                ☀️ <span style="font-weight: 500; margin-left: 0.5rem;">Melhor horário:</span>
                <span style="margin-left: 0.25rem;">${beach.bestTime}</span>
              </div>
            </div>

            <div style="margin-bottom: 1rem;">
              <h4 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin-bottom: 0.5rem;">Características:</h4>
              <div class="tags-container">
                ${beach.features.map((feature) => `<span class="tag">${feature}</span>`).join("")}
              </div>
            </div>

            <div>
              <h4 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin-bottom: 0.5rem;">Atividades:</h4>
              <div class="tags-container">
                ${beach.activities.map((activity) => `<span class="badge badge-primary" style="font-size: 0.75rem;">${activity}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    grid.appendChild(card)
  })
}

function filterTouristSpots() {
  const filteredSpots =
    selectedCategory === "Todos" ? touristSpots : touristSpots.filter((spot) => spot.category === selectedCategory)

  const grid = document.getElementById("spotsGrid")
  if (!grid) return

  grid.innerHTML = ""

  filteredSpots.forEach((spot) => {
    const card = document.createElement("div")
    card.className = "card fade-in"
    card.innerHTML = `
      <div style="position: relative; overflow: hidden;">
        <img src="${spot.image}" alt="${spot.name}" class="card-image">
        <div style="position: absolute; top: 1rem; left: 1rem;">
          <span class="badge badge-primary">
            ${getCategoryIcon(spot.category)} ${spot.category}
          </span>
        </div>
        <div style="position: absolute; top: 1rem; right: 1rem;">
          <span class="badge ${getDifficultyColor(spot.difficulty)}">${spot.difficulty}</span>
        </div>
      </div>

      <div class="card-content">
        <h3 class="card-title">${spot.name}</h3>
        <p class="card-description">${spot.description}</p>

        <div style="margin-bottom: 1rem;">
          <div style="display: flex; align-items: center; font-size: 0.875rem; color: #64748b; margin-bottom: 0.5rem;">
            🕒 <span style="font-weight: 500; margin-left: 0.5rem;">Tempo de visita:</span>
            <span style="margin-left: 0.25rem;">${spot.visitTime}</span>
          </div>
          <div style="display: flex; align-items: center; font-size: 0.875rem; color: #64748b;">
            📷 <span style="font-weight: 500; margin-left: 0.5rem;">Melhor horário:</span>
            <span style="margin-left: 0.25rem;">${spot.bestTime}</span>
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <h4 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin-bottom: 0.5rem;">Destaques:</h4>
          <div class="tags-container">
            ${spot.highlights
              .slice(0, 3)
              .map((highlight) => `<span class="tag">${highlight}</span>`)
              .join("")}
          </div>
        </div>

        <button class="btn btn-primary w-full" onclick="openSpotModal(${spot.id})" style="background: linear-gradient(to right, #10b981, #14b8a6); width: 100%;">
          📍 Ver Detalhes
        </button>
      </div>
    `
    grid.appendChild(card)
  })
}

function openSpotModal(spotId) {
  const spot = touristSpots.find((s) => s.id === spotId)
  if (!spot) return

  const modal = document.getElementById("spotModal")
  const modalTitle = document.getElementById("modalTitle")
  const modalBody = document.getElementById("modalBody")

  modalTitle.innerHTML = `${getCategoryIcon(spot.category)} ${spot.name}`

  modalBody.innerHTML = `
    <img src="${spot.image}" alt="${spot.name}" style="width: 100%; height: 16rem; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1.5rem;">

    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
      <span class="badge badge-primary">${spot.category}</span>
      <span class="badge ${getDifficultyColor(spot.difficulty)}">${spot.difficulty}</span>
    </div>

    <p style="color: #64748b; line-height: 1.6; margin-bottom: 1.5rem;">${spot.description}</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <div>
        <div style="display: flex; align-items: center; font-size: 0.875rem; margin-bottom: 0.5rem;">
          🕒 <span style="font-weight: 500; margin-left: 0.5rem;">Tempo de visita:</span>
          <span style="margin-left: 0.25rem;">${spot.visitTime}</span>
        </div>
        <div style="display: flex; align-items: center; font-size: 0.875rem;">
          📷 <span style="font-weight: 500; margin-left: 0.5rem;">Melhor horário:</span>
          <span style="margin-left: 0.25rem;">${spot.bestTime}</span>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-weight: 600; color: #1e293b; margin-bottom: 0.5rem;">Destaques:</h4>
      <div class="tags-container">
        ${spot.highlights.map((highlight) => `<span class="tag">${highlight}</span>`).join("")}
      </div>
    </div>

    <div class="coordinates-container" style="margin-bottom: 1.5rem;">
      <h4 style="font-weight: 600; color: #1e293b; margin-bottom: 0.5rem;">Dicas importantes:</h4>
      <p style="font-size: 0.875rem; color: #64748b;">${spot.tips}</p>
    </div>

    <div class="coordinates-container">
      <h4 style="font-weight: 600; color: #1e293b; margin-bottom: 0.5rem;">Coordenadas:</h4>
      <div class="coordinates-display">
        <span class="coordinates-text">${spot.coordinates.lat}, ${spot.coordinates.lng}</span>
        <button class="btn btn-outline btn-sm" onclick="copyCoordinates(${spot.coordinates.lat}, ${spot.coordinates.lng})">
          📋
        </button>
      </div>
    </div>

    <div style="display: flex; gap: 0.5rem; margin-top: 1.5rem;">
      <button class="btn btn-primary" onclick="openInGoogleMaps(${spot.coordinates.lat}, ${spot.coordinates.lng})" style="flex: 1; background: #10b981;">
        🔗 Ver no Google Maps
      </button>
    </div>
  `

  openModal("spotModal")
}

// Event listeners globais
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenuClose = document.getElementById("mobileMenuClose")
  const overlay = document.getElementById("overlay")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu)
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu)
  }

  if (overlay) {
    overlay.addEventListener("click", closeMobileMenu)
  }

  // Modal close
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal()
    }

    if (e.target.classList.contains("modal-close")) {
      closeModal()
    }
  })

  // ESC key para fechar modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentModal) {
      closeModal()
    }
  })

  // Inicializar página específica
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  if (currentPage.includes("gastronomia")) {
    filterRestaurants()
  } else if (currentPage.includes("praias")) {
    loadBeaches()
  } else if (currentPage.includes("pontos-turisticos")) {
    filterTouristSpots()
  }
})
