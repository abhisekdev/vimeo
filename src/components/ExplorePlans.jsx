import { ArrowRightIcon } from '@heroicons/react/24/solid'

const ExplorePlans = () => {
  return (
    <div className='container  mx-auto py-10'>
      <div className='flex flex-col items-start gap-20 bg-[#141a20] rounded-3xl p-14'>
        <h2 className='text-white text-4xl font-semibold'>
          Find the right plan for you.
        </h2>
        <div className='grid grid-cols-2 items-center justify-end'>
          <p className='text-xl text-slate-200 w-'>
            Explore plans and see all that Vimeo can help you accomplish. Start
            a free trial, or get started with our free plan.
          </p>
          <div className='flex space-x-5 items-end justify-end'>
            <button className='px-5 py-4 rounded-lg bg-white group hover:bg-cyan-500  flex space-x-4 items-center'>
              <p className='text-lg font-medium text-black'>Explore plans</p>
              <div className='bg-slate-200 group-hover:bg-cyan-600 px-4 py-1.5 rounded-md'>
                <ArrowRightIcon className='size-4' />
              </div>
            </button>
            <button className='px-5 py-4 rounded-lg bg-none group flex space-x-4 items-center'>
              <p className='text-lg font-medium text-white'>Request demo</p>
              <div className='bg-white group-hover:bg-cyan-500 px-4 py-1.5 rounded-md'>
                <ArrowRightIcon className='text-black  size-4' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePlans
