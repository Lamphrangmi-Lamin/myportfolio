import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
      <Box 
      textAlign='left'
      boxSize="lg"
      backgroundColor="#fff"
      borderRadius='lg'
      overflow='hidden'
      color='grey'
      >
          <Image src={imageSrc} borderRadius='lg' />
          <Heading paddingTop={5} paddingLeft={5} as='h4' size='md' color='#000'>{title}</Heading>
          <Text paddingTop={5} paddingLeft={5} fontSize='md' color='grey'>{description}</Text>
          
          <HStack paddingTop={5} paddingLeft={5}>
            <Text color='#000' fontSize='sm'>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
      </Box>
  )
};

export default Card;
