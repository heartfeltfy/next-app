import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page description message",
}
export default function AboutPage() {
  return <>
    <div>About Page</div>
    <div className="text-violet-600">
      <Link href={'/about/2'}>跳转详情页面</Link>
    </div>
  </>
}
