import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <span className="text-black font-bold text-lg tracking-tight">
                JS Freelance Tech
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Soporte técnico profesional para particulares y empresas. Calidad
              y transparencia garantizada.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:soporte@jsfreelance.tech"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} JS Freelance Tech. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 text-xs hover:text-black transition-colors"
            >
              Aviso Legal
            </a>
            <a
              href="#"
              className="text-gray-400 text-xs hover:text-black transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-gray-400 text-xs hover:text-black transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}



