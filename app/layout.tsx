import type { Metadata } from 'next';
import './globals.css';
import SharedNav from './components/SharedNav';
import SharedFooter from './components/SharedFooter';

export const metadata: Metadata = {
  title: 'JP Global - 3D Printing & Spanish Learning',
  description: 'JP 3D Printing services and interactive Spanish language lessons in one unified platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <SharedNav />
        {children}
        <SharedFooter />
      </body>
    </html>
  );
}
