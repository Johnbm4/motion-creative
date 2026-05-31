import { contactRepository } from '../repositories/contactRepository';
import type { ContactSubmission, ContactSubmissionInput } from '../types/contact';

export type ContactServiceResult =
  | { data: ContactSubmission; error: null }
  | { data: null; error: string };

export async function submitContact(
  input: ContactSubmissionInput,
): Promise<ContactServiceResult> {
  if (!input.intent.trim() || !input.details.trim()) {
    return { data: null, error: 'Please complete each step before continuing.' };
  }

  if (!input.name.trim() || !input.email.trim()) {
    return { data: null, error: 'Name and email are required.' };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(input.email.trim())) {
    return { data: null, error: 'Please enter a valid email address.' };
  }

  try {
    const data = await contactRepository.save({
      intent: input.intent.trim(),
      details: input.details.trim(),
      name: input.name.trim(),
      email: input.email.trim(),
    });
    return { data, error: null };
  } catch {
    return { data: null, error: 'Something went wrong. Please try again.' };
  }
}
