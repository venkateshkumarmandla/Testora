export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</> // ✅ No <html> or <body> here
}
