import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

function BananaP () {
  return (
    <MantineProvider>

          <div className='media-2' >
        <Box mx="auto">
         
      <BackgroundImage
        src="https://images.pexels.com/photos/2063892/pexels-photo-2063892.jpeg?auto=compress&cs=tinysrgb&w=800"
        radius="sm"
        w={800}
        h={500} 
        className='images-11 rounded-3xl'
        
        >
          
        <Center p="md">
          <Text c="white">
            <h1 className='bana font-bold text-3xl pt-96'>BANANA PLANTATIONS WELL TAKEN CARE OF </h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
    </div>
          </MantineProvider>
  )
}

export default BananaP