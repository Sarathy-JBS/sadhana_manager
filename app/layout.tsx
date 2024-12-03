import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Form</Link> | <Link href="/sadhana">View Data</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
