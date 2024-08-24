const Content = () => {
  return (
    <div className='container mx-auto py-10'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <p className='text-slate-200 text-2xl'>Exclusive branded content</p>
        <p className='text-slate-100 text-5xl font-semibold w-2/3 mx-auto text-center'>
          {`Focus on your content and we'll handle the tech`}
        </p>
        <img
          src='https://i.vimeocdn.com/custom_asset/afb16253d5a70b5b9b8de551b3604d25?q=80'
          alt='content'
        />
      </div>
    </div>
  )
}

export default Content
