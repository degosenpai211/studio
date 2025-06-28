import { config } from 'dotenv';
config();

import '@/ai/flows/triage-symptoms.ts';
import '@/ai/flows/personalized-instructions.ts';
import '@/ai/flows/suggest-medication.ts';