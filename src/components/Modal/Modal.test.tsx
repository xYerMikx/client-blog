import "@testing-library/jest-dom"

import { fireEvent,render, screen } from "@testing-library/react"

import { Modal } from "./Modal"

describe("Modal component", () => {
  beforeEach(() => {
    render(<Modal btnText="Video about us" />)
  })
  it("opens and closes modal when clicking the button", () => {
    const openButton = screen.getByText("Video about us")
    fireEvent.click(openButton)

    const modalContent = screen.getByTestId("modal")
    expect(modalContent).toBeInTheDocument()

    const closeButton = screen.getByTestId("close-modal")
    fireEvent.click(closeButton)

    expect(modalContent).not.toBeInTheDocument()
  })

  it("closes modal when pressing esc press", () => {
    const openButton = screen.getByText("Video about us")
    fireEvent.click(openButton)

    const modalContent = screen.getByTestId("modal")
    expect(modalContent).toBeInTheDocument()

    fireEvent.keyUp(document, { key: "Escape", code: "Escape" })

    expect(modalContent).not.toBeInTheDocument()
  })
})
