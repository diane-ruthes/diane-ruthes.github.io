import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

const FloatingWhatsApp = () => (
  <a
    href={whatsappLink("Olá Diane! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.")}
    target="_blank"
    rel="noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-green-soft hover:bg-green-mid text-white shadow-lg flex items-center justify-center transition-all hover:scale-105"
    style={{ boxShadow: "0 8px 24px hsl(147 41% 30% / 0.35)" }}
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default FloatingWhatsApp;
