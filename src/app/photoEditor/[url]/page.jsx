"use client"
import Adjust from '@/components/photoEditorComponents/Adjust';
import Crop from '@/components/photoEditorComponents/Crop';
import React,{useState} from 'react'


export default function  page ({params}) {
  const [ActiveTool, setActiveTool] = useState('crop')
   const {url}= params;
  const decodedUrl = decodeURIComponent(url).replace("https:/", "https://"); // Fix missing sla
  return (
    <div className=' w-full h-[100vh] place-items-center flex flex-row gap-3 overflow-scroll  ' >
      {/* left section photo container  */}
      <section className=' w-[70vw] h-[95vh] flex p-[40px] bg-[#FBFBFB] ' >
      <img 
        src={decodedUrl} 
        alt="Dynamic editor Image" 
        className=' w-[100%] h-auto '
      />
      </section>

      {/* Right section  */}
      <section dir='rtl' className=' flex flex-row gap-3  pr-[10px] w-[30vw] h-[95vh] overflow-scroll  ' >
        <div className=' relative w-[20%] h-full flex-col gap-7 flex pt-[15%] bg-[#E6EFFF] place-items-center '>
           <button onClick={()=> {setActiveTool('crop')}} className=' bg-[#FBFBFB] rounded-[10px] w-[48px] h-[44px] flex place-items-center place-content-center ' ><img src='/photoEditor/crop.svg' /></button> 
           <button onClick={()=> setActiveTool('adjust')} className=' bg-[#FBFBFB] rounded-[10px] w-[48px] h-[44px] flex place-items-center place-content-center ' ><img src='/photoEditor/adjust.svg' /></button> 
           <button className=' bg-[#FBFBFB] rounded-[10px] w-[48px] h-[44px] flex place-items-center place-content-center ' ><img src='/photoEditor/removeBg.svg' /></button> 
           <button className=' bg-[#FBFBFB] rounded-[10px] w-[48px] h-[44px] flex place-items-center place-content-center ' ><img src='/photoEditor/filters.svg' /></button> 
           <button className='  absolute bottom-5 right-0 left-0 place-content-center place-items-center justify-center flex ' ><img src='/photoEditor/setting.svg' className=' bg-[#FBFBFB] rounded-[10px] p-1 ' /></button> 
        </div>

        <div className=' w-[80%] h-full flex-col flex bg-[#E6EFFF]  '>
          {ActiveTool === 'crop' && <Crop /> }
          {ActiveTool === 'adjust' && <Adjust /> }
        </div>
      </section>
     
     </div>
  )
}

