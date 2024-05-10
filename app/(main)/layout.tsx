type Props = {
  children: React.ReactNode
}
export default function Layout({children}: Props) {
  return <div className="(main)">{children}</div>
}
