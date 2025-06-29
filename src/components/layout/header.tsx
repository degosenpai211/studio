'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

export function Header({ title, showBackButton = false }: HeaderProps) {
  const router = useRouter();

  return (
    <header 
      className="sticky top-0 z-10 grid h-16 grid-cols-[1fr_auto_1fr] items-center border-b bg-background px-4 shrink-0"
    >
      <div className="flex items-center justify-start">
        {showBackButton && (
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="h-9 w-9">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Atrás</span>
          </Button>
        )}
      </div>
      
      <h1 className="text-lg font-bold font-headline text-center">
        {title}
      </h1>
      
      <div className="flex items-center justify-end gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <User className="h-5 w-5" />
              <span className="sr-only">Perfil</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <p className="font-medium">Jane Doe</p>
              <p className="text-xs text-muted-foreground font-normal">jane.doe@example.com</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Configuración</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button asChild variant="ghost" size="icon" className="h-9 w-9">
          <Link href="/map">
            <Map className="h-5 w-5" />
            <span className="sr-only">Mapa</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
