'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getPersonalizedInstructions, PersonalizedInstructionsOutput } from '@/ai/flows/personalized-instructions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Loader2, Bot } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  medicalQuestion: z.string().min(10, 'Please ask a question with at least 10 characters.'),
});

export default function AiAssistantPage() {
  const [result, setResult] = useState<PersonalizedInstructionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { medicalQuestion: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await getPersonalizedInstructions({ medicalQuestion: values.medicalQuestion });
      setResult(res);
    } catch (e) {
      setError('An error occurred while fetching instructions. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <Header title="AI Medical Assistant" showBackButton />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Ask a Medical Question</CardTitle>
            <CardDescription>Get personalized medical instructions from our AI assistant.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="medicalQuestion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Question</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., What are the best ways to manage seasonal allergies?"
                          className="resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Get Instructions
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {result && (
          <Card>
            <CardHeader className="flex-row items-center gap-3 space-y-0">
               <div className="bg-primary/10 p-2 rounded-full">
                 <Bot className="h-6 w-6 text-primary" />
               </div>
               <CardTitle>Personalized Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">
                {result.instructions}
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
