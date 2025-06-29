import { BottomNav } from '@/components/layout/bottom-nav';
import { SosButton } from '@/components/layout/sos-button';
import { LocationProvider } from '@/components/location-provider';

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocationProvider>
      <div className="flex flex-col flex-1 h-full max-h-dvh">
        {children}
        <SosButton />
        <BottomNav />
      </div>
    </LocationProvider>
  );
}
