export const metadata = {
  title: 'pageTitle',
  description: 'test sandbox2'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
