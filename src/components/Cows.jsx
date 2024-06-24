import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

function Cows() {
  return (
    <div>
         <MantineProvider>

        <Box mx="auto">
      <BackgroundImage
        src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800"
        radius="sm"
        w={800}
        h={500} 
        className='rounded-3xl'

        >
        <Center p="md">
          <Text c="white">
            <h1 className='bana font-bold text-3xl pt-96'>HEALTH FREISIAN COWS  </h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
          </MantineProvider>

    </div>
  )
}

export default Cows