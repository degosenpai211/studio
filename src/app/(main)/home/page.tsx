import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Pill, BookOpen, Stethoscope, MapPin, Newspaper } from 'lucide-react';
import { Header } from '@/components/layout/header';

const features = [
  {
    title: 'Asistente Médico IA',
    href: '/ai-assistant',
    icon: Bot,
  },
  {
    title: 'Triaje de Síntomas',
    href: '/symptom-triage',
    icon: Stethoscope,
  },
  {
    title: 'Sugerencia de Medicamentos',
    href: '/medication-suggestion',
    icon: Pill,
  },
  {
    title: 'Educación sobre Salud',
    href: '/health-education',
    icon: BookOpen,
  },
  {
    title: 'Directorio de Salud',
    href: '/directory',
    icon: MapPin,
  },
  {
    title: 'Noticias de Salud',
    href: '/health-news',
    icon: Newspaper,
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Inicio" />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold font-headline">¡Bienvenido a AmyAI!</h2>
          <p className="text-muted-foreground">¿Cómo podemos ayudarte hoy?</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="block group">
              <Card className="h-full hover:bg-accent/50 transition-colors duration-200 hover:shadow-md active:scale-95">
                <CardHeader className="flex flex-col items-center text-center p-3">
                  <div className="bg-primary/10 p-3 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xs font-semibold">{feature.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
