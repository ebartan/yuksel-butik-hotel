import Head from 'next/head'
import Layout from "../components/Layout"
import Prismic from "prismic-javascript"
import { Client } from "../prismic-configuration";
import Image from 'next/image'
export default function Home({galeri}) {
  return (
    <Layout>
      <Head>
        <title>Yüksel Butik Hotel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className="relative h-64 m-2 overflow-hidden rounded-lg bg-olive-300">
  <div className="absolute z-30 flex w-full h-full">
    <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 className="text-3xl">Bol ışık alan odalarımız, konforlu konaklama imkanına sahiptir.</h2><span className="text-xl">Fotoğraflara göz atınca burada keyifli zaman geçirmei hayal edebilirsiniz.</span>
    </div>
    <div className="absolute top-0 right-0 flex w-full h-full">
      <div className="w-1/3 h-full bg-galeri"></div>
      <div className="relative w-1/3"><svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-20 h-full text-galeri">
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg><svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50">
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg></div>
    </div>
  </div>
  <div className="absolute top-0 right-0 block w-9/12 h-full">
    <img alt="Snowy mountain lake" className="object-cover min-w-full h-full" src="/ustgorunum.jpg"/></div>
</div>
<div><p className="ml-2 mr-2 mt-2 mb-2 text-2xl">Panoramik günbatımına sahip otelimiz.</p></div>
<div className="flex flex-wrap -mx-3 overflow-hidden ml-2 mr-2 mt-2 mb-2">{galeri.results.map((resim) => (
  <div key={resim.id} className="my-3 px-3 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"> {resim.id}
  
  <div className=" w-80 sm:w-80 h-32 sm:h-64 mt-2 rounded-b-lg bg-cover bg-center" style={{ backgroundImage: `url(${resim.data.resim.url})` }}></div>
  
  
  </div>
))}</div>

      </Layout>
  )
}


export async function getServerSideProps({ query: { page = 1 } }) {
  const galeri = await Client().query(
    Prismic.Predicates.at("document.type", "galeri"),
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
      galeri: galeri,
   
    },
  };
}