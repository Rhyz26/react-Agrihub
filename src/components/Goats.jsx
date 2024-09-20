import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

function Goats() {
  return (
    <div>

         <MantineProvider>
          <div className='media-2'>


        <Box mx="auto">
      <BackgroundImage
        src="https://images.pexels.com/photos/11010645/pexels-photo-11010645.jpeg?auto=compress&cs=tinysrgb&w=800"
        radius="sm"
        w={800}
        h={500} 
        className='rounded-3xl'
        
        >
        <Center p="md">
          <Text c="white">
            <h1 className='bana font-bold text-3xl pt-96'>HEALTH GOATS </h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
          </div>
          </MantineProvider>

    </div>
  )
}

export default Goats