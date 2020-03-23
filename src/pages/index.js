import React, { useState, useEffect } from "react"
import axios from "axios"
import TimeAgo from "react-timeago"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style.css"
import bctlogo from "../images/btc-logo.svg"
import { Box, Image, Flex, Link, Button, Text, Spinner } from "@chakra-ui/core"

import SuggestNews from "../components/suggestnews"
import LearnMore from "../components/learnmore"

function IndexPage() {
  const [newsline, setNewsline] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function loadExtension() {
    chrome.storage.sync.get(["news"], function(result) {
      if (Object.entries(result).length === 0) {
        fetchNews()
      } else {
        const localNews = result.news
        const randomNewsline =
          localNews[Math.floor(Math.random() * localNews.length)]
        setNewsline(randomNewsline)
      }
    })
  }

  async function fetchNews() {
    setIsLoading(true)

    await axios
      .get(
        `https://v2-api.sheety.co/dd25b99d32c98f422ee8aa482ec596a2/breaktheclouds/news`
      )
      .then(function(response) {
        const news = response.data.news

        chrome.storage.sync.set({
          news: response.data.news,
        })

        const randomNewsline = news[Math.floor(Math.random() * news.length)]
        setNewsline(randomNewsline)
        setIsLoading(false)
      })
      .catch(function(error) {
        console.log(error)
        return error
      })
  }

  useEffect(() => {
    loadExtension()
  }, [])

  return (
    <Layout>
      <SEO title="New Tab" />
      <Box bg="background" width="100vh%" height="100vh" p="4">
        <Image
          position="absolute"
          top="0"
          right="0"
          left="0"
          bottom="0"
          height="100%"
          width="100%"
          src={newsline.image}
          opacity={0.15}
          objectFit="cover"
          style={{ filter: "grayscale(100%) contrast(60%) brightness(140%)" }}
        />

        <Flex
          direction="column"
          pos="relative"
          width="100%"
          height="100%"
          justify="center"
          align="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            display={isLoading ? "block" : "none"}
          />
          <Flex
            direction="column"
            justify="center"
            align="center"
            display={isLoading ? "none" : "flex"}
          >
            <Text opacity="0.5" fontSize={["xl", "2xl"]} fontWeight="600">
              <TimeAgo date={newsline.date} ago /> by{" "}
              <Link
                href={"https://" + newsline.domain}
                isExternal
                textDecoration="underline"
              >
                {newsline.site}
              </Link>
            </Text>
            <Link
              color="white"
              fontSize={["4xl", "6xl"]}
              fontWeight="bold"
              fontFamily=""
              maxW="64rem"
              textAlign="center"
              lineHeight="1"
              href={newsline.link}
              fontFamily="Rajdhani, sans-serif;"
              isExternal
            >
              {newsline.title}
            </Link>
            <Flex align="center" mt={8}>
              <Text fontSize="xl" color="gray.100" mr={2} fontWeight="medium">
                Share on
              </Text>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  newsline.link
                )}&t=${encodeURIComponent(
                  newsline.title + " #breaktheclouds"
                )}`}
                title="Share on Facebook"
                className="no-underline"
                isExternal
              >
                <Button variantColor="gray" leftIcon="facebookfull" mr={2}>
                  Facebook
                </Button>
              </Link>
              <Link
                href={`https://twitter.com/share?url=${encodeURIComponent(
                  newsline.link
                )}&text=${encodeURIComponent(
                  newsline.title + " #breaktheclouds"
                )}`}
                title="Share on Facebook"
                isExternal
                className="no-underline"
              >
                <Button variantColor="gray" leftIcon="twitterfull">
                  Twitter
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Flex
        width="100%"
        position="absolute"
        bottom={8}
        px={8}
        alignItems="center"
        justify="space-between"
      >
        <Box>
          <SuggestNews />
          <Button
            leftIcon="refresh"
            variant="ghost"
            onClick={() => loadExtension()}
          >
            Refresh
          </Button>
        </Box>
        <Text fontWeight="600">
          {" "}
          {newsline.credit ? `Submitted by ${newsline.credit}` : null}
        </Text>
        <Box>
          <Link
            href="https://twitter.com/_breaktheclouds"
            className="no-underline"
            isExternal
          >
            <Button leftIcon="twitter" variant="ghost">
              Twitter
            </Button>
          </Link>
          <LearnMore />
        </Box>
      </Flex>
      <Flex position="absolute" top="16" width="100%" justify="center">
        <Link href="https://twitter.com/_breaktheclouds" isExternal>
          <Image className="flicker" src={bctlogo} w={300} />
        </Link>
      </Flex>
    </Layout>
  )
}

export default IndexPage
