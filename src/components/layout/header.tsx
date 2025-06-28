'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

export function Header({ title, showBackButton = false }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center border-b bg-background px-4 shrink-0">
      <div className="w-10">
      {showBackButton && (
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="h-9 w-9">
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
      )}
      </div>
      <h1 className="flex-1 text-lg font-bold font-headline text-center">{title}</h1>
      <div className="w-10"></div>
    </header>
  );
}
