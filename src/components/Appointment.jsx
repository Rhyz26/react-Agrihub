import React from 'react'
import { MantineProvider } from '@mantine/core';
import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { Button } from '@mantine/core';


function Appointment() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <div className='bg-[#1E3D3B]'>
      <div className='flex gap-8 pt-4 ml-4'>
        <img src="https://images.pexels.com/photos/5685756/pexels-photo-5685756.jpeg?auto=compress&cs=tinysrgb&w=800" className='rounded-2xl' alt="A man and woman having a meeting together"/>
        <div className='flex flex-col text-white'>
          <h1 className='appoint pt-16 text-center text-4xl pb-6 text-[#A2AC8E]'>APPOINTMENTS</h1>
          <p className='appoint-1 text-2xl mx-auto max-w-[80%]'>Feel free to reach out to us and schedule an appointment with our experts whether you want to be educated about the best farming practices, ask about diseases and pests that are giving you hard time or anything, feel free to book an appointment below</p>
        </div>
      </div>
      <MantineProvider>

      <div className='text mx-auto max-w-[30%] pt-20 text-white'>
        <TextInput
        label="First Name"
        size="md"
        radius="md"
        placeholder="Please enter your First Name"
        w={400}
        className='pb-8'
        />
        <TextInput
        label="Last Name"
        size="md"
        placeholder="Please enter your Last Name"
        w={400}
        radius="md"
        className='pb-8'
        />
        <TextInput
        label="Phone Number"
        size="md"
        placeholder="Please enter your Phone Number"
        w={400}
        radius="md"
        className='pb-8'
        />
        <TextInput
          leftSectionPointerEvents="none"
          leftSection={icon}
          size="md"
          label="Your email"
          placeholder="Please enter your Email"
          w={400}
          radius="md"
          className='pb-8'
        />
        <div className='mx-auto ml-24'>
          <Button variant="filled" color="green" size="md" radius="lg" className='mb-16'>Book an Appointment
          </Button>
        </div>
      </div>

      
      </MantineProvider>
    </div>
  )
}

export default Appointment;