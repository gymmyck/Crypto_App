export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div style={{ height: "100px", background: "#456" }}></div>
      {children}
    </div>
  );
}
