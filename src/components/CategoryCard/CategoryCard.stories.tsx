import "@/styles/globals.scss"

import type { Meta, StoryObj } from "@storybook/react"

import business from "@/assets/icons/business.svg"

import { CategoryCard } from "./CategoryCard"

const meta: Meta<typeof CategoryCard> = {
  title: "Category Card",
  component: CategoryCard,
}

export default meta
type Story = StoryObj<typeof CategoryCard>

export const Card: Story = {
  args: {
    icon: business,
    text: "Lorem ipsum dolor",
    title: "Business",
    label: "business",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
}
