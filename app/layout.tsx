
import "./assets/globals.css";

export const metadata = {
  title: "Next.js + TypeScript",
  description: "Find your rental property",
  keywords: ["nextjs", "typescript", "template"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
