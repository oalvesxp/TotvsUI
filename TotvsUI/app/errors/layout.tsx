export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        {children}
      </div>
    </>
  )
}
