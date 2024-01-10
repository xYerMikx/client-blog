import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react"

import mockImage from "@/assets/images/post1.png"
import { Routes } from "@/constants/routes"

import { RecommendedPost } from "./RecommendedPost"

const mockPost = {
  author: "John Doe",
  createdAt: "23 May, 2023",
  title: "Sample Title",
  text: "Sample text for testing",
  id: 123,
  image: mockImage,
}
describe("RecommendedPost component", () => {
  beforeEach(() => {
    render(
      <RecommendedPost
        author={mockPost.author}
        createdAt={mockPost.createdAt}
        title={mockPost.title}
        text={mockPost.text}
        id={mockPost.id}
        image={mockPost.image}
      />,
    )
  })
  it("renders post data correctly", () => {
    const authorElement = screen.getByText(mockPost.author)
    expect(authorElement).toBeInTheDocument()

    const titleElement = screen.getByText(mockPost.title)
    expect(titleElement).toBeInTheDocument()

    const textElement = screen.getByText(mockPost.text)
    expect(textElement).toBeInTheDocument()
  })

  it("has a link to the post", () => {
    const linkElement = screen.getByRole("link", { name: mockPost.title })
    expect(linkElement).toHaveAttribute("href", `${Routes.BLOG}/${mockPost.id}`)
  })
})
