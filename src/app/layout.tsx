import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Social links profile',
  description:
    'A responsive social links profile component built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Social Links Profile',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Social links profile',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/social-links-profile.git',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://social-links-profile-amber-chi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Social links profile',
    description:
      'A responsive social links profile component built for a Frontend Mentor challenge.',
    url: 'https://social-links-profile-amber-chi.vercel.app',
    siteName: 'Frontend Mentor | Social links profile',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1705487899/Challenges/uexlm4gqpyytruswkf8a.jpg',
        width: 1440,
        height: 960,
        alt: 'Social links profile desktop preview',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1705487899/Challenges/c8mc4u4e9vnoaejhjht1.jpg',
        width: 375,
        height: 812,
        alt: 'Social links profile mobile preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Social links profile',
    description:
      'A responsive social links profile component built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1705487899/Challenges/uexlm4gqpyytruswkf8a.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
