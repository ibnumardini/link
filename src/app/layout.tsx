import "./globals.css";

export const metadata = {
  title: "Link Bio",
  description: "My personal link bio page",
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
