import Link from 'next/link';
import { healthNews } from '@/lib/data';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function HealthNewsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Health News" showBackButton />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Latest from ONS</CardTitle>
            <CardDescription>Updates on health and well-being.</CardDescription>
          </CardHeader>
        </Card>
        <div className="space-y-4">
          {healthNews.map((news) => (
            <Link href={news.href} key={news.id} className="block">
              <Card className="hover:bg-accent/50 transition-colors">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{news.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{news.summary}</p>
                  <p className="text-xs text-muted-foreground">{news.source} - {news.date}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
