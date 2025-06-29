'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Siren, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function SosButton() {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSosClick = () => {
    setIsConfirming(true);
  };

  const handleConfirmCall = () => {
    setIsCalling(true);

    if (!navigator.geolocation) {
      toast({
        variant: 'destructive',
        title: 'Error de Geolocalización',
        description: 'Tu navegador no soporta la geolocalización.',
      });
      setIsCalling(false);
      setIsConfirming(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Simulate call
        setTimeout(() => {
          toast({
            title: 'Alerta de Emergencia Enviada',
            description: 'Servicios notificados de tu ubicación. Redirigiendo a instrucciones...',
          });
          setIsCalling(false);
          setIsConfirming(false);
          router.push('/emergency');
        }, 2000);
      },
      (error) => {
        toast({
          variant: 'destructive',
          title: 'Error de Ubicación',
          description: 'No se pudo obtener tu ubicación. Por favor, activa los servicios de ubicación.',
        });
        console.error('Geolocation error:', error);
        setIsCalling(false);
        setIsConfirming(false);
      }
    );
  };

  return (
    <>
      <Button
        variant="destructive"
        size="icon"
        className="fixed bottom-20 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full shadow-2xl z-40 animate-pulse"
        onClick={handleSosClick}
      >
        <Siren className="h-7 w-7" />
        <span className="sr-only">SOS Emergencia</span>
      </Button>

      <AlertDialog open={isConfirming} onOpenChange={setIsConfirming}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>SOS Emergencia</AlertDialogTitle>
            <AlertDialogDescription>
              {isCalling
                ? 'Contactando a los servicios de emergencia y obteniendo tu ubicación...'
                : '¿Estás seguro de que necesitas una ambulancia? Esto intentará notificar a los servicios de emergencia con tu ubicación.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {isCalling ? (
              <Button disabled className="w-full">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Contactando...
              </Button>
            ) : (
              <>
                <AlertDialogCancel onClick={() => setIsConfirming(false)}>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive hover:bg-destructive/90"
                  onClick={handleConfirmCall}
                >
                  Sí, Necesito Ayuda
                </AlertDialogAction>
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
