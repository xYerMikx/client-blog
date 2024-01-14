import "@testing-library/jest-dom"

import { fireEvent, render } from "@testing-library/react"

import { tags } from "@/constants/tags"

import { Tags } from "./Tags"
import styles from "./tags.module.scss"

const mockProps = {
  posts: [],
  setPosts: jest.fn(),
}
describe("tags tests", () => {
  it("renders Tags component and checks tag selection", () => {
    const { getByText } = render(<Tags {...mockProps} />)

    tags.forEach((tag) => {
      const tagElement = getByText(tag)
      fireEvent.click(tagElement)
      expect(tagElement).toHaveClass(styles.active)
    })
  })

  it("checks clear tags functionality", () => {
    const { getByText } = render(<Tags {...mockProps} />)

    const clearButton = getByText("Clear tags")
    fireEvent.click(clearButton)

    tags.forEach((tag) => {
      const tagElement = getByText(tag)
      expect(tagElement).not.toHaveClass(styles.active)
    })
  })
})
