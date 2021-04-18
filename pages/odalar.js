import Head from 'next/head'
import Layout from "../components/Layout"
import Prismic from "prismic-javascript"
import { Client } from "../prismic-configuration";
import Image from 'next/image'
import { FaBath,FaUsers } from 'react-icons/fa';
import { IoBed,IoCubeOutline } from 'react-icons/io5';
import { GiBathtub } from 'react-icons/gi';

export default function Odalar({odalar}) {
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
<div>
  <p className="ml-2 mr-2 mt-2 mb-2">Yüksel Butik Hotel 4 farklı oda tipi vardır.</p>
  <div className="flex flex-wrap overflow-hidden">
{odalar.results.map((oda) => (
<div key={oda.id} className="my-3 px-3 w-full overflow-hidden md:w-1/2 lg:w-1/4 xl:w-1/4">
  <p className="text-3xl ml-2 mr-2 mt-2 mb-2">{oda.uid}</p>
  <div className="w-96 sm:w-96 h-32 sm:h-32 ml-2 mr-2 mt-2 rounded-b-lg bg-cover bg-center" style={{ backgroundImage: `url(${oda.data.resim.url})` }}></div>
  <div className="flex flex-wrap -mx-3 overflow-hidden">

  <div className="my-3 px-3 w-1/4 overflow-hidden">
    <IoCubeOutline size="2em" color="#04abcd"></IoCubeOutline><p className="text-lg mt-2 ml-2">{oda.data.alan} &#13217;</p>
  </div>

  <div className="my-3 px-3 w-1/4 overflow-hidden">
    <FaUsers size="2em" color="#04abcd"></FaUsers><p className="text-lg mt-2 ml-2">{oda.data.kisi} Kişi</p>
  </div>

  <div className="my-3 px-3 w-1/4 overflow-hidden">
    <IoBed size="2em" color="#04abcd"></IoBed><p className="text-lg mt-2 ml-2">{oda.data.yatak} Yatak</p>
  </div>

  <div className="my-3 px-3 w-1/4 overflow-hidden">
    <GiBathtub size="2em" color="#04abcd"></GiBathtub><p className="text-lg mt-2 ml-2">{oda.data.banyo} Banyo</p>
  </div>

</div>
  </div>))}
</div>

</div>
<div><p className="text-xl ml-2 mr-2 mt-2 mb-2"> Single, Double, Triple ve Aile şeklinde toplam 12 oda ve 30 yatak bulunmaktadır. </p><p className="text-xl ml-2 mr-2 mt-2 mb-2">Odalarımızın kullanım alanı 16 m2 ile 24 m2 arasında değişmektedir.</p></div>
      </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const odalar = await Client().query(
    Prismic.Predicates.at("document.type", "odalar"),
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
      odalar: odalar,
   
    },
  };
}
