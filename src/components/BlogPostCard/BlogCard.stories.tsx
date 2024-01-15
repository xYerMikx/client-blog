import "@/styles/globals.scss"

import type { Meta, StoryObj } from "@storybook/react"

import blogImage from "@/assets/images/post1.png"

import { BlogPostCard } from "./BlogPostCard"

const meta: Meta<typeof BlogPostCard> = {
  title: "BlogCard",
  component: BlogPostCard,
}

export default meta
type Story = StoryObj<typeof BlogPostCard>

export const BlogCard: Story = {
  args: {
    image: blogImage,
    category: "Business",
    title: "Example Title With Some Things",
    text: "Lorem Ipsum dolor sit burh um difdf idjfdij jfoijdoi",
    id: 1,
  },
}
