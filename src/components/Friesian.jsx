import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

function Friesian() {
  return (
    <div>

         <MantineProvider>

        <Box mx="auto">
      <BackgroundImage
        src="https://images.pexels.com/photos/2191432/pexels-photo-2191432.jpeg?auto=compress&cs=tinysrgb&w=800"
        radius="sm"
        w={800}
        h={500} 
        className='rounded-3xl'

        >
        <Center p="md">
          <Text c="white">
            <h1 className='bana font-bold text-3xl pt-96'>A FLOCK OF FRIESIAN COWS </h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
          </MantineProvider>

    </div>
  )
}

export default Friesian