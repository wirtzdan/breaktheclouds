import React, { useState } from "react"

import axios from "axios"

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
  useToast,
  Text,
} from "@chakra-ui/core"

export default function SuggestNews() {
  const toast = useToast()
  const [link, setLink] = useState("")
  const [credit, setCredit] = useState("")
  const [success, setSuccess] = useState("")

  const handleCreditChange = event => setCredit(event.target.value)
  const handleLinkChange = event => setLink(event.target.value)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()

  function postSuggestion() {
    axios.post(
      "https://v2-api.sheety.co/dd25b99d32c98f422ee8aa482ec596a2/breaktheclouds/suggestions",
      {
        suggestion: {
          link: link,
          credit: credit,
        },
      }
    )
    toast({
      title: "Sucessuflly submitted",
      description: "Thanks! We will add the link to our database.",
      status: "success",
      duration: 9000,
      isClosable: true,
    })

    setLink("")
    setCredit("")
    onClose()
  }

  return (
    <>
      <Button leftIcon="add" onClick={onOpen} variant="ghost">
        Submit
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
            <Text mb={4} color="gray.300">
              Do you want to spread some good news related to the corona virus?
              Great! Add it here. If you include your name, we will credit you
              below the article.{" "}
            </Text>
            <FormControl>
              <FormLabel>Your Name (Optional)</FormLabel>
              <Input
                value={credit}
                ref={initialRef}
                placeholder="Name"
                onChange={handleCreditChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Article Link</FormLabel>

              <Input
                value={link}
                placeholder="Link"
                onChange={handleLinkChange}
                isRequired
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={() => postSuggestion()}>
              Send Suggestion
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
