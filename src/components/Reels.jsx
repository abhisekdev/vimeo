import OwlCarousel from 'react-owl-carousel'
import $ from 'jquery'

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $
}

const Reels = () => {
  const options = {
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      700: {
        items: 4
      },
      800: {
        items: 5
      },
      1000: {
        items: 6
      }
    },
    nav: true,
    dots: false
  }

  return (
    <div className='relative'>
      <div className='ml-28 py-20'>
        <OwlCarousel
          loop
          autoplay
          margin={20}
          {...options}
          autoplaySpeed={1700}
          autoplayTimeout={900}
          className='owl-theme section'
        >
          {/* 1 */}
          <img
            className='z-0'
            src='https://i.vimeocdn.com/custom_asset/db7e8fb689ef0eb832755ae7225be642?w=200&q=60'
            alt='1'
          />
          <img
            className='z-0'
            src='https://i.vimeocdn.com/custom_asset/1ebd53a5e2f244c99dc175ecb8f73650?w=200&q=60'
            alt='2'
          />
          <img
            className='z-0'
            src='https://i.vimeocdn.com/custom_asset/3f6445aaee1d3a68432637052455bc34?w=200&q=60'
            alt='3'
          />
          <img
            className='z-0'
            src='https://i.vimeocdn.com/custom_asset/69daeef139c4aeca94cd225689c285aa?w=200&q=60'
            alt='4'
          />
          <img
            className='z-0'
            src='https://i.vimeocdn.com/custom_asset/5cd502e4b152f340ec50a60738393b0d?w=200&q=60'
            alt='5'
          />
          <img
            className='z-0'
            src='https://i.vimeocdn.com/custom_asset/9b24ead78bc19432ad33b129fa323aef?w=200&q=60'
            alt='6'
          />
          <img
            className='z-0'
            src='https://i.vimeocdn.com/custom_asset/9af4308bf763edd5a55f1a33715a80c8?w=200&q=60'
            alt='7'
          />
          <img
            className='z-0'
            src='https://i.vimeocdn.com/custom_asset/5cd502e4b152f340ec50a60738393b0d?w=200&q=60'
            alt='8'
          />
        </OwlCarousel>
      </div>
    </div>
  )
}

export default Reels
