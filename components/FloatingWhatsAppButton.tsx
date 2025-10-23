// components/FloatingWhatsAppButton.tsx
'use client'; // Marcamos como Client Component por padrão

import { MessageSquare } from 'lucide-react'; // Ícone genérico de mensagem (WhatsApp)
import { cn } from '@/lib/utils';

interface FloatingWhatsAppButtonProps {
  href?: string; // O link do WhatsApp é opcional
}

export function FloatingWhatsAppButton({ href }: FloatingWhatsAppButtonProps) {
  // Se não houver link no JSON, o botão não será renderizado
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-50", // Posição fixa no canto inferior direito
        "flex h-14 w-14 items-center justify-center rounded-full", // Tamanho e forma
        "bg-green-500 text-white", // Cores padrão do WhatsApp
        "shadow-lg", // Sombra para destaque
        "transition-transform duration-200 ease-in-out hover:scale-110", // Efeito de hover
        "focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2" // Estilos de foco para acessibilidade
      )}
    >
      <MessageSquare className="h-7 w-7" /> {/* Ajuste o tamanho do ícone se necessário */}
    </a>
  );
}