'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Stethoscope, Bot, Siren, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/symptom-triage', label: 'Triage', icon: Stethoscope },
  { href: '/ai-assistant', label: 'Assistant', icon: Bot },
  { href: '/directory', label: 'Clinics', icon: MapPin },
  { href: '/emergency', label: 'Emergency', icon: Siren },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 left-0 right-0 mt-auto bg-background border-t border-border w-full">
      <div className="flex justify-around h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center text-center w-full pt-2 pb-1 transition-colors duration-200',
              pathname === item.href
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
            )}
          >
            <item.icon className="h-6 w-6 mb-1" strokeWidth={pathname === item.href ? 2.5 : 2} />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
