import Instagram from '../assets/instagram.svg'
import Twiiter from '../assets/twitter.svg'
import Facebook from '../assets/facebook.svg'
import Linkedin from '../assets/linkedin.svg'

const Footer = () => {
  const list = [
    {
      id: 0,
      heading: 'Product',
      subHeading: 'Products',
      items: [
        'Video Player',
        'Video Hosting',
        'Video Editor',
        'Video Maker',
        'Capture',
        'Live Streaming',
        'Vimeo Venues',
        'Webinars',
        'Video Library',
        'Vimeo AI',
        'Video Collaboration',
        'Video Analytics',
        'OTT'
      ]
    },
    {
      id: 1,
      heading: '',
      subHeading: 'Features',
      items: [
        'Mobile Apps',
        'Teleprompter',
        'Video Transcription',
        'Auto Captions',
        'Video Trimmer',
        'Security',
        'Gif Maker',
        'Convert Image to Video',
        'AI Translation'
      ]
    },
    {
      id: 2,
      heading: '',
      subHeading: 'Vimeo for',
      items: [
        'Enterprises',
        'Small Business',
        'Creative Professionals',
        'Educators',
        'Marketers',
        'Corporate Comms',
        'Learning and Development',
        'Healthcare',
        'Retail'
      ]
    },
    {
      id: 3,
      heading: '',
      subHeading: 'Solutions',
      items: ['Vimeo Central', 'Vimeo Marketing']
    },
    {
      id: 4,
      heading: 'Resources',
      subHeading: '',
      items: [
        'Help Center',
        'Contact Support',
        'Customer Stories',
        'Events & Webinars',
        'Blog',
        'Developers',
        'Guidelines',
        'Vimeo Experts',
        'Watch',
        'Media Kit'
      ]
    },
    {
      id: 5,
      heading: 'Company',
      subHeading: '',
      items: [
        'About Vimeo',
        'Careers',
        'Culture',
        'Investor Relations',
        'Product News',
        'Site Maps'
      ]
    }
  ]
  return (
    <div className='container mx-auto py-10'>
      <div className='grid grid-cols-6 items-start gap-8'>
        {list?.map((item) => (
          <div key={item?.id} className='flex flex-col item-start'>
            <h3 className='text-2xl text-white font-semibold mb-8'>
              {item?.heading}
            </h3>
            <p
              className={`text-lg text-white font-semibold mb-1 ${
                item?.heading === '' && 'mt-8'
              }`}
            >
              {item?.subHeading}
            </p>
            <div className='flex flex-col items-start gap-1'>
              {item?.items?.map((itm, idx) => (
                <p key={idx} className='text-white'>
                  {itm}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='mt-12 grid grid-cols-2 items-center justify-between gap-10'>
        {/* LEFT */}
        <div className='flex space-x-6 items-center'>
          <img src={Instagram} alt='instagram' />
          <img src={Twiiter} alt='twitter' />
          <img src={Facebook} alt='facebook' />
          <img src={Linkedin} alt='linkedin' />
          <div className='flex space-x-4 items-center'>
            <label className='text-white' htmlFor='language'>
              Language
            </label>
            <select
              className='bg-slate-600 px-2 py-0.5 rounded-md text-white'
              name='language'
              id='language'
            >
              <option value='English'>English</option>
              <option value='Español'>Español</option>
              <option value='Deutsch'>Deutsch</option>
            </select>
          </div>
        </div>
        {/* RIGHT */}
        <div className='flex flex-col gap-y-2 w-5/7 ml-auto'>
          <p className='text-slate-300'>© 2024 Vimeo.com, Inc. All rights reserved.</p>
          <p className='text-slate-300'>Terms | Privacy | U.S. State Privacy | Copyright | Cookies</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
