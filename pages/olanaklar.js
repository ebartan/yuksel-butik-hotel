import Head from 'next/head'
import Layout from "../components/Layout"
import Prismic from "prismic-javascript"
import { Client } from "../prismic-configuration";
import Image from 'next/image'

export default function Olanaklar({olanaklar}) {
  return (
    <Layout>
      <Head>
        <title>Yüksel Butik Hotel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="relative h-64 m-2 overflow-hidden rounded-lg bg-olive-300">
  <div className="absolute z-30 flex w-full h-full">
    <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 className="text-4xl">Ev yapımı lezzetler, özel plaj ve merkezi konum</h2><span></span>
    </div>
    <div className="absolute top-0 right-0 flex w-full h-full">
      <div className="w-1/3 h-full bg-olive-300"></div>
      <div className="relative w-1/3"><svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-20 h-full text-olive-300">
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg><svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50">
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg></div>
    </div>
  </div>
  <div className="absolute top-0 right-0 block w-9/12 h-full">
    <img alt="Snowy mountain lake" className="object-cover min-w-full h-full" src="/olanaklar.jpg"/></div>
</div>
<div>
  <div className="flex flex-wrap mx-4 overflow-hidden ml-2">
  {olanaklar.results.map((etkinlik) => (
    
        <div key={etkinlik.id} className="my-4 px-4 w-1/2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/6">
        <p className="text-xl ml-2">{etkinlik.data.baslik[0].text}</p>
       
        <div className="w-16 sm:w-32 h-16 sm:h-32 ml-2 mt-2 rounded-b-lg bg-cover bg-center" style={{ backgroundImage: `url(${etkinlik.data.icon.url})` }}></div>
  </div>
      
    
  ))}</div>
</div>
<div class="flex flex-wrap mx-3 overflow-hidden">

  <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
    <p className="text-5xl ml-2 mt-2 mb-2 mr-2">Plaj</p>
    <p className="text-4xl ml-2 mt-2 mb-2 mr-2">Özel iskele ve Plaj</p>
    <p className="text-3xl ml-2 mt-2 mb-2 mr-2">İçecek ve yiyecek servisi</p>
  </div>

  <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
 <Image 
        src="/plaj.jpg"
        alt="Picture of the author"
        width={600}
        height={600}
      />
  </div>

</div>

<div class="flex flex-wrap mx-3 overflow-hidden">

  <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
   
    <Image 
        src="/bahce.jpg"
        alt="Picture of the author"
        width={600}
        height={600}
      />
  </div>

  <div class="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
  <p className="text-5xl ml-2 mt-2 mb-2 mr-2">Bahçe</p>
    <p className="text-4xl ml-2 mt-2 mb-2 mr-2">Özel veranda ve şezlong</p>
    <p className="text-3xl ml-2 mt-2 mb-2 mr-2">İçecek ve yiyecek servisi</p>
  </div>

</div>
      </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const olanaklar = await Client().query(
    Prismic.Predicates.at("document.type", "olanaklar"),
    {
      pageSize: 100,
      page: page,
      orderings: "[document.last_publication_date desc]",
    }
  );

  /* const homepage = await Client().getSingle("homepage");
 */
  return {
    props: {
      olanaklar: olanaklar,
   
    },
  };
}
