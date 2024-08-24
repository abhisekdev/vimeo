import { useState } from 'react'
import Accordion from './Accordion'

const Analytics = () => {
  const [courseIndex, setCourseIndex] = useState(0)

  const data = [
    {
      id: 0,
      title: 'Attract more subsribers',
      description: `Use built-in marketing and promotion tools to grow your audience.`
    },
    {
      id: 1,
      title: 'Inform your pricing',
      description: `Understanding why subscribers join and stay can help you build a successful pricing system.`
    },
    {
      id: 2,
      title: 'Build a content plan',
      description: `Knowing how your viewers and subscribers are tuning in can help determine the kind of content you create.`
    },
    {
      id: 3,
      title: 'Find out customer value',
      description: `Understand customer lifetime value (LTV) and churn with detailed analytics.`
    }
  ]

  return (
    <div className='container mx-auto py-10'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <p className='text-slate-100 text-5xl font-semibold w-2/3 mx-auto text-center'>
          Leverage advanced analytics tools
        </p>
        <p className='text-slate-200 text-xl text-center w-2/5'>
          Our built-in analytics dashboard helps guide your decision making to
          help you earn even more.
        </p>
        <div className='mt-10 grid grid-cols-5 items-start gap-10'>
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
              src='https://i.vimeocdn.com/custom_asset/78e8fa056275663e8bce47c0bc180786?q=80'
              alt='analytics'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
