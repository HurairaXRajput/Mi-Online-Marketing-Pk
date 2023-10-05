import React from 'react'
import HotItemCard from './HotItemCard'
import '../styles/hotAccessories.css'
const HotAccessories = ({music,musicCover,smartDevice, smartDeviceCover,home,homeCover,lifeStyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
      <div>
        <img src={musicCover || smartDeviceCover ||  homeCover || lifestyleCover || mobileAccessoriesCover } alt='Cover'/>
      </div>
        {/* ----------------2nd section--------------- */}
      <div>
       { music && music.map((item,index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
       ))} 
      </div>
      <div>
       {smartDevice && smartDevice.map((item,index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
       ))} 
      </div>
     
      <div>
       { home &&   home.map((item,index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
       ))} 
      </div>
      <div>
       { lifeStyle &&   lifeStyle.map((item,index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
       ))} 
      </div>
      <div>
       { mobileAccessories &&   mobileAccessories.map((item,index)=>(
        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
       ))} 

       <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  )
}

export default HotAccessories
