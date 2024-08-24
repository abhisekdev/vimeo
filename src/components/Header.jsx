import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Logo from '../assets/logo.svg'
import { useState } from 'react'

const MenuButton = ({ title, onEnter, onLeave }) => {
  return (
    <button
      className='group text-white font-medium text-md px-4 py-3 hover:bg-slate-500/25 rounded-md'
      onMouseLeave={onLeave}
      onMouseEnter={() => onEnter(title)}
    >
      {title}
      <span className={title === 'Pricing' ? 'hidden' : 'd-block'}>
        <ChevronDownIcon className='size-4 ml-4 inline-block group-hover:rotate-180 duration-300 ease-out' />
      </span>
    </button>
  )
}

const SubMenu = ({ title, list }) => {
  return (
    <div className='flex flex-col items-start gap-4 h-full'>
      <h3 className='text-white text-2xl font-semibold'>{title}</h3>
      <div className='flex flex-col gap-3'>
        {list?.map((item, index) => (
          <p key={index} className='text-slate-300 text-xl'>
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('')
  const onHover = (value) => setActiveMenu(value)

  return (
    <header className='sticky top-0 backdrop-blur-lg z-10'>
      <div className='relative container mx-auto py-3'>
        <div className='flex justify-between'>
          {/* LEFT */}
          <div className='flex space-x-2 items-center'>
            <img src={Logo} alt='vimeo' />
            <div className='flex items-center'>
              <MenuButton
                title={'Product'}
                onEnter={onHover}
                onLeave={() => setActiveMenu('')}
              />
              <MenuButton
                title={'Solutions'}
                onEnter={onHover}
                onLeave={() => setActiveMenu('')}
              />
              <MenuButton
                title={'Learn'}
                onEnter={onHover}
                onLeave={() => setActiveMenu('')}
              />
              <MenuButton title={'Pricing'} />
              <MenuButton
                title={'Watch'}
                onEnter={onHover}
                onLeave={() => setActiveMenu('')}
              />
            </div>
          </div>
          {/* RIGHT */}
          <div className='flex space-x-6 items-center'>
            <p className='text-lg text-white font-medium'>Contact Sales</p>
            <p className='text-lg text-white font-medium'>Login</p>
            <button className='px-5 py-3 rounded-lg bg-cyan-950/75 group hover:bg-cyan-500  flex space-x-4 items-center'>
              <p className='text-lg font-medium text-white group-hover:text-black'>
                Join
              </p>
              <div className='bg-cyan-500 group-hover:bg-cyan-600 px-4 py-1.5 rounded-md'>
                <ArrowRightIcon className='size-4' />
              </div>
            </button>
          </div>
        </div>
        {activeMenu !== '' && (
          <div
            className='absolute bg-[#0a0d12] w-full pt-1.5 h-[550px] rounded-2xl'
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu('')}
          >
            {activeMenu === 'Product' && (
              <div className='grid grid-cols-4 items-start h-full'>
                {/* ONE */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'Hosting and Player'}
                    list={['Video Player', 'Video Hosting']}
                  />
                  <SubMenu
                    title={'Video Management'}
                    list={['Video Library', 'Collaboration', 'Security']}
                  />
                </div>
                {/* TWO */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'Creation and Editing'}
                    list={['Capture', 'Video Editor', 'Video Maker']}
                  />
                  <SubMenu
                    title={'Events'}
                    list={['Live Streaming', 'Vimeo Venues', 'Webinars']}
                  />
                </div>
                {/* THREE */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'Video Monetization'}
                    list={['OTT', 'Video on Demand']}
                  />
                  <SubMenu
                    title={'Platform'}
                    list={['Vimeo AI', 'Analytics', 'Mobile']}
                  />
                </div>
                {/* FOUR */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'New Releases'}
                    list={[
                      'Summer 2024 Release',
                      'Spring 2024 Release',
                      'Winter 2024 Release'
                    ]}
                  />
                  <SubMenu title={''} list={[]} />
                </div>
              </div>
            )}
            {activeMenu === 'Solutions' && (
              <div className='grid grid-cols-3 items-start h-full'>
                {/* ONE */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'Vimeo For'}
                    list={[
                      'Enterprises',
                      'Small Business',
                      'Creative Professionals',
                      'Video Monetization',
                      'Educators',
                      'Marketers',
                      'Corporate Comms',
                      'Learning and Development'
                    ]}
                  />
                </div>
                {/* TWO */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'Solutions'}
                    list={['Vimeo Central', 'Vimeo Marketing', 'Vimeo OTT']}
                  />
                </div>
                {/* THREE */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <img
                    src='https://i.vimeocdn.com/custom_asset/74230e1eb7984fb007787995f68f9901?q=80'
                    alt='solutions'
                  />
                  <p className='font-semibold text-white text-2xl'>
                    Meet Vimeo Central
                  </p>
                </div>
              </div>
            )}
            {activeMenu === 'Learn' && (
              <div className='grid grid-cols-3 items-start h-full'>
                {/* ONE */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'Resources'}
                    list={[
                      'Customer Stories',
                      'Blog',
                      'Events & Webinars',
                      'Guides',
                      'Video School',
                      'Help Center'
                    ]}
                  />
                </div>
                {/* TWO */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'Connect'}
                    list={[
                      'Community',
                      'Developers',
                      'Become a Partner',
                      'Hire a Video Pro'
                    ]}
                  />
                </div>
                {/* THREE */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <img
                    src='https://i.vimeocdn.com/custom_asset/d2b064e3e5f8fe7c0490028513ace266?q=80'
                    alt='solutions'
                  />
                  <p className='font-semibold text-white text-2xl'>
                    Watch demo
                  </p>
                </div>
              </div>
            )}
            {activeMenu === 'Watch' && (
              <div className='grid grid-cols-3 items-start h-full'>
                {/* ONE */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'Featured'}
                    list={[
                      'Staff Picks',
                      'Generation Vimeo',
                      'Best of the Year'
                    ]}
                  />
                </div>
                {/* TWO */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <SubMenu
                    title={'Browse Videos By'}
                    list={[
                      'Best of Staff Picks',
                      'Categories',
                      'Channels',
                      'On Demand',
                      'Browse All'
                    ]}
                  />
                </div>
                {/* THREE */}
                <div className='flex flex-col items-start gap-10 hover:bg-[#141a20] px-8 py-10 rounded-2xl h-full'>
                  <img
                    src='https://i.vimeocdn.com/custom_asset/fad7ae557fd811ac2b9a07d303be4416?q=80'
                    alt='solutions'
                  />
                  <p className='font-semibold text-white text-2xl'>
                    Best of the year 2023
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
