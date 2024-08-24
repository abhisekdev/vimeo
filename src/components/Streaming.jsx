const Streaming = () => {
  return (
    <div className='container mx-auto py-10'>
      <div className='grid grid-cols-2 items-center justify-center gap-10'>
        <div className='flex flex-col gap-y-6'>
          <h2 className='text-white text-5xl font-semibold w-2/3'>
            Streaming as user-friendly as Netflix
          </h2>
          <p className='text-xl text-slate-100 w-4/5'>
            Beam flawless video—live or on-demand—to Apple iOS, Android, Apple
            TV, AndroidTV, Roku, Amazon Fire TV, Samsung Tizen, and Xbox apps.
            Plus, give subscribers a seamless experience across devices.
          </p>
        </div>
        <div>
          <img
            className='rounded-3xl scale-125'
            src='https://i.vimeocdn.com/custom_asset/00a51b52f9e210809410c3ff838e54fe?q=80'
            alt='streaming'
          />
        </div>
      </div>
    </div>
  )
}

export default Streaming
