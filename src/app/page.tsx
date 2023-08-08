import AboutCardSection from '@/components/AboutCardSection'
import BiblicalSection from '@/components/BiblicalSection'
import Navigation from '@/components/Navigation'
import Resources from '@/components/Resources'
import SliderCard from '@/components/SliderCard'
import ToughTopicsSection from '@/components/ToughTopicSection'
import WelcomeScreen from '@/components/Welcomescreen'
import spiritualgrowth from '../assets/images/spiritualgrowth.jpg'
import NewsletterSignupSection from '@/components/NewsletterSignupSection'
import FooterSection from '@/components/FooterSection'
import { useGenerationStore } from '@/store/tbsstore'

export default function Home() {
  return (
    <main className="">
      <div className="bg-thebiblesaysblack-100">
        <div className=" mx-auto max-w-[1440px] md:px-0">
          <Navigation />
        </div>
      </div>
      {/* <h1 className="text-9xl">{isLoading}</h1> */}
      <div className="bg-thebiblesaysblack-100">
        <div className=" mx-auto lg:px-40 max-w-[1440px] md:px-10">
          <WelcomeScreen
            appName="Enrich your understanding of the Bible"
            appDescription="Access our verse-by-verse commentary, Biblical timeline, maps, devotionals, and more."
            // onSearch={handleSearch}
          />
        </div>
      </div>

      <Resources />
      <BiblicalSection />
      <SliderCard />

      <ToughTopicsSection />
      <AboutCardSection
        className="px-7 md:px-10 lg:px-40"
        titleClass="text-[31px] md:text-[40px] leading-10 md:leading-52"
        title="Spiritual Growth Through Scriptural Understanding"
        descriptionClass="text-lg md:text-sm leading-7 md:leading-10"
        description="The Bible Says seeks to enrich your personal bible study, small group, church or micro-church by providing easy-to-navigate commentary covering every verse in the Bible."
        buttonLabel="About"
        imageUrl={spiritualgrowth}
      />
      <NewsletterSignupSection
        className="px-7 lg:px-40 md:px-7  -mt-2 mb:mt-0"
        placeholder="Enter your Email"
        // onInputChange={(value) => console.log(value)}
        // onSubscribeClick={() => console.log('Subscribe clicked')}
      />
      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </main>
  )
}
