import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

export const metadata: Metadata = {
  title: 'SalvusAI Mobile',
  description: 'Your AI-powered medical assistant.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <main className="flex justify-center items-start min-h-screen bg-secondary/50">
          <div className="relative w-full max-w-lg bg-background flex flex-col min-h-dvh shadow-2xl">
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
