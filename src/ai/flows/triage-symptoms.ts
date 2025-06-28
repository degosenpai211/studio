'use server';

/**
 * @fileOverview A symptom triage AI agent.
 *
 * - triageSymptoms - A function that handles the symptom triage process.
 * - TriageSymptomsInput - The input type for the triageSymptoms function.
 * - TriageSymptomsOutput - The return type for the triageSymptoms function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TriageSymptomsInputSchema = z.object({
  symptoms: z
    .string()
    .describe('A list of symptoms that the user is experiencing.'),
});
export type TriageSymptomsInput = z.infer<typeof TriageSymptomsInputSchema>;

const TriageSymptomsOutputSchema = z.array(z.object({
    condition: z.string().describe('The name of the medical condition.'),
    probability: z.number().describe('The probability of the condition being the cause of the symptoms, as a number between 0 and 1.'),
    explanation: z.string().describe('A short explanation of why the condition is likely given the symptoms.'),
}));
export type TriageSymptomsOutput = z.infer<typeof TriageSymptomsOutputSchema>;

export async function triageSymptoms(input: TriageSymptomsInput): Promise<TriageSymptomsOutput> {
  return triageSymptomsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'triageSymptomsPrompt',
  input: {schema: TriageSymptomsInputSchema},
  output: {schema: TriageSymptomsOutputSchema},
  prompt: `You are an expert medical professional specializing in diagnosing illnesses based on symptoms.

You will use this information to triage the symptoms, and provide a ranked list of likely causes.

Symptoms: {{{symptoms}}}

Provide the output as a JSON array.
`,
});

const triageSymptomsFlow = ai.defineFlow(
  {
    name: 'triageSymptomsFlow',
    inputSchema: TriageSymptomsInputSchema,
    outputSchema: TriageSymptomsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
