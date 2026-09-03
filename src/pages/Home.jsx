import React from 'react'
import { Train, Pen, Flame, Award, PaperclipIcon, GitGraph} from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='bg-background flex flex-col relative my-16 lg:mt-0 md:pt-20 p-5 h-screen'> 
        <section>
            <h2 className='text-2xl lg:text-3xl'>Good morning, Maryam</h2>
            <p className='font-sans tracking-wider mt-2 text-sm lg:text-lg'>The morning light is perfect for writing.</p>
        </section>

        <div className='flex flex-col md:flex-row justify-between gap-4 items-center my-7'> 
            <section className='backdrop-blur-xl bg-[#fff5ec] rounded-3xl p-6 text-[20px]'>
                <div className='flex flex-row justify-between items-center pb-6' >
                    <div className='text-[#2d2426]'>
                        <h2 className='p-3 bg-secondary/30 rounded-3xl tracking-wide text-sm '>Daily Prompt</h2>
                        <p className='font-serif text-lg'>The Last Train</p>
                    </div>
                    <div className='text-primary bg-white p-3 rounded-[50%] font-bold'><Train/></div>
                </div>

                <div className='font-sans leading-relaxed text-lg'>A lone figure waits at the station at 3:00 AM. The display board shows a...</div>
                <Link to="/write"><button className='inline-flex gap-5 bg-linear-to-r from-primary to-primary/60 text-white tracking-wider justify-center items-center w-full h-12 rounded-3xl py-4'><Pen className='text-[5px]'/> <span>Start Writing</span></button></Link>
            </section>

            <section className='grid grid-cols-2  gap-4 w-full md:flex md:flex-row-reverse'> 
                <div className='bg-[#fff8f0] rounded-3xl p-4 border border-primary/10 flex flex-col gap-6 not-last-of-type:justify-between w-full'>
                    <div className='inline-flex gap-1 items-center'>
                        <Flame className='text-primary/70'/>
                        <span className='text-[20px]'>Flow State</span>
                    </div>
                    <div>
                        <div className='font-serif text-primary'>14</div>
                        <div className='text-[20px]'>Day Streak</div>
                    </div>
                </div>
                <div className='bg-white rounded-3xl p-4 border border-primary/10 flex flex-col gap-6 justify-between w-full'>
                    <div className='inline-flex gap-1 items-center'>
                        <Award className='text-primary'/>
                        <span className='text-[20px]'>Goals</span>
                    </div>
                    <div>
                        <div className='font-serif text-primary'>3/<span className='font-semibold'>4</span></div>
                        <div className='text-[20px]'>Met this week</div>
                    </div>
                </div>
            </section>
        </div>

        <div className='flex flex-col justify-between lg:flex-row gap-5 my-7'>
            <section className=' text-[20px] w-full flex flex-col gap-6'>
                <h2>Weekly Pulse</h2>
                <div className='bg-gray-100 p-1 rounded-3xl flex flex-col md:flex-row lg:flex-col justify-between items-center gap-1 w-full'>
                    <div className=' flex flex-row justify-between bg-white rounded-3xl h-20 items-center p-4 w-full'>
                        <div className='w-10 h-10 rounded-[50%] text-primary bg-tertiary/70 flex items-center justify-center'><PaperclipIcon className=''/></div>
                        <div>
                            <p>Words Written</p>
                            <p>4,545</p>
                        </div>
                        <div className='bg-emerald-50 w-16 p-5 rounded-2xl'><GitGraph /></div>
                    </div>

                    <div className=' flex flex-row justify-between bg-white rounded-3xl h-20 items-center p-4 w-full'>
                        <div className='w-10 h-10 rounded-[50%] text-primary bg-tertiary/70 flex items-center justify-center'><PaperclipIcon className=' '/></div>
                        <div>
                            <p>Time in Flow</p>
                            <p>6hr 15m</p>
                        </div> 
                        <div className='w-16'></div>
                    </div>
                </div>           
            </section>

            <section className='relative overflow-clip rounded-3xl bg-[#282726] text-center mb-10 w-full text-white p-10'>
                <div className='absolute -top-12 -right-12 w-44 h-44 rounded-full border-18 border-[#5e142f] pointer-events-none'></div>
                <div className='absolute -bottom-12 -left-12 w-44 h-44 rounded-full border-18 border-[#8c6d23] pointer-events-none'></div>
                <div className='z-50 relative text-center flex flex-col items-center gap-2'>
                    <div className='text-primary bg-tertiary w-10 h-10 rounded-[50%] text-2xl'>+</div>
                    <h3 className='tracking-tight font-medium text-base font-serif'>Writer's Block Clinic</h3>
                    <p className='text-sm text-neutral-300 font-light leading-relaxed'>Stuck on a plot hole? Join our AI-assisted unblocking session.</p>
                    <button className='bg-white text-primary rounded-full px-5 py-2'>Get Unstuck</button>
                </div>
            </section>
        </div>
        
    </main>
  )
}

export default Home