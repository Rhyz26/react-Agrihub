import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

function BananaR() {
  return (
    <div>
         <MantineProvider>

        <Box mx="auto">
      <BackgroundImage
        src="https://media.istockphoto.com/id/154135061/photo/bananas-in-various-stages-of-ripeness-growing-on-a-tree.jpg?b=1&s=612x612&w=0&k=20&c=MGb1ooj_g4LXFNNAajwNIAUuFLR7SZi2l0m7PDmWv6s="
        radius="sm"
        w={800}
        h={500} 
        className='rounded-3xl'

        >
        <Center p="md">
          <Text c="white">
            <h1 className='bana font-bold text-3xl pt-96'>RIPE BANANAS FOR SALE </h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
          </MantineProvider>
    </div>
  )
}

export default BananaR