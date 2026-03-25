import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AvisoLegal from "@/pages/aviso-legal/AvisoLegal.tsx";
import Cookies from "@/pages/cookies/Cookies.tsx";
import Privacidad from "@/pages/privacidad/Privacidad.tsx";
import { Toaster } from "sonner";
import WhatsAppButton from "@/components/elements/WhatsAppButton.tsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>

      <Toaster />
      <WhatsAppButton />
    </>
  );
}