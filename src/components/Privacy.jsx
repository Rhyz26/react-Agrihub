import React from 'react'
import { BackgroundImage, Center, Text, Box, MantineProvider } from '@mantine/core';

function Privacy  ()  {
  return (
    <div className='bg-[#FFFFE0] pt-4 pb-16'>
      <MantineProvider>
        <Box maw={1400} mx="auto">
      <BackgroundImage
        src="https://static.country-guide.ca/wp-content/uploads/2015/03/Morrison-photo-1.jpg"
        radius="md"
        h={500}
      >
        <Center p="md">
          <Text c="white">
            <h1 className='mt-52 text-center text-5xl font-bold footer'>PRIVACY POLICY</h1>
            <h1 className='text-5xl pt-8 font-bold footer'>Agrihub Farming Directory Company Privacy Policy</h1>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
      </MantineProvider>

      <div className="mx-auto max-w-[70%] mt-16  text-2xl  footer">
        <h1 className='mb-4 font-bold text-3xl'>Agrihub Farming Directory (“Agrihubs,” “we,” “us”) Privacy Policy</h1>
        <p className='mb-4'>Effective Date: July 16th 2024</p>
        <h1 className='font-bold mb-8 '>Introduction</h1>
        <p className='mb-8'>Welcome to AgriHub! This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website [your website URL]. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.</p>
        <p className='mb-8 font-bold'>Information We Collect</p>
        <p className='mb-8'>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
        <p className='font-bold mb-8'>1. Personal Data</p>
        <p className='mb-8'>Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
        <p className='font-bold mb-8'>2.Derivative Data</p>
        <p className='mb-8'>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
        <p className='mb-8 font-bold'>3. Financial Data</p>
        <p className='mb-8'>Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</p>
        <p className='mb-8 font-bold'>4. Data From Social Networks</p>
        <p className='mb-8'>User information from social networking sites, such as Facebook, Google+, Instagram, Pinterest, Twitter, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.</p>
        <p className='mb-8 font-bold'>Using of Your Information</p>
        <p className='mb-3'>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
        <p>1. Create and manage your account.</p>
        <p>2. Process your transactions and send you related information, including purchase confirmations and invoices.</p>
        <p>3. Email you regarding your account or order.</p>
        <p>4. Deliver targeted advertising, coupons, newsletters, and promotions.</p>
        <p className='mb-8'>5. Enable user-to-user communications.</p>
        <p className='mb-8 font-bold'>Cookies:</p> 
        <p>Most browsers let you control cookies. See your browser settings to adjust preferences.</p>
        <p>We use cookies and similar tracking technologies to:</p>
        <p>1. Enhance your experience on our website</p>
        <p>2. Analyze usage patterns</p>
        <p>3. Deliver personalized content and advertisements</p>
        <p className='mb-4'>4.   You can control the use of cookies through your browser settings.</p>
        <p className='mb-2'>Newsletters and Marketing: You can opt-out at any time by following the unsubscribe instructions in those communications.</p>
        <p className='mb-2'>Do Not Track: Some browsers offer a “Do Not Track” signal, but there’s no industry-standard for how websites should respond.</p>
        <p className='mb-8'>You have the right to access, correct, delete, restrict processing, object to processing, and request portability of your personal data</p>
        <h1 className='mb-8 font-bold'>Security</h1>
        <p className='mb-8'>We implement measures to safeguard your information. However, no system is completely secure. We cannot guarantee the absolute security of your data.</p>
        <h1 className='mb-8 font-bold'>Children’s Privacy</h1>
        <p className='mb-8'>Our Website isn’t intended for children under 13 (or a higher age in your jurisdiction). We don’t knowingly collect data from children.</p>
        <h1 className='mb-8 font-bold'>Changes to This Policy</h1>
        <p>We may update this policy. We’ll post the updated version with a revised Effective Date and highlight the changes.</p>
        
      </div>



    </div>
  )
}

export default Privacy