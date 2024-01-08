import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react"

import { PostCard } from "./PostCard"

it("renders PostCard component", () => {
  const mockProps = {
    post: {
      author: "Test Author",
    },
  }

  render(<PostCard {...mockProps} />)

  const authorElement = screen.getByText(mockProps.post.author)
  expect(authorElement).toBeInTheDocument()

  const titleElement = screen.getByText(
    "8 Figma design systems that you can download for free today.",
  )
  expect(titleElement).toBeInTheDocument()
})
