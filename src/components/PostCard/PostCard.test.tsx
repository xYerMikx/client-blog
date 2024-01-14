import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react"

import { PostCard } from "./PostCard"

const mockProps = {
  author: "Test Author",
  createdAt: "21 May 2023",
  id: 123,
  title: "Test title",
}

it("renders PostCard component", () => {
  render(<PostCard {...mockProps} />)

  const authorElement = screen.getByText(mockProps.author)
  expect(authorElement).toBeInTheDocument()

  const title = screen.getByText(mockProps.title)
  expect(title).toBeInTheDocument()
})
