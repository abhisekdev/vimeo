import './App.css'
import Analytics from './components/Analytics'
import Banner from './components/Banner'
import Content from './components/Content'
import Cta from './components/Cta'
import ExplorePlans from './components/ExplorePlans'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Monetize from './components/Monetize'
import Partners from './components/Partners'
import Pricing from './components/Pricing'
import Reels from './components/Reels'
import Service from './components/Service'
import Streaming from './components/Streaming'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Service />
        <Reels />
        <Content />
        <Streaming />
        <Partners />
        <Monetize />
        <Pricing />
        <Analytics />
        <Testimonial />
        <ExplorePlans />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
