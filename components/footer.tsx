import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold">Turismo Guaratuba</h4>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Descubra as belezas naturais de Guaratuba, onde o mar encontra a mata atlântica em perfeita harmonia.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Contato</h5>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">(41) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">contato@turismoguaratuba.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">Centro, Guaratuba - PR</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Redes Sociais</h5>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-slate-300 hover:text-white hover:bg-blue-600">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-300 hover:text-white hover:bg-blue-600">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Siga-nos para acompanhar as novidades e dicas de turismo em Guaratuba.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2024 Turismo Guaratuba. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
