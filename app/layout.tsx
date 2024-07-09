import './assets/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'


export const metadata = {
  title: "Next.js + TypeScript",
  description: "Find your rental property",
  keywords: ["nextjs", "typescript", "template"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}