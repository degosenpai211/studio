import Link from 'next/link';
import { healthTopics } from '@/lib/data';
import { Header } from '@/components/layout/header';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

export default function HealthEducationPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Educación sobre Salud" showBackButton />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="space-y-3">
          {healthTopics.map((topic) => {
            const Icon = Icons[topic.icon as IconName] || Icons.BookOpen;
            return (
              <Link href={`/health-education/${topic.slug}`} key={topic.slug}>
                <Card className="hover:bg-accent/50 transition-colors">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">{topic.title}</h3>
                        <p className="text-muted-foreground text-sm">{topic.summary}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  );
}
