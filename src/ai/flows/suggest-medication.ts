'use server';

/**
 * @fileOverview Medication suggestion flow.
 *
 * - suggestMedication - A function that suggests over-the-counter medications based on symptoms.
 * - SuggestMedicationInput - The input type for the suggestMedication function.
 * - SuggestMedicationOutput - The return type for the suggestMedication function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestMedicationInputSchema = z.object({
  symptoms: z
    .string()
    .describe('A description of the symptoms experienced by the user.'),
});
export type SuggestMedicationInput = z.infer<typeof SuggestMedicationInputSchema>;

const SuggestMedicationOutputSchema = z.object({
  medicationSuggestions: z
    .array(z.string())
    .describe('An array of suggested over-the-counter medications.'),
  disclaimer: z
    .string()
    .describe(
      'A disclaimer that the suggestions are not a substitute for professional medical advice.'
    ),
});
export type SuggestMedicationOutput = z.infer<typeof SuggestMedicationOutputSchema>;

export async function suggestMedication(input: SuggestMedicationInput): Promise<SuggestMedicationOutput> {
  return suggestMedicationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestMedicationPrompt',
  input: {schema: SuggestMedicationInputSchema},
  output: {schema: SuggestMedicationOutputSchema},
  prompt: `You are a helpful medical assistant that suggests over-the-counter medications based on symptoms.

  Suggest medications that can help with the following symptoms:

  Symptoms: {{{symptoms}}}

  Please provide a list of medication suggestions and a disclaimer that these suggestions are not a substitute for professional medical advice.`,
});

const suggestMedicationFlow = ai.defineFlow(
  {
    name: 'suggestMedicationFlow',
    inputSchema: SuggestMedicationInputSchema,
    outputSchema: SuggestMedicationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
