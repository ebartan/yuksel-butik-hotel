import Head from 'next/head'
import Layout from "../components/Layout"
import Image from 'next/image'
export default function Odalar() {
  return (
    <Layout>
      <Head>
        <title>Yüksel Butik Hotel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className="relative h-64 m-2 overflow-hidden rounded-lg bg-olive-300">
  <div className="absolute z-30 flex w-full h-full">
    <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 className="text-3xl">Bol ışık alan odalarımızın her biri, konforlu bir konaklama imkanına sahiptir.</h2><span></span>
    </div>
    <div className="absolute top-0 right-0 flex w-full h-full">
      <div className="w-1/3 h-full bg-odalar"></div>
      <div className="relative w-1/3"><svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-20 h-full text-odalar">
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg><svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50">
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg></div>
    </div>
  </div>
  <div className="absolute top-0 right-0 block w-9/12 h-full">
    <img alt="Snowy mountain lake" className="object-cover min-w-full h-full" src="/odalar.jpg"/></div>
</div>
<div><p className=" text-xl ml-2 mr-2 mt-2 mb-2">Konfor tek hedefimiz değil, aynı zamanda tasarıma ve çağdaş mobilyalara da değer veriyoruz.
Odalarımızın deniz manzaralı pencerelerinden ve teraslarından görülebilen zengin doğa paletini görebilirsiniz.</p>
<div className="ml-2 mr-2 mt-2 mb-2 animate-pulse"><Image 
        src="/odalar-cover.jpg"
        alt="Picture of the author"
        width={820}
        height={312}
      /></div>

</div>
<div><p className="text-xl ml-2 mr-2 mt-2 mb-2">Yüksel Butik Hotel 4 farklı oda tipi vardır. Single, Double, Triple ve Aile şeklinde toplam 12 oda ve 30 yatak bulunmaktadır. </p><p className="text-xl ml-2 mr-2 mt-2 mb-2">Odalarımızın kullanım alanı 16 m2 ile 24 m2 arasında değişmektedir.</p></div>
      </Layout>
  )
}
