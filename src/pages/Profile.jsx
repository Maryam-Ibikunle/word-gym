import React from 'react'
import { Award, Brain, TrendingUp } from 'lucide-react'
import Indicator from '../component/progress/Indicator'
import Progressbar from '../component/ui/Progressbar'

const Profile = () => {

  const grade = "Excellent"
  const score = 88
  return (
    <main className='bg-tertiary/10 flex flex-col items-center gap-5 relative my-16 lg:mt-0 md:pt-20 p-5 min-h-screen md:text-lg font-sans'> 
      <section className='flex flex-col items-center gap-2'>
        <div className='p-6 bg-background rounded-full'> 
          <Award className='h-10 w-auto text-primary'/>
        </div>
        <p className='font-serif tracking-tight'>Piece Submitted!</p>
        <p className='font-extralight'>Your latest work has been analyzed. {grade} progress today.</p>
      </section>

      <section className='flex flex-col items-center gap-5 bg-background rounded-3xl w-full p-8'>
        <p className='uppercase font-light tracking-widest'>Craft mastery</p>
        <div className='w-fit h-fit bg-tertiary/10'>
          <Indicator centerIcon={<p className='text-primary text-sm bg-white p-2 rounded-full font-serif'>{score}</p>} percentage={score}/>
        </div>
        <div className='flex flex-col items-stretch'>
          <div className='flex flex-row gap-10 justify-between px-10'>
            <span>Vocabulary</span>
            <div className='inline-flex items-center gap-2 justify-between'>
              <Progressbar progress={90} color={"bg-yellow-200"}/>
              <span className='font-bold text-sm'>+12%</span>
            </div>
          </div>
          <div className='flex flex-row gap-10 justify-between px-10'>
            <span>Pacing</span>
            <div className='inline-flex items-center gap-2 justify-between'>
              <Progressbar progress={30} color={"bg-green-700"}/>
              <span className='font-bold text-sm'>+8%</span>
            </div>
          </div>
          <div className='flex flex-row gap-10 justify-between px-10'>
            <span>Clarity</span>
            <div className='inline-flex items-center gap-2 justify-between'>
              <Progressbar progress={50} color={"bg-primary"}/>
              <span className='font-bold text-sm'>+5%</span>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-row gap-6'>
        <div className='bg-gray-50 p-7 flex flex-col rounded-2xl gap-4 w-auto md:w-60'>
          <div className='inline-flex gap-2 items-center'>
            <Brain className='text-primary'/>
            <span>Strengths</span>
          </div>
          <div>
            <div className='w-fit px-4 p-1 rounded-2xl font-light text-sm bg-secondary/30 flex items-center justify-center mb-2'>
              <p>Imagery</p>
            </div>
            <div className='w-fit px-4 p-1 rounded-2xl font-light text-sm bg-secondary/30 flex items-center justify-center mt-1'>
              <p>Imagery</p>
            </div>
          </div>
        </div>
        <div className='bg-gray-50 p-7 flex flex-col rounded-2xl gap-4 w-auto md:w-60'>
          <div className='inline-flex gap-2 items-center'>
            <TrendingUp className='text-primary'/>
            <span>Focus</span>
          </div>
          <div>
            <div className='w-fit px-4 p-1 rounded-2xl font-light text-sm flex items-center justify-center mb-2'>
              <li>Varied sentence starts</li>
            </div>
            <div className='w-fit px-4 p-1 rounded-2xl font-light text-sm flex items-center justify-center mt-1'>
              <li>Show, don't tell</li>
            </div>
          </div>
        </div>
      </section>
      <article className='relative bg-white rounded-2xl flex flex-col gap-3 items-center p-5 px-10 md:w-1/2'>
        <div className='absolute w-8 h-8 rounded-full border-8 border-tertiary/20 top-2 left-7 '></div>
        <i className='font-serif text-center'>"Your descriptive prose in the second paragraph created a truly visceral sense of place."</i>
        <p className='font-light text-primary'>AI Editor Note</p>
      </article>
    </main>
  )
}

export default Profile