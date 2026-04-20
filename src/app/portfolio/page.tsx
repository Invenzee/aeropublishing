import PortfolioPageClient from './PortfolioPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Portfolio – Books Published by Aero Authors",
  description: "Browse books published by Aero Publishing. See real author success stories, professional designs, and completed projects across multiple genres.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}