import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';
import { Image } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';





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
                <Carousel.Slide><img src="https://images.pexels.com/photos/2063892/pexels-photo-2063892.jpeg?auto=compress&cs=tinysrgb&w=800" width={800} className='rounded-3xl'/></Carousel.Slide>
                <Carousel.Slide><img src="https://media.istockphoto.com/id/154135061/photo/bananas-in-various-stages-of-ripeness-growing-on-a-tree.jpg?b=1&s=612x612&w=0&k=20&c=MGb1ooj_g4LXFNNAajwNIAUuFLR7SZi2l0m7PDmWv6s=" width={800} className='rounded-3xl'/></Carousel.Slide>
                <Carousel.Slide><img src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800" className='rounded-3xl'/></Carousel.Slide>
                <Carousel.Slide><img src="https://cdn.pixabay.com/photo/2014/01/15/16/09/chicken-coop-245745_1280.jpg" width={800} className='rounded-3xl'/></Carousel.Slide>
                <Carousel.Slide><img src="https://images.pexels.com/photos/2191432/pexels-photo-2191432.jpeg?auto=compress&cs=tinysrgb&w=800" width={800} className='rounded-3xl'/></Carousel.Slide>
                <Carousel.Slide><img src="https://images.pexels.com/photos/14776857/pexels-photo-14776857.jpeg?auto=compress&cs=tinysrgb&w=800" width={800} className='rounded-3xl'/></Carousel.Slide>
                <Carousel.Slide><img src="https://images.pexels.com/photos/11010645/pexels-photo-11010645.jpeg?auto=compress&cs=tinysrgb&w=800" width={800} className='rounded-3xl'/></Carousel.Slide>
              </Carousel>
        </div>



        </MantineProvider>
        
    </div>
  )
}

export default Home








