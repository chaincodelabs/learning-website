import './globals.css';

export const metadata = {
  title: 'Learning @ Chaincode Labs',
  description: '₿OSS Challenge – start your career in Bitcoin open source',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

