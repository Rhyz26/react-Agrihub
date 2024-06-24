import React from "react";
import { BackgroundImage, Center, Text, Box } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import BananaP from "./BananaP";
import BananaR from "./BananaR";
import Cows from "./Cows";
import Chicken from "./Chicken";
import Friesian from "./Friesian";
import Coffee from "./Coffee";
import Goats from "./Goats";
import ScrollingText from "./ScrollingText";
import { useEffect } from 'react';

function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));



useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-up');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('translate-up');
        } else {
          element.classList.remove('translate-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


// https://images.pexels.com/photos/5273080/pexels-photo-5273080.jpeg?auto=compress&cs=tinysrgb&w=800  market


// https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=800 banana

// https://i.pinimg.com/originals/6b/a5/eb/6ba5eb3a03a0f42cc78a884577c8c72c.jpg women in the market with foods 


  return (
    <div>
      <MantineProvider>
        <Box maw={1430} mx="auto">
          <BackgroundImage
            src="https://images.pexels.com/photos/5273080/pexels-photo-5273080.jpeg?auto=compress&cs=tinysrgb&w=800"
            radius="sm"
            h={700}
          >
            <Center p="md">
              <Text c="white">
                <h1 className="text-5xl font-bold pt-96 ">
                  <ScrollingText/>
                </h1>
              </Text>
            </Center>
          </BackgroundImage>
        </Box>
        <div className=" mb-8 bg-[#1E3D3B] pb-8 pt-8 text-white">
          <h1 className=" text-center mb-4 text-4xl font-bold text-[#A2AC8E] font-poppins">
            Empowering Farmers, Connecting Markets
          </h1>
          <p className="red text-center text-2xl mx-auto max-w-[60%]">
            At AgriHub, we are dedicated to providing a platform that connects
            farmers, their produce, and vendors to markets using efficient
            transportation. Our goal is to empower farmers with the resources,
            information, and support they need to thrive. Explore our
            comprehensive features designed to meet the diverse needs of the
            agricultural community
          </p>
        </div>

        <div className="mb-12 ml-28 mx-auto max-w-[100%]">
          <Carousel
            withIndicators
            // height={400}
            plugins={[autoplay.current]}
            // onMouseEnter={autoplay.current.stop}
            // onMouseLeave={autoplay.current.reset}
          >
            <Carousel.Slide>
              <BananaP />
            </Carousel.Slide>
            <Carousel.Slide>
              <BananaR />
            </Carousel.Slide>
            <Carousel.Slide>
              <Cows />
            </Carousel.Slide>
            <Carousel.Slide>
              <Chicken />
            </Carousel.Slide>
            <Carousel.Slide>
              <Friesian />
            </Carousel.Slide>
            <Carousel.Slide>
              <Coffee />
            </Carousel.Slide>
            <Carousel.Slide>
              <Goats />
            </Carousel.Slide>
          </Carousel>
        </div>
      </MantineProvider>

{/* bg-[#1E3D3B] */}

      <div className="bg-[#1E3D3B]">
        <div className="mb-32 mx-auto max-w-[30%] text-white  mt-20 scroll-up">
          <h1 className="title-1 text-center font-bold text-3xl mb-4 text-[#A2AC8E] pt-8">THIS IS HOW WE DO IT</h1>
          <p className="title-2 text-xl ">Welcome to AgriHub! We provide a robust platform that empowers farmers by connecting them with markets and valuable resources. Here's how we make a difference:</p>
        </div>
        <div className="mx-auto max-w-[60%] mr-4 mb-32 text-white flex gap-5 scroll-up">
          <img src="https://i.pinimg.com/originals/6b/a5/eb/6ba5eb3a03a0f42cc78a884577c8c72c.jpg" width={400} className="rounded-lg"/>
          
          <div className="flex flex-col">
            <h1 className="title-3 text-center font-bold text-3xl mb-4 text-[#A2AC8E]">MARKET ACCESS:</h1>
            <p className="title-4 text-xl ">Market Directory: Our searchable directory connects farmers with buyers, processors, and distributors, ensuring seamless market access.</p>
            <p className="title-5 text-xl">Market Prices: Stay informed with live or regularly updated market prices for a variety of agricultural products.</p>
            <p className="text-xl title-6">Success Stories: Get inspired by stories of farmers who have thrived using our platform.</p>
          </div>

        </div>
        <div className=" max-w-[40%] ml-24 mb-32 text-white scroll-up">
          <h1 className="text-center font-bold text-3xl mb-4 text-[#A2AC8E] title-7">INFORMATION AND EDUCATION:</h1>
          <p className="text-xl title-6">Resource Center: Access a wealth of articles, videos, and tutorials on best practices, pest management, crop selection, and more.</p>
          <p className="text-xl title-6">Expert Q&A Forum: Connect with agricultural experts and experienced farmers to get answers to your pressing questions.</p>
          <p className="text-xl title-6">Events & Webinars: Participate in online seminars and workshops on relevant agricultural topics to stay updated and informed.
        </p>
        </div>
        <div className="mx-auto max-w-[30%] mb-32 mr-24 text-white scroll-up">
          <h1 className="text-center font-bold text-3xl mb-4 text-[#A2AC8E] title-7">FINANCING AND INPUTS:</h1>
          <p className="text-xl title-6">Financial Resources: Discover available loans, grants, and financial assistance programs tailored for farmers.</p>
          <p className="text-xl title-6">Input Suppliers Directory: Find local or online suppliers of seeds, fertilizers, pesticides, and other essential agricultural inputs.</p>
        
        </div>

       
        <div className="ml-24 mb-32 max-w-[40%] text-white scroll-up">
          <h1 className="text-center font-bold mb-4 text-3xl text-[#A2AC8E] title-7">POST-HARVEST-MANAGEMENT:</h1>
          <p className="text-xl title-6">Best Practices Guides: Learn the best practices for harvesting, storage, and transportation to minimize losses and ensure quality.
        </p>
        <p className="text-xl title-6">Surplus Produce Marketplace: Connect with buyers for your excess produce to avoid waste and maximize profits.</p>
        
        <p className="text-xl title-6">Storage Partners: Access information about partnered cold storage facilities offering discounted storage options.</p>
        </div>
        <div className="mx-auto max-w-[40%] text-white p-4 pb-10 scroll-up">
          <h1 className="text-center text-3xl font-bold mb-4 text-[#A2AC8E] title-7">CLIMATE CHANGE ADAPTATION:</h1>
          <p className="text-xl title-6">Climate-Smart Practices: Gain insights on adopting drought-resistant crops, efficient water management techniques, and sustainable land management practices.</p>
          <p className="text-xl title-6">Climate Data & Analysis: Access weather data, climate projections, and localized forecasts to make informed decisions for your farming activities.
        </p>
        
        <p className="text-xl title-6">Climate Resilience Examples: Learn from stories of farmers who have successfully implemented climate-smart practices.
        </p>


        </div>

        
      </div>


    </div>
  );
}

export default Home;
