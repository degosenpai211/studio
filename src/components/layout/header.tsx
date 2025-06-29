'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUser } from '@/hooks/use-user';
import { Badge } from '@/components/ui/badge';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

export function Header({ title, showBackButton = false }: HeaderProps) {
  const router = useRouter();
  const user = useUser();

  return (
    <header 
      className="sticky top-0 z-10 grid h-16 grid-cols-[auto_1fr_auto] items-center border-b bg-background px-4 shrink-0 gap-2"
    >
      <div className="flex items-center justify-start">
        {showBackButton ? (
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="h-9 w-9">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Atrás</span>
          </Button>
        ) : <div className='w-9'></div>}
      </div>
      
      <h1 className="text-lg font-bold font-headline text-center truncate">
        {title}
      </h1>
      
      <div className="flex items-center justify-end gap-1">
        <Button asChild variant="ghost" size="icon" className="h-9 w-9">
            <Link href="/premium">
                <Crown className="h-5 w-5 text-amber-500" />
                <span className="sr-only">Premium</span>
            </Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <User className="h-5 w-5" />
              <span className="sr-only">Perfil</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <p className="font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground font-normal">{user.email}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link href="/premium" className="w-full flex justify-between items-center cursor-pointer">
                    Plan
                    <Badge variant={user.plan === 'premium' ? 'default' : 'secondary'} className={user.plan === 'premium' ? 'bg-amber-500' : ''}>
                        {user.plan === 'premium' ? 'Premium' : 'Gratuito'}
                    </Badge>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Configuración</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
