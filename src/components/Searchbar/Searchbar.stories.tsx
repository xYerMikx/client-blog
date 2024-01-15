import "@/styles/globals.scss"

import type { Meta, StoryObj } from "@storybook/react"

import image from "@/assets/images/post3.png"
import { blogPosts } from "@/constants/blogPosts"
import { Tags } from "@/constants/tags"

import { Searchbar } from "./Searchbar"

const meta: Meta<typeof Searchbar> = {
  title: "Searchbar",
  component: Searchbar,
}

export default meta
type Story = StoryObj<typeof Searchbar>

export const Search: Story = {
  args: {
    posts: [
      {
        id: 1,
        image,
        title: "Some Title Form My Post",
        text: "Some Text that can be lorem ipsum lodor fof nsdfinsd",
        tags: [Tags.BUSINESS, Tags.LIFE],
        category: "business",
      },
    ],
    placeholder: "Search something...",
    buttonText: "Boom",
  },
}
export const SearchWithMorePosts: Story = {
  args: {
    posts: blogPosts.slice(0, 4),
    placeholder: "Сёрч",
    buttonText: "Длинный текст сюда",
  },
}
