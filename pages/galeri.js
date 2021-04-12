import Head from 'next/head'
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Yüksel Butik Hotel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-xl">Galeri</h1>
      </div>
      </Layout>
  )
}
