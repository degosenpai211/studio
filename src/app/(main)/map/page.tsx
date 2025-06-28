import Image from 'next/image';
import { Header } from '@/components/layout/header';

export default function MapPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Clinic Map" showBackButton />
      <main className="flex-1">
        <Image
            src="https://placehold.co/600x800.png"
            alt="Map of nearby clinics"
            width={600}
            height={800}
            className="object-cover h-full w-full"
            data-ai-hint="map"
        />
      </main>
    </div>
  );
}
