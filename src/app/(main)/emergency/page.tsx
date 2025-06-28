import { emergencyInstructions } from '@/lib/data';
import { Header } from '@/components/layout/header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Siren } from 'lucide-react';

export default function EmergencyPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Emergency Instructions" showBackButton />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <Accordion type="single" collapsible className="w-full">
          {emergencyInstructions.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                   <Siren className="h-5 w-5 text-destructive" />
                   <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal list-inside space-y-2 pl-2 text-base">
                  {item.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
