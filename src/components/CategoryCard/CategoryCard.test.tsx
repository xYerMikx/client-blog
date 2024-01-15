import "@testing-library/jest-dom"

import { render } from "@testing-library/react"

import mockIcon from "@/assets/icons/author_logo1.svg"

import { CategoryCard } from "./CategoryCard"

describe("CategoryCard component", () => {
  const testProps = {
    icon: mockIcon,
    text: "Test Text",
    title: "Test Title",
    label: "label",
  }

  it("renders with correct content and attributes", () => {
    const { getByText, getByAltText } = render(<CategoryCard {...testProps} />)

    expect(getByAltText("Test Title")).toBeInTheDocument()
    expect(getByText("Test Title")).toBeInTheDocument()
    expect(getByText("Test Text")).toBeInTheDocument()
  })

  it("links to the correct category route", () => {
    const { container } = render(<CategoryCard {...testProps} />)
    const link = container.querySelector("a")

    expect(link).toHaveAttribute("href", "/category/label")
  })
})
