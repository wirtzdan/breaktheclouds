import React from "react"

import {
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  Input,
  FormLabel,
  FormControl,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/core"

export default function SuggestNews() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()

  return (
    <>
      <Button onClick={onOpen} variant="ghost">
        Suggest good news
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent rounded="lg">
          <ModalHeader>Suggest good news</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name (Optional)</FormLabel>
              <Input ref={initialRef} placeholder="Name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input placeholder="Link" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3}>
              Send Suggestion
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
