'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          // Location obtained, you could store it in a context or state management library
          // For now, we just confirm it's working.
        },
        (error) => {
          console.error('Geolocation error:', error);
          if (error.code === error.PERMISSION_DENIED) {
              toast({
                variant: 'destructive',
                title: 'Error de Ubicación',
                description: 'Se denegó el permiso de ubicación. Algunas funciones pueden no estar disponibles.',
              });
          } else {
            toast({
                variant: 'destructive',
                title: 'Error de Ubicación',
                description: 'No se pudo obtener tu ubicación.',
            });
          }
        }
      );
    } else {
        toast({
            variant: 'destructive',
            title: 'Error de Geolocalización',
            description: 'Tu navegador no soporta la geolocalización.',
        });
    }
  }, [toast]);

  return <>{children}</>;
}
