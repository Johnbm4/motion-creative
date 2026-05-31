export interface Testimonial {
  id: string;
  quote: string;
  author_name: string;
  author_role: string;
  company: string | null;
  avatar_url: string | null;
}
