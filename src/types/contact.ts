export interface ContactSubmission {
  id: string;
  intent: string;
  details: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface ContactSubmissionInput {
  intent: string;
  details: string;
  name: string;
  email: string;
}
