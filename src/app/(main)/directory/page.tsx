'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { healthcareProviders } from '@/lib/data';
import { Header } from '@/components/layout/header';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Phone, Map } from 'lucide-react';

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProviders = useMemo(() => {
    if (!searchTerm) return healthcareProviders;
    return healthcareProviders.filter(
      (provider) =>
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="flex flex-col h-full">
      <Header title="Directorio de Salud" showBackButton />
      <div className="p-4 sm:p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar hospital o posta..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button asChild>
            <Link href="/map">
              <Map className="mr-2 h-4 w-4" />
              Ver Mapa
            </Link>
          </Button>
        </div>
      </div>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {filteredProviders.length > 0 ? (
          filteredProviders.map((provider) => (
            <Card key={provider.id} className="overflow-hidden hover:bg-accent/50 transition-colors">
              <CardContent className="p-4 flex gap-4 items-center">
                <Image
                  src={provider.image}
                  alt={provider.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                  data-ai-hint={provider.aiHint}
                />
                <div className="space-y-1 flex-1">
                  <h3 className="font-bold text-lg">{provider.name}</h3>
                  <p className="text-primary font-medium">{provider.specialty}</p>
                  <div className="text-muted-foreground text-sm flex items-start gap-1.5 pt-1">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{provider.address}</span>
                  </div>
                  <div className="text-muted-foreground text-sm flex items-center gap-1.5">
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>{provider.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-10 text-muted-foreground">
            <p>No se encontraron proveedores de salud.</p>
          </div>
        )}
      </main>
    </div>
  );
}
