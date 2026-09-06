import React from 'react';
import Writingvolume from '../component/progress/Writingvolume';
import Indicator from '../component/progress/Indicator';
import { Bird, KeyIcon, Tent } from 'lucide-react';

const Progress = () => {
  return (

    <main className='bg-background flex flex-col relative my-16 lg:mt-0 md:pt-20 p-5 h-screen font-sans' > 
      <section className='flex flex-col gap-3 my-5'>
        <h2 className='font-serif text-xl text-primary'>Progress</h2>
        <p className='text-xl tracking-wider'>Your voice is finding its rhythm.</p>
      </section>

      <div className='flex flex-row justify-between items-center my-5 p-5 bg-gray-100 rounded-[60px] w-full sm:w-2/3 lg:w-1/2'>
        <div> 
          <p className='uppercase tracking-widest text-xl'>Weekly Goal</p>
          <p className='text-primary font-serif'>78%</p>
          <p className='tracking-wider'>On track for 15k words</p>
        </div>
        <div><Indicator/></div>
      </div>
      
      <div className='flex flex-col gap-4 my-5'>
        <h2 className='tracking-wider capitalize text-2xl font-extralight'>Writing Volume</h2>
        <div className='w-full sm:w-2/3 lg:w-1/2 h-40 bg-gray-100 rounded-4xl'>
          <Writingvolume/>
        </div>
      </div>

      <div className='my-5'>
        <h2 className='tracking-wider capitalize text-2xl font-extralight'>Trophy Room</h2>
        <div className='flex flex-wrap gap-4'>
          <div className='bg-gray-100 p-6 w-fit rounded-3xl text-2xl capitalize inline-flex gap-4 items-center'><Bird/>Early Bird</div>
          <div className='bg-gray-100 p-6 w-fit rounded-3xl text-2xl capitalize inline-flex gap-4 items-center'><KeyIcon/> Consistency Key</div>
          <div className='bg-gray-100 p-6 w-fit rounded-3xl text-2xl capitalize inline-flex gap-4 items-center'><Tent/>10k pioneer</div>
          <div className='bg-gray-100 p-6 w-fit rounded-3xl text-2xl capitalize inline-flex gap-4 items-center'>Early Bird</div>

        </div>
      </div>

    </main>
  )
}

export default Progress