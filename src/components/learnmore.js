import React from "react"

import {
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  useDisclosure,
  Text,
  Link,
  ModalFooter,
} from "@chakra-ui/core"

export default function LearnMore() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()

  return (
    <>
      <Button leftIcon="info" onClick={onOpen} variant="ghost">
        Learn more
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="lg"
      >
        <ModalOverlay />
        <ModalContent rounded="lg">
          <ModalHeader>Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text mb={4} color="gray.300">
              Positive, optimistic and feel-good headlines every time you open a
              new page in your browser.
            </Text>

            <Text>
              Made by{" "}
              <Link href="https://twitter.com/wirtzdan" isExternal>
                @wirtzdan
              </Link>{" "}
              in the{" "}
              <Link href="https://twitter.com/WirvsVirusHack">
                #wirvsvirsus Hackathon
              </Link>
              .
            </Text>

            <ModalFooter>
              <Link href="">
                <Button>Source Code</Button>
              </Link>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
