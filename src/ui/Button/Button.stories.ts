import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Text",
  },
}
export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    children: "Text",
    disabled: true,
  },
}
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Text",
  },
}
