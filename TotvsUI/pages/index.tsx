import { inter, lato } from '../app/ui/fonts'

export default function Page() {
  return (
    <>
      <h1 className={`${inter.className} antialiased`}>Hello World!</h1>
      <p className={`${lato.className} antialiased`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        eum nobis dignissimos!
      </p>
    </>
  )
}
