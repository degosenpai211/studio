import { BottomNav } from '@/components/layout/bottom-nav';

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1 h-full max-h-dvh">
      {children}
      <BottomNav />
    </div>
  );
}
