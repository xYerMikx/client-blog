"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"

import { Button } from "@/ui/Button/Button"

import styles from "./modal.module.scss"

interface ModalProps {
  btnText: string
}

export function Modal({ btnText }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  function closeModal() {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal()
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keyup", handleKeyDown)

    return () => document.removeEventListener("keyup", handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <Button onClick={openModal} variant="secondary">
        {btnText}
      </Button>
      {isOpen &&
        createPortal(
          <div className={styles.overlay}>
            <div className={styles.content}>
              <button
                data-testid="close-modal"
                onClick={closeModal}
                className={styles.close}
              />
              <iframe
                data-testid="modal"
                className={styles.iframe}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
