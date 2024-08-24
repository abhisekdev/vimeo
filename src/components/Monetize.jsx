const Monetize = () => {
  return (
    <div className='container mx-auto py-10'>
      <div className='grid grid-cols-2 items-center bg-[#141a20] rounded-3xl h-[500px]'>
        {/* LEFT */}
        <div className='flex flex-col gap-y-6 p-10'>
          <h2 className="text-white text-5xl font-semibold">More ways to monetize</h2>
          <p className="text-xl text-slate-200">
            With a universal purchasing experience across the web and apps,
            Vimeo OTT offers the most diverse monetization models available.
          </p>
          <ul className="flex flex-col gap-y-2 text-slate-200 text-xl">
            <li>• Subscription VOD Platform (SVOD)</li>
            <li>• Transaction VOD Platform (TVOD)</li>
            <li>• Advertising VOD Platform (AVOD)</li>
            <li>• Free VOD Platform (FVOD)</li>
          </ul>
        </div>
        {/* RIGHT */}
        <div className="rounded-3xl h-full bg-[url('https://i.vimeocdn.com/custom_asset/05e3850e8f5846ed2dc8505c3a39e6ea?q=80')] bg-no-repeat bg-cover"></div>
      </div>
    </div>
  )
}

export default Monetize
