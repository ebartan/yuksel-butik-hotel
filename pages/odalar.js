import Head from 'next/head'
import Layout from "../components/Layout"

export default function Odalar() {
  return (
    <Layout>
      <Head>
        <title>Yüksel Butik Hotel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-xl">Odalar</h1>
      </div>
      </Layout>
  )
}
