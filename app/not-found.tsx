'use client'
import Error from "next/error";

export default function NotFoundPage() {
  return <>
    <Error statusCode={404} title="Next-App: your page is not found"/>
  </>
}
