import Head from "next/head"
import Header from './header'
import Footer from './footer'

export default function Layout({children}){
  return (<>
    <Head>
      <title>Reducing Your Carbon Footprint</title>
      <meta name="description" content="bv nextjs template with tailwindcss" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Syne:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Header />

    <main
      className="
      bg-ironore
      text-slate-300
      min-h-screen
      pt-20
      "
    >{children}</main>

    <Footer />
  </>)
}