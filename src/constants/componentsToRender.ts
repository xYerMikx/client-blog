import { About } from "@/components/About/About"
import { Authors } from "@/components/Authors/Authors"
import { ChooseCategory } from "@/components/ChooseCategory/ChooseCategory"
import { Join } from "@/components/Join/Join"
import { Posts } from "@/components/Posts/Posts"
import { Testimonials } from "@/components/Testimonials/Testimonials"
import { WhyWeStarted } from "@/components/WhyWeStarted/WhyWeStarted"

export const componentsToRender = [
  { component: Posts, id: 1 },
  { component: About, id: 2 },
  { component: ChooseCategory, id: 3 },
  { component: WhyWeStarted, id: 4 },
  { component: Authors, id: 5 },
  { component: Testimonials, id: 6 },
  { component: Join, id: 7 },
]
