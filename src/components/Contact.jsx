import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Input, TextInput } from '@mantine/core';
function Contact () {
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
            <h1 className='text-center text-4xl font-bold text-white pt-48 ml-40'>GET IN TOUCH</h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
        </MantineProvider>
      {/* <h1 className='text-center text-2xl font-bold text-[#A0522D]'>GET IN TOUCH</h1> */}
      <h1 className='text-center mt-3'>GOT A QUESTION?</h1>
      <h1 className='text-center mt-3'>CONTACT AGRIHUB</h1>
      <p className='text-center mt-3'>We'd Love to Hear From You</p>
      <p className='text-center mt-3 mx-auto max-w-[80%]'>We're here to help and answer any question you might have. Whether you're curious about features, a free trial, or even press-we're ready to answer any and all questions. We look forward to hearing from you</p>
      <div className=''>

      <p>Email:</p>
      <p>njagala.raymond@gmail.com</p>
      <p>Contact us</p>
      <p>+256703897243</p>
      <p>Address</p>
      <p>Makerere, Kampala</p>
      </div>
      

        
     
    </div>
  )
}

export default Contact;