import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';


function Coffee (){
  return (
    <div>
        <MantineProvider>
          <div className='media-2'>


        <Box mx="auto">
      <BackgroundImage
        src="https://images.pexels.com/photos/14776857/pexels-photo-14776857.jpeg?auto=compress&cs=tinysrgb&w=800"
        radius="sm"
        w={800}
        h={500} 
        className='rounded-3xl'
        
        >
        <Center p="md">
          <Text c="white">
            <h1 className='bana font-bold text-3xl pt-96'>A BRANCH OF COFFEE </h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
        </div>
          </MantineProvider>
    </div>
  )
}

export default Coffee