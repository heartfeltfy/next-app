import { Footer, Header } from "@/components";

export default function ClientLayout({children}: { children: React.ReactNode }) {
  return <>
    <Header/>
    {children}
    <Footer/>
  </>
}
