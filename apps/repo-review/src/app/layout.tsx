import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Repo Review - Repository Portfolio Management',
  description: 'Review and manage all your GitHub repositories with screenshots and PDF exports',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
