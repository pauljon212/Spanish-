import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spanish Learn - Interactive Spanish Lessons',
  description: 'Learn Spanish with interactive lessons, vocabulary, and exercises. Free and fun!',
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
