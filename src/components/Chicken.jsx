import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';


function Chicken() {
  return (
    <div>
         <MantineProvider>

        <Box mx="auto">
      <BackgroundImage
        src="https://cdn.pixabay.com/photo/2014/01/15/16/09/chicken-coop-245745_1280.jpg"
        radius="sm"
        w={800}
        h={500} 
        className='rounded-3xl'

        >
        <Center p="md">
          <Text c="white">
            <h1 className='font-bold text-3xl pt-96'>BROILER CHICKENS </h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
          </MantineProvider>

    </div>
  )
}

export default Chicken