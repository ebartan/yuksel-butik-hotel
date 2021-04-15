import { SiFacebook, SiInstagram, SiTwitter, SiHashnode, SiYoutube, SiGithub } from 'react-icons/si';
import Link from 'next/link'
const todaysDate = new Date();
const currentYear = todaysDate.getFullYear();

const NavBar = () => (
  <div className=" bg-manatee-800">
    <div className="flex space-x-2">
      <div className="flex-1">
     
        <span className="text-lg font-bold text-gray-50">© 1987 - {currentYear}</span>
      </div>
      <div className="flex-1">
        <span className="text-lg font-bold text-gray-50">
          Yalıkavak - Bodrum
        </span>
      </div>
    </div>


    <div className="flex flex-wrap mx-1 overflow-hidden">

<div className="my-1 px-1 w-full overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">

</div>

<div className="my-1 px-1 w-full overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">

<div className="grid grid-cols-6 divide-x divide-teal-400 pl-2">
 
   
  
<div className="py-2 pl-2"><a target="_blank" href="https://www.instagram.com/yukselbutikhotel/" rel="noopener noreferrer"><SiInstagram color="#F2EBD5" className="ml-2"/></a></div>
  <div className="py-2 pl-2"><a target="_blank" href="https://www.youtube.com/channel/UCzzibkWj-gjm5yu9QGJxrTA" rel="noopener noreferrer"><SiYoutube color="#F2EBD5" className="ml-2"/></a></div>
  
  <div className="py-2 pl-2" > <a target="_blank" href="https://www.facebook.com/yukselbutikhotel" rel="noopener noreferrer"><SiFacebook color="#F2EBD5" className="ml-2"/></a></div>
  <div className="py-2 pl-2"><a target="_blank" href="https://twitter.com/yukselbutikotel" rel="noopener noreferrer"><SiTwitter color="#F2EBD5" className="ml-2"/></a></div>
</div>
  
</div>



</div>


  </div>
);

export default NavBar;