import { Metadata } from 'next';
import HomeClient from '@/components/pages/HomeClient';

export const metadata: Metadata = {
  title: 'Luxury Business Consulting Services UAE | The Royal Union',
  description: 'Discover premium luxury business consulting services in UAE. Strategic solutions for high-end enterprises. Partner with The Royal Union today.',
  keywords: 'luxury consulting UAE, business consulting Dubai, high-end advisory, elite consultancy',
  openGraph: {
    title: 'Luxury Business Consulting Services UAE | The Royal Union',
    description: 'Premium consultancy services for luxury businesses in UAE. Strategic solutions tailored to your brand.',
    url: 'https://theroyalunionuae.com',
    siteName: 'The Royal Union',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}

