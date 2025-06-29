'use client';

import { useState } from 'react';

// In a real app, this would be determined by user authentication
// and potentially a token. For now, we'll simulate it.
export type UserPlan = 'free' | 'premium';

export interface User {
  name: string;
  email: string;
  plan: UserPlan;
  // A real app would use a JWT or similar for security.
  // We're just representing it as a string here.
  token?: string; 
}

// This is a mock hook. In a real app, you'd fetch this from your backend
// using a secure token, or have it available in a context provider after login.
export function useUser() {
  const [user] = useState<User>({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    plan: 'free', // Change to 'premium' to test the premium view
    token: 'mock-jwt-token-for-demo-purposes'
  });

  return user;
}
