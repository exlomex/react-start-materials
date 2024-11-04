import {IsGuest} from "@/components/IsGuest";
import {HomePageContent} from "@/pages/HomePageContent";
export default function HomePage() {
  return (
      <IsGuest>
          <HomePageContent/>
      </IsGuest>
  )
}