import "@testing-library/jest-dom"

import { fireEvent,render } from "@testing-library/react"
import { useRouter } from "next/navigation"

import { Categories } from "./Categories"

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}))
const mockCategories = {
  name: "test-category",
  categories: ["Category 1", "Category 2", "Category 3"],
}

describe("Categories component", () => {
  it("renders category cards with correct content", () => {
    const { getByText } = render(<Categories {...mockCategories} />)

    expect(getByText("Category 1")).toBeInTheDocument()
    expect(getByText("Category 2")).toBeInTheDocument()
    expect(getByText("Category 3")).toBeInTheDocument()
  })

  it("redirects to category route when card is clicked", () => {
    const { getByText } = render(<Categories {...mockCategories} />)
    fireEvent.click(getByText("Category 1"))

    expect(useRouter().push).toHaveBeenCalledWith("/category/business")
  })
})
