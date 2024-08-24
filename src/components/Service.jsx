import AppIcon from '../assets/app.svg'
import UserIcon from '../assets/user.svg'
import StreamIcon from '../assets/streams.svg'

const Service = () => {
  return (
    <div className='container mx-auto py-10'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <p className='text-slate-200 text-2xl'>Video subscription service</p>
        <p className='text-slate-100 text-5xl font-semibold w-2/3 mx-auto text-center'>
          Join 6,500+ channels using Vimeo OTT for online video monetization
        </p>
        <div className='mt-10 grid grid-cols-3 items-start justify-start gap-16'>
          <div>
            <img className='w-12' src={AppIcon} alt='app' />
            <p className='mt-5 text-3xl text-white font-semibold'>
              3K+ apps currently powered by Vimeo
            </p>
          </div>
          <div>
            <img className='w-16' src={UserIcon} alt='app' />
            <p className='mt-5 text-3xl text-white font-semibold'>8M+ end users</p>
          </div>
          <div>
            <img className='w-16' src={StreamIcon} alt='app' />
            <p className='mt-5 text-3xl text-white font-semibold'>
              3.5M live streams annually
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
