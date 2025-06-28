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
        title: 'Geolocation Error',
        description: 'Your browser does not support geolocation.',
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
            title: 'Emergency Alert Sent',
            description: 'Services notified of your location. Redirecting to instructions...',
          });
          setIsCalling(false);
          setIsConfirming(false);
          router.push('/emergency');
        }, 2000);
      },
      (error) => {
        toast({
          variant: 'destructive',
          title: 'Location Error',
          description: 'Could not get your location. Please enable location services.',
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
        className="fixed bottom-20 right-4 sm:right-6 h-16 w-16 rounded-full shadow-2xl z-40 animate-pulse"
        onClick={handleSosClick}
      >
        <Siren className="h-8 w-8" />
        <span className="sr-only">Emergency SOS</span>
      </Button>

      <AlertDialog open={isConfirming} onOpenChange={setIsConfirming}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Emergency SOS</AlertDialogTitle>
            <AlertDialogDescription>
              {isCalling
                ? 'Contacting emergency services and getting your location...'
                : 'Are you sure you need an ambulance? This will attempt to notify emergency services with your location.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {isCalling ? (
              <Button disabled className="w-full">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Contacting...
              </Button>
            ) : (
              <>
                <AlertDialogCancel onClick={() => setIsConfirming(false)}>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive hover:bg-destructive/90"
                  onClick={handleConfirmCall}
                >
                  Yes, I Need Help
                </AlertDialogAction>
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
