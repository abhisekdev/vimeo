import OwlCarousel from 'react-owl-carousel'
import $ from 'jquery'

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $
}

const Partners = () => {
  const options = {
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 3
      },
      800: {
        items: 4
      },
      1000: {
        items: 4
      }
    },
    nav: false,
    dots: false
  }

  return (
    <div className='relative'>
      <div className='container mx-auto pt-40 pb-16'>
        <OwlCarousel
          loop
          autoplay
          margin={72}
          {...options}
          autoplaySpeed={1700}
          autoplayTimeout={1200}
          className='owl-theme section'
        >
          <img
            className='h-12 object-contain'
            src='https://i.vimeocdn.com/custom_asset/dcaf15d21b438cea6bea3b9350cee9e3'
            alt='1'
          />
          <img
            className='h-12 object-contain'
            src='https://i.vimeocdn.com/custom_asset/b250fa5736607ca0f470ec845aa5afc4'
            alt='2'
          />
          <img
            className='h-12 object-contain'
            src='https://i.vimeocdn.com/custom_asset/c72950da078492e03e60772b69e7404e'
            alt='3'
          />
          <img
            className='h-12 object-contain'
            src='https://i.vimeocdn.com/custom_asset/eef5006b8bc6189f120823a4befbdfa0'
            alt='4'
          />
          <img
            className='h-12 object-contain'
            src='https://i.vimeocdn.com/custom_asset/2deeef50cbe5ad2c04f1b9d9f76d91bb'
            alt='5'
          />
          <img
            className='h-12 object-contain'
            src='https://i.vimeocdn.com/custom_asset/b2c2df484aff6b11b0a44edc19e91c0c'
            alt='6'
          />
          <img
            className='h-12 object-contain'
            src='https://i.vimeocdn.com/custom_asset/de684890f3a1e2c2f48d0625b9668f6f'
            alt='7'
          />
          <img
            className='h-12 object-contain'
            src='https://i.vimeocdn.com/custom_asset/65d0639c18cbec174dc8a7bbd516bb22'
            alt='8'
          />
        </OwlCarousel>
      </div>
    </div>
  )
}

export default Partners
