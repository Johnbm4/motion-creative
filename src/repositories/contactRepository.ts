import type { ContactSubmission, ContactSubmissionInput } from '../types/contact';

const STORAGE_KEY = 'motion_contact_submissions';

function readAll(): ContactSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ContactSubmission[]) : [];
  } catch {
    return [];
  }
}

function writeAll(submissions: ContactSubmission[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
}

/** Mock repository — replace with Supabase insert later. */
export const contactRepository = {
  async save(input: ContactSubmissionInput): Promise<ContactSubmission> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const submission: ContactSubmission = {
      id: crypto.randomUUID(),
      ...input,
      createdAt: new Date().toISOString(),
    };

    const existing = readAll();
    writeAll([submission, ...existing]);

    return submission;
  },

  async getAll(): Promise<ContactSubmission[]> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return readAll();
  },
};
