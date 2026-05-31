import type { PortfolioItemStatus } from './portfolio';

export interface MarketingItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  status: PortfolioItemStatus;
}
