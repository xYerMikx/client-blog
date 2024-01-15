import "@testing-library/jest-dom"

import { render } from "@testing-library/react"

import mockIcon from "@/assets/icons/author_logo1.svg"
import { footerSocials } from "@/constants/footerSocials"
import { Routes } from "@/constants/routes"

import { AuthorCard } from "./AuthorCard"

const mockAuthor = {
  logo: mockIcon,
  name: "John Doe",
  company: "Acme Inc.",
  role: "Developer",
  id: 1,
}

describe("AuthorCard component", () => {
  it("renders author details correctly", () => {
    const { getByAltText, getByText } = render(<AuthorCard {...mockAuthor} />)

    const logo = getByAltText(mockAuthor.name)
    expect(logo).toBeInTheDocument()

    const nameLink = getByText(mockAuthor.name)
    expect(nameLink.closest("a")).toHaveAttribute(
      "href",
      `${Routes.AUTHORS}/${mockAuthor.id}`,
    )

    expect(getByText(`${mockAuthor.role} @${mockAuthor.company}`)).toBeInTheDocument()

    const socialLinks = footerSocials.map((link) => link.name)
    socialLinks.forEach((linkName) => {
      const socialImage = getByAltText(linkName)
      expect(socialImage).toBeInTheDocument()
    })
  })
})
