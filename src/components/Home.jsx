import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { Image } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import BananaP from './BananaP';
import BananaR from './BananaR';
import Cows from './Cows';
import Chicken from './Chicken';
import Friesian from './Friesian';
import Coffee from './Coffee';
import Goats from './Goats';





function Home () {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <div>
      <MantineProvider>

      <Box maw={1430} mx="auto">
      <BackgroundImage
        src="https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=800"
        radius="sm"
         h={700}
        >
        <Center p="md">
          <Text c="white">
            <h1 className='text-5xl font-bold pt-96'>AGRIHUB FARMING DIRECTORY</h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
        <div className=' mb-8 bg-green-600 pb-8 pt-8'>
          <h1 className=' text-center mb-4 text-4xl font-bold'>Empowering Farmers, Connecting Markets</h1>
          <p className='text-center text-2xl mx-auto max-w-[60%]'>At AgriHub, we are dedicated to providing a platform that connects farmers, their produce, and vendors to markets using efficient transportation. Our goal is to empower farmers with the resources, information, and support they need to thrive. Explore our comprehensive features designed to meet the diverse needs of the agricultural community</p>
        </div>

        <div className='mb-12 ml-28 mx-auto max-w-[100%]'>
          <Carousel
                withIndicators
                // height={400}
                plugins={[autoplay.current]}
                // onMouseEnter={autoplay.current.stop}
                // onMouseLeave={autoplay.current.reset}
              >
                <Carousel.Slide><BananaP/></Carousel.Slide>
                <Carousel.Slide><BananaR/></Carousel.Slide>
                <Carousel.Slide><Cows/></Carousel.Slide>
                <Carousel.Slide><Chicken/></Carousel.Slide>
                <Carousel.Slide><Friesian/></Carousel.Slide>
                <Carousel.Slide><Coffee/></Carousel.Slide>
                <Carousel.Slide><Goats/></Carousel.Slide>
              </Carousel>
        </div>



        </MantineProvider>
        
    </div>
  )
}

export default Home








