import { Navbar, Footer } from "@/app/components"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  )
}