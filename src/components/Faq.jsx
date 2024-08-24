import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Accordion from './Accordion'
import { useState } from 'react'

const Faq = () => {
  const [courseIndex, setCourseIndex] = useState(0)

  const data = [
    {
      id: 0,
      title: 'What does OTT means?',
      description: `OTT stands for “over the top,” which means that a content provider is going “over the top” to provide video directly to the consumer. Basically, it’s a fancy way of saying that OTT providers take videos straight to users who want them, without the go-between of using broadcast or cable platforms.`
    },
    {
      id: 1,
      title: 'What is an OTT platform?',
      description: `An OTT platform can be any streaming service that supplies content online. The key is that OTT platforms don’t use distributors like broadcast, cable, or satellite platforms. Instead, users can go directly to the OTT platform for the content they want.`
    },
    {
      id: 2,
      title: 'How does OTT work?',
      description: `OTT platforms send content over a high-speed internet connection, as opposed to using traditional distributors like cable or IPTV. This way, users can access the content they want straight from the creator, without having to go through an intermediary. OTT content is typically video and is watched on any device that has an internet connection (and, y’know, a screen).`
    }
  ]

  return (
    <div className='container mx-auto py-10'>
      <div className='grid grid-cols-2 items-start gap-10'>
        {/* LEFT */}
        <div className='px-20 flex flex-col items-start gap-16'>
          <div className='flex flex-col gap-4'>
            <p className='text-2xl text-slate-300'>Have questions ?</p>
            <h2 className='text-5xl text-white font-semibold'>Get in touch</h2>
          </div>
          <button className='px-5 py-4 rounded-lg bg-white group hover:bg-cyan-500  flex space-x-4 items-center'>
            <p className='text-lg font-medium text-black'>Explore plans</p>
            <div className='bg-slate-200 group-hover:bg-cyan-600 px-4 py-1.5 rounded-md'>
              <ArrowRightIcon className='size-4' />
            </div>
          </button>
        </div>
        {/* RIGHT */}
        <div>
          <Accordion
            data={data}
            courseIndex={courseIndex}
            setCourseIndex={setCourseIndex}
          />
          <button className='px-5 py-4 rounded-lg bg-none group flex space-x-4 items-center'>
            <p className='text-lg font-medium text-white'>Request demo</p>
            <div className='bg-white group-hover:bg-cyan-500 px-4 py-1.5 rounded-md'>
              <ArrowRightIcon className='text-black  size-4' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Faq
