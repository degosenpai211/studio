'use client';

import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { useUser } from '@/hooks/use-user';
import { Badge } from '@/components/ui/badge';

export default function PremiumPage() {
  const user = useUser();

  const handleUpgrade = () => {
    // In a real app, this would trigger a payment flow
    alert('Redirigiendo a la pasarela de pago... (Simulación)');
  };

  return (
    <div className="flex flex-col h-full">
      <Header title="AmyAI Premium" showBackButton />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-center">
        <div className="space-y-2">
            <Sparkles className="h-12 w-12 text-primary mx-auto animate-pulse" />
            <h2 className="text-2xl font-bold font-headline">Desbloquea Todo el Potencial</h2>
            <p className="text-muted-foreground">
                {user.plan === 'premium' 
                    ? '¡Gracias por ser un miembro Premium!' 
                    : 'Actualiza a Premium para acceder a nuestras funciones más avanzadas.'}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle>Plan Gratuito</CardTitle>
                    <CardDescription>Tu plan actual</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                   <div className="flex items-start gap-3">
                       <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                       <span>Acceso a funciones básicas como directorio, noticias y asistente de IA.</span>
                   </div>
                   <div className="flex items-start gap-3">
                       <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                       <span>Instrucciones de emergencia y educación sobre salud.</span>
                   </div>
                   <div className="flex items-start gap-3">
                       <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                       <span className="text-muted-foreground">Triaje de Síntomas con IA</span>
                   </div>
                </CardContent>
            </Card>

            <Card className="border-amber-500 border-2 flex flex-col relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white">Más Popular</Badge>
                <CardHeader>
                    <CardTitle className="text-amber-500">Plan Premium</CardTitle>
                    <CardDescription>45 Bs. / mes</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                   <div className="flex items-start gap-3">
                       <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                       <span className="font-semibold">Todo lo del plan gratuito</span>
                   </div>
                    <div className="flex items-start gap-3">
                       <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                       <span className="font-semibold">Triaje de Síntomas con IA ilimitado</span>
                   </div>
                   <div className="flex items-start gap-3">
                       <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                       <span className="font-semibold">Mejoras en las respuestas de la IA</span>
                   </div>
                </CardContent>
            </Card>
        </div>
        
        {user.plan === 'free' && (
             <Button size="lg" className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white" onClick={handleUpgrade}>
                <Sparkles className="mr-2 h-5 w-5" />
                Actualizar a Premium
            </Button>
        )}
      </main>
    </div>
  );
}
