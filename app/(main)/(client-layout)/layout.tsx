'use client'
import ClientLayout from "@/components/layouts/ClientLayout";
import Link from "next/link";
import { useParams } from 'next/navigation'

type Props = {
  children: React.ReactNode
}
export default function Layout({children}: Props) {
  const params = useParams()
  console.log(params)
  return <ClientLayout>
    <div className="flex gap-2 p-2">
      <Link href={"/about"}>About</Link>
      <Link href={"/"}>Home</Link>
    </div>
    <div className="h-[200px] border box-border">{children}</div>
  </ClientLayout>
}

