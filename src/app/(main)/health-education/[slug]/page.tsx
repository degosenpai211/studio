import { healthTopics } from '@/lib/data';
import { Header } from '@/components/layout/header';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export async function generateStaticParams() {
  return healthTopics.map((topic) => ({
    slug: topic.slug,
  }));
}

export default function HealthTopicPage({ params }: { params: { slug: string } }) {
  const topic = healthTopics.find((t) => t.slug === params.slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="flex flex-col h-full">
      <Header title="Health Article" showBackButton />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">{topic.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
              {topic.content}
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
