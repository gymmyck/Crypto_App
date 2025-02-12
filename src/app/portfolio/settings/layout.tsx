export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div style={{ height: "100px", background: "orange" }}></div>
      {children}
    </div>
  );
}
