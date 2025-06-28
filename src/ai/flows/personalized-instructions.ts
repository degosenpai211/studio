// src/ai/flows/personalized-instructions.ts
'use server';
/**
 * @fileOverview A flow to provide personalized medical instructions based on a user's medical question.
 *
 * - getPersonalizedInstructions - A function that takes a medical question and returns personalized medical instructions.
 * - PersonalizedInstructionsInput - The input type for the getPersonalizedInstructions function.
 * - PersonalizedInstructionsOutput - The return type for the getPersonalizedInstructions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedInstructionsInputSchema = z.object({
  medicalQuestion: z
    .string()
    .describe('The medical question the user is asking.'),
});
export type PersonalizedInstructionsInput = z.infer<
  typeof PersonalizedInstructionsInputSchema
>;

const PersonalizedInstructionsOutputSchema = z.object({
  instructions: z
    .string()
    .describe('Personalized medical instructions for the user.'),
});
export type PersonalizedInstructionsOutput = z.infer<
  typeof PersonalizedInstructionsOutputSchema
>;

export async function getPersonalizedInstructions(
  input: PersonalizedInstructionsInput
): Promise<PersonalizedInstructionsOutput> {
  return personalizedInstructionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedInstructionsPrompt',
  input: {schema: PersonalizedInstructionsInputSchema},
  output: {schema: PersonalizedInstructionsOutputSchema},
  prompt: `You are a medical assistant providing personalized medical instructions to users based on their questions.

  Question: {{{medicalQuestion}}}

  Instructions:`,
});

const personalizedInstructionsFlow = ai.defineFlow(
  {
    name: 'personalizedInstructionsFlow',
    inputSchema: PersonalizedInstructionsInputSchema,
    outputSchema: PersonalizedInstructionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
