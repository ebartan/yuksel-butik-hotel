import React from 'react';
import Head from 'next/head'
import Layout from "../components/Layout"
import { SiFacebook, SiGooglemybusiness, SiWhatsapp,SiMessenger } from 'react-icons/si';


import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  
} from "react-google-maps";

const defaultCenter = { lat: 37.1126175, lng: 27.2934141 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
      <Marker position={ defaultCenter } />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '280px' };
const mapElementStyle = { height: '100%' };


export default function İletisim() {
  return (
    <Layout>
      <Head>
        <title>Yüksel Butik Hotel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-64 m-2 overflow-hidden rounded-lg bg-olive-300">
  <div className="absolute z-30 flex w-full h-full">
    <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 className="text-2xl">Bol ışık alan odalarımızın her biri, konforlu bir konaklama imkanına sahiptir.</h2><span></span>
    </div>
    <div className="absolute top-0 right-0 flex w-full h-full">
      <div className="w-1/3 h-full bg-iletisim"></div>
      <div className="relative w-1/3"><svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-20 h-full text-iletisim">
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg><svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50">
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg></div>
    </div>
  </div>
  <div className="absolute top-0 right-0 block w-9/12 h-full">
    <img alt="Snowy mountain lake" className="object-cover min-w-full h-full" src="/mavi-deniz.jpg"/></div>
</div>
<div>  <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGA8CRQ8C0KzxKOjs6sA2uCqZakcWriy8"
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div style={ containerElementStyle } />}
      mapElement={<div style={ mapElementStyle } />}
    /></div>
<div className="ml-2 mr-2m mt-2 mb-2">
<p className="text-2xl">Bize farklı kanallar üzerinden rezervasyon başvurusu yapabilirsiniz;</p>
<ul>
  <li className="flex"><SiMessenger size="2em" color="#04ABCD" className="mr-4"/> <p className="text-2xl">Facebook sayfamız üzerinden iletişim kurabilirsiniz.</p></li>

  <li className="flex"> <SiGooglemybusiness size="2em" color="#04ABCD" className="mr-4"/> <p className="text-2xl">Google g.page/yukselbutikhotelyalikavak/review adresinden bize görüşlerinizi iletebilirsiniz.</p></li>
  <li className="flex"> <SiWhatsapp size="2em" color="#04ABCD" className="mr-4"/><p className="text-2xl">Whatsapp üzerinden rezervasyon tarihi ve kişi sayısını belirterek fiyat alabilirsiniz.</p></li>
</ul>

</div>
      </Layout>
  )
}
