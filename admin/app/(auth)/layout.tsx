export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center h-full w-full"

      >
        {children}
      </body>
    </html>
  );
}