import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Pill, BookOpen, Stethoscope, Siren, MapPin } from 'lucide-react';
import { Header } from '@/components/layout/header';

const features = [
  {
    title: 'AI Medical Assistant',
    href: '/ai-assistant',
    icon: Bot,
  },
  {
    title: 'Symptom Triage',
    href: '/symptom-triage',
    icon: Stethoscope,
  },
  {
    title: 'Medication Suggestion',
    href: '/medication-suggestion',
    icon: Pill,
  },
  {
    title: 'Health Education',
    href: '/health-education',
    icon: BookOpen,
  },
  {
    title: 'Emergency Instructions',
    href: '/emergency',
    icon: Siren,
  },
  {
    title: 'Healthcare Directory',
    href: '/directory',
    icon: MapPin,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="SalvusAI" />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold font-headline">Welcome!</h2>
          <p className="text-muted-foreground">How can we help you today?</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="block group">
              <Card className="h-full hover:bg-accent/50 transition-colors duration-200 hover:shadow-md active:scale-95">
                <CardHeader className="flex flex-col items-center text-center p-4">
                  <div className="bg-primary/10 p-3 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
