import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { Textarea } from '@mantine/core';
import { Button } from '@mantine/core';
import MapComponent from '../MapComponent';

function Contact () {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <div className='bg-[#FFFFE0] pt-8'>


<MantineProvider>

      <Box maw={1400} mx="auto">
      <BackgroundImage
        src="https://raisingthevillage.org/wp-content/uploads/2021/05/1-scaled-e1672834968651.jpg"
        radius="md"
        h={500}
      
      >
        <Center p="md">
          <Text c="white">
            <h1 className='text-center text-4xl font-bold text-white pt-48 ml-40'>GET IN TOUCH <p>WITH US!</p></h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
      {/* <h1 className='text-center text-2xl font-bold text-[#A0522D]'>GET IN TOUCH</h1> */}
      <h1 className='text-center mt-3'>GOT A QUESTION?</h1>
      <h1 className='text-center mt-3'>CONTACT AGRIHUB</h1>
      <p className='text-center mt-3'>We'd Love to Hear From You</p>
      <p className='text-center mt-3 mx-auto max-w-[80%] mb-8'>We're here to help and answer any question you might have. Whether you're curious about features, a free trial, or even press-we're ready to answer any and all questions. We look forward to hearing from you</p>
      <div className='ml-8 mb-8'>
        
      
      
      <div className='flex justify-center items-center pt-16 pb-16 gap-36'>
        
        <div className='flex flex-col'>
      <h1 className='text-[#2E8B57] text-4xl font-bold mb-4'>Contact us at:</h1>
          <p>Email:</p>
          <p>njagala.raymond@gmail.com</p>
          <p>Contact us</p>
          <p>+256703897243</p>
          <p>Address</p>
          <p className='mb-4'>Makerere, Kampala</p>
          
          
           <div className='flex gap-4 mb-4'>
             <a
                  href="https://twitter.com/Initial_Rhy"
                  target="_blank"
                  i
                  className="fa-brands fa-x-twitter text-[#2E8B57]"
                ></a>
                <a
                  href="https://www.linkedin.com/in/raymond-njagala-9a6309a8/"
                  target="_blank"
                  i
                  className="fa-brands fa-linkedin text-[#2E8B57]"
                ></a>
                <a
                  href="https://wa.me/256703897243"
                  target="_blank"
                  i
                  className="fa-brands fa-whatsapp text-[#2E8B57]"
                ></a>
        </div>
         </div>
         {/* <h1 className='mb-8'>Makerere, Kampala Map</h1> */}
        <MapComponent />
      </div>

      </div>
      
<div className='flex flex-col justify-center items-center'>
  <h1 className='mb-7 text-[#2E8B57] text-4xl font-bold'>Lets Talk</h1>

        <TextInput
      radius="md"
      // label="First Name"
      // description="Input description"
      placeholder="First name"
      w={500}
      className='pb-4'
      />

    <TextInput
      radius="md"
      // label="Last Name"
      // description="Input description"
      placeholder="Last name"
      w={500}
      className='pb-4'
      />

    <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        // label="Your email"
        placeholder="Your email"
        w={500}
        className='pb-4'
        />

      <TextInput
      radius="md"
      // label="Phone Number"
      placeholder="Phone Number"
      w={500}
      className='pb-4'
      />

    <Textarea
      size="xl"
      radius="md"
      // label="Message"
      placeholder="Message"
      w={500}
      className='pb-7'
      />

      <Button variant="filled" color="green" size="md" radius="md">Get in touch </Button>;
      </div>
      
     
        </MantineProvider>
    </div>
  )
}

export default Contact;