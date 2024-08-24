import { useState } from 'react'
import Accordion from './Accordion'

const Pricing = () => {
  const [courseIndex, setCourseIndex] = useState(0)

  const data = [
    {
      id: 0,
      title: 'Pay-as-you-go model',
      description: `Get straightforward pricing that scales from 1 subscriber to 1M+ with no start-up costs.`
    },
    {
      id: 1,
      title: 'Go global',
      description: `Reach your audiences in every market, language, and currency.`
    },
    {
      id: 2,
      title: 'No hidden bandwidth fees',
      description: `There are no consequences for growing too fast with Vimeo OTT.`
    },
    {
      id: 3,
      title: 'Full control of your data',
      description: `You manage your brand and your subscriber data. Lorem ipsum dolor sit amet.`
    }
  ]

  return (
    <div className='container mx-auto py-20'>
      <div className='flex flex-col items-center justify-center gap-14'>
        <p className='text-slate-50 text-5xl font-semibold'>
          Transparent pricing
        </p>
        <div className='grid grid-cols-5 items-start gap-10'>
          <div className='col-span-2'>
            <Accordion
              data={data}
              courseIndex={courseIndex}
              setCourseIndex={setCourseIndex}
            />
          </div>
          <div className='col-span-3'>
            <img
              className='rounded-3xl'
              src='https://i.vimeocdn.com/custom_asset/347b769061aa692a84aae1d03af37c4e?q=80'
              alt='pricing'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
