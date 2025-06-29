'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { triageSymptoms, TriageSymptomsOutput } from '@/ai/flows/triage-symptoms';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  symptoms: z.string().min(10, 'Por favor, describe tus síntomas con al menos 10 caracteres.'),
});

export default function SymptomTriagePage() {
  const [result, setResult] = useState<TriageSymptomsOutput | null>(null);
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
      const res = await triageSymptoms({ symptoms: values.symptoms });
      setResult(res);
    } catch (e) {
      setError('Ocurrió un error al analizar los síntomas. Por favor, inténtalo de nuevo.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <Header title="Triaje de Síntomas" showBackButton />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Describe Tus Síntomas</CardTitle>
             <CardDescription>Ingresa tus síntomas a continuación y nuestra IA te proporcionará una lista de posibles condiciones.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="symptoms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Síntomas</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ej: Tengo fiebre alta, dolor de garganta y dolor de cabeza."
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
                  Analizar Síntomas
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
            <CardHeader>
              <CardTitle>Posibles Condiciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {result.map((condition, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold">{condition.condition}</h3>
                    <span className="text-sm font-medium text-primary">
                      {Math.round(condition.probability * 100)}%
                    </span>
                  </div>
                  <Progress value={condition.probability * 100} className="h-2" />
                  <p className="text-sm text-muted-foreground">{condition.explanation}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
