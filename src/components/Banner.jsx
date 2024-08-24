import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Banner = () => {
  return (
    <div className='container mx-auto my-10'>
      <div className="w-full p-12 flex flex-col gap-y-10 items-start justify-end rounded-2xl h-[650px] bg-[url('https://i.vimeocdn.com/custom_asset/e4d72fd8c7bccb5d54f67fb797a92280?q=80')] bg-no-repeat bg-cover">
        <h1 className='text-white text-9xl w-8/12 font-semibold'>
          Create an OTT Platform
        </h1>
        <p className='text-slate-100 text-xl w-1/2'>
          With your own digital subscription channel, finding an audience and
          monetizing your content is easier than ever.
        </p>
        <div className='flex space-x-5 items-center'>
          <button className='px-5 py-4 rounded-lg bg-cyan-500 group hover:bg-cyan-600  flex space-x-4 items-center'>
            <p className='text-lg font-medium text-black'>Contact sales</p>
            <div className='bg-cyan-600 group-hover:bg-cyan-500 px-4 py-1.5 rounded-md'>
              <ArrowRightIcon className='size-4' />
            </div>
          </button>
          <button className='px-5 py-4 rounded-lg bg-slate-600 group hover:bg-cyan-500  flex space-x-4 items-center'>
            <p className='text-lg font-medium text-white group-hover:text-black'>
              See pricing
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

export default Banner
