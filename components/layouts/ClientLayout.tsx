import { Footer, Header } from "@/components";

type Props = {
  children: React.ReactNode
}
export default function ClientLayout({children}: Props) {
  return <>
    <Header/>
    {children}
    <Footer/>
  </>
}
