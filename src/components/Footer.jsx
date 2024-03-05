import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} px={"16"} minH={"48"} py={["16","8"]}>
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>

            <VStack w={"full"} alignItems={["center", "flex-start"]}>
                <Text fontWeight={"bold"}>About Us</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}>
                In the rapidly evolving landscape of cryptocurrency, accessibility, reliability, and security are paramount. Welcome to Xcrypto, where we redefine crypto services, setting new standards of excellence in India.

At Xcrypto, we are committed to providing you with the best-in-class crypto services tailored to meet your needs. Unlock the Power of Cryptocurrency with India's Premier Platform!
                </Text>
            </VStack>

            <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]}/>
                <Text>Our Founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer