import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
          </ThemeProvider>
      </body>
    </html>
  );
}