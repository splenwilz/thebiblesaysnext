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
      <div className="bg-thebiblesaysblack-100">
        <div className=" mx-auto lg:px-40 max-w-[1440px] md:px-10">
          <WelcomeScreen
            appName="Enrich your understanding of the Bible"
            appDescription="Access our verse-by-verse commentary, Biblical timeline, maps, devotionals, and more."
            // onSearch={handleSearch}
          />
        </div>
      </div>
      <div className=" mx-auto lg:px-40 max-w-[1440px] md:px-10">
        <p className="font-serifpro leading-10 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta at
          leo sit amet faucibus. Donec tempor euismod scelerisque. Aliquam lorem
          eros, tempus varius lobortis nec, convallis tincidunt velit. Mauris
          lacinia dignissim lobortis. Cras a eros metus. Donec et quam diam.
          Pellentesque ut arcu ut dolor elementum elementum. Nam congue
          hendrerit luctus. Vestibulum lacinia dolor orci, et dignissim ligula
          finibus in. Sed fringilla, nunc vitae dignissim sollicitudin, felis
          risus tincidunt ex, rhoncus vestibulum mi justo eu purus. Cras id
          magna mi. Ut volutpat ligula eros, vel mattis arcu vestibulum at.
          Aenean nec finibus libero. Ut ultrices ullamcorper faucibus. In sed
          consectetur velit, ut porta mi. Quisque vitae eros quis elit
          pellentesque volutpat. Praesent vitae eleifend nisi, quis placerat
          lorem. Sed a congue lectus, pretium iaculis dolor. Vestibulum mollis
          faucibus ante et efficitur. Suspendisse mollis ex at justo sodales
          vulputate. Donec venenatis leo lobortis rutrum eleifend. Nunc dapibus
          justo nibh, eget suscipit purus porttitor eget. Praesent finibus nisl
          diam, et luctus est dapibus ac. Ut tincidunt convallis nisl id
          lobortis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas vel cursus erat. Nunc
          blandit eros urna, sed pulvinar purus gravida sit amet. Integer eget
          blandit urna. Curabitur posuere dolor sed mauris condimentum suscipit.
          Nullam id ex condimentum, aliquet nisi sit amet, rhoncus erat. Cras
          gravida dictum orci sed ullamcorper. Pellentesque venenatis dapibus
          sem, non ornare sapien fermentum id. Aenean quis suscipit enim, sit
          amet tempus ex. Integer ante felis, mollis in leo ut, porttitor
          pellentesque turpis. Duis sit amet enim eget arcu porttitor viverra
          non et erat. Integer et erat nisl. Aenean accumsan nisl ornare
          consectetur molestie. Sed suscipit lectus a libero posuere aliquam.
          Duis porttitor in diam sit amet suscipit. Nam libero augue, semper vel
          leo quis, porta mattis nisl. Duis purus ex, aliquet in libero
          scelerisque, efficitur imperdiet tortor. Sed at mi vitae sem convallis
          volutpat. Quisque suscipit sapien et quam sodales, at ullamcorper dui
          lacinia. Phasellus tincidunt enim id dui hendrerit, et molestie tellus
          lobortis. Donec augue nisl, viverra quis congue et, imperdiet nec
          orci. Duis mi diam, interdum in viverra eu, pellentesque quis ligula.
          Vestibulum lacus nisi, molestie ut sapien vitae, finibus lacinia odio.
          Fusce eget orci quis purus finibus ultrices eu ac ex. Maecenas
          pharetra, lorem et varius scelerisque, lacus dui mattis odio, quis
          fermentum sapien magna non sem. Etiam tempor lorem urna, accumsan
          tristique orci consequat id. Fusce sollicitudin ante dapibus mollis
          accumsan. Curabitur varius sollicitudin purus, in consectetur mi
          ultrices eget. Suspendisse aliquam congue dapibus. Fusce feugiat enim
          eget mi accumsan, id gravida turpis euismod. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nunc lacinia mattis fringilla.
          Vestibulum sit amet mattis lacus, a consectetur tortor. Aliquam
          placerat, turpis sit amet aliquam condimentum, massa elit ornare
          turpis, nec interdum nibh ante eu eros. Ut hendrerit vitae lectus et
          tincidunt. Donec vel urna placerat, elementum orci ac, consectetur
          tortor. Pellentesque at dapibus ligula, at vestibulum leo. Maecenas
          bibendum aliquam eros et volutpat.
        </p>
      </div>

      <NewsletterSignupSection
        className="px-7 lg:px-40 md:px-7 mt-2 mb:mt-0"
        placeholder="Enter your Email"
        // onInputChange={(value) => console.log(value)}
        // onSubscribeClick={() => console.log('Subscribe clicked')}
      />
      <FooterSection className="px-7 lg:px-40 md:px-7" />
    </main>
  )
}
