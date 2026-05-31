export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'archived';

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status: EventStatus;
  marketing_url: string | null;
}
