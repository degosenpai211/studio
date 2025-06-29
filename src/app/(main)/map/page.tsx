import Image from 'next/image';
import { Header } from '@/components/layout/header';

export default function MapPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Mapa de Clínicas" showBackButton />
      <main className="flex-1">
        <Image
            src="https://placehold.co/600x800.png"
            alt="Mapa de clínicas cercanas"
            width={600}
            height={800}
            className="object-cover h-full w-full"
            data-ai-hint="map Santa Cruz Bolivia"
        />
      </main>
    </div>
  );
}
