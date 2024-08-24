import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Cta = () => {
  return (
    <div className='container mx-auto py-10'>
      <div className='grid grid-cols-2 items-start gap-24'>
        {/* LEFT */}
        <div className='flex flex-col items-start gap-5'>
          <h3 className='text-white text-4xl font-semibold'>
            Get started for free
          </h3>
          <div className='text-white text-lg'>
            <p>Pricing</p>
            <p>Contact Sales</p>
            <p>Watch Demos</p>
          </div>
          <button className='px-5 py-4 rounded-lg bg-cyan-500 group hover:bg-cyan-600  flex space-x-4 items-center'>
            <p className='text-lg font-medium text-black'>Join</p>
            <div className='bg-cyan-600 group-hover:bg-cyan-500 px-4 py-1.5 rounded-md'>
              <ArrowRightIcon className='size-4' />
            </div>
          </button>
        </div>
        {/* RIGHT */}
        <div className='flex flex-col items-start gap-5 w-4/5 ml-auto'>
          <h3 className='text-white text-2xl font-semibold'>
            24/7 customer support
          </h3>
          <p className='text-white text-lg'>
            Our customer support team is available to help 24/7. Enterprise
            members also receive dedicated account managers and a guaranteed
            uptime SLA.
          </p>
          <button className='px-5 py-4 rounded-lg bg-slate-600 group hover:bg-cyan-500  flex space-x-4 items-center'>
            <p className='text-lg font-medium text-white group-hover:text-black'>
              Contact Support
            </p>
            <div className='bg-black group-hover:bg-cyan-600 px-4 py-1.5 rounded-md'>
              <ArrowRightIcon className='text-white group-hover:text-black size-4' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cta
