import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-extralight bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent'>Steps to remove background <br /> image in seconds.</h1>
            <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-normal'>

                <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 translate-all duration-50'>
                    <img className='max-w-9' src={assets.upload_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Upload Image</p>
                        <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br />
                        This is a demo..</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 translate-all duration-50'>
                    <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Remove Background</p>
                        <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br />
                        This is a demo..</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 translate-all duration-50'>
                    <img className='max-w-9' src={assets.download_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Download Image</p>
                        <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br />
                        This is a demo..</p>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default Steps