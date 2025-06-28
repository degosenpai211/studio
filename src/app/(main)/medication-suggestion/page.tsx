'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { suggestMedication, SuggestMedicationOutput } from '@/ai/flows/suggest-medication';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Loader2, Pill, TriangleAlert } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const formSchema = z.object({
  symptoms: z.string().min(10, 'Please describe your symptoms in at least 10 characters.'),
});

export default function MedicationSuggestionPage() {
  const [result, setResult] = useState<SuggestMedicationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { symptoms: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await suggestMedication({ symptoms: values.symptoms });
      setResult(res);
    } catch (e) {
      setError('An error occurred while suggesting medication. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <Header title="Medication Suggestion" showBackButton />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Get Medication Suggestions</CardTitle>
            <CardDescription>Describe your symptoms to get over-the-counter medication ideas.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="symptoms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Symptoms for Medication</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Runny nose, sneezing, and itchy eyes."
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
                  Suggest Medication
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
          <>
            <Card>
              <CardHeader className="flex-row items-center gap-3 space-y-0">
                 <div className="bg-primary/10 p-2 rounded-full">
                   <Pill className="h-6 w-6 text-primary" />
                 </div>
                 <CardTitle>Suggested OTC Medications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {result.medicationSuggestions.map((med, index) => (
                    <Badge key={index} variant="secondary" className="text-base py-1 px-3">
                      {med}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Alert>
              <TriangleAlert className="h-4 w-4" />
              <AlertTitle>Disclaimer</AlertTitle>
              <AlertDescription>{result.disclaimer}</AlertDescription>
            </Alert>
          </>
        )}
      </main>
    </div>
  );
}
