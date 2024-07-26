import React from 'react'
import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

function About () {
  return (
    <div>
<MantineProvider>

      <Box maw={1500} mx="auto">
      <BackgroundImage
        src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=800"
        radius="sm"
        h={700}
        >
        <Center p="md">
          <Text c="">
            
      <h1 className='ml-4 pb-12 pt-36 text-7xl text-[#8B4513]  font-bold'>Welcome to AgriHub</h1>
      <p className='ml-4 text-[#F5F5DC] font-bold text-4xl max-w-[50%]'>Welcome to AgriHub, where our passion for agriculture drives us to deliver innovative and sustainable solutions. Founded in 2024, we are committed to connecting farmers, their produce, and vendors to markets using advanced transportation and logistics</p>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
        </MantineProvider>


<div className='bg-[#F5F5DC] pb-16'>
  
  
    <div className='mb-11'>
      <h1 className='text-center pb-4 pt-16 text-4xl text-[#8B4513] font-bold'>Our Vision</h1>
      
      <p className='mx-auto max-w-[40%] text-center text-2xl '>We envision a world where agriculture is sustainable, efficient, and accessible to all. Our goal is to be a leading force in transforming the agricultural landscape through innovation and collaboration.</p>
    </div>



  <h1 className='text-center pb-4 pt-16 text-4xl text-[#8B4513] font-bold border-t-4 border-[#8B4513] w-[10%] mx-auto'> Mission</h1>
  <p className='mx-auto max-w-[40%] text-center text-2xl  mb-11'>Our mission at AgriHub is to empower farmers with the tools and resources they need to thrive in a competitive market. We strive to enhance agricultural productivity and ensure that high-quality produce reaches consumers efficiently and affordably.</p>
  
  
  
  
  <h1 className='text-center pb-20 pt-16 text-4xl text-[#8B4513] font-bold border-t-4 border-[#8B4513] w-[10%] mx-auto'>Values</h1>
 
<div className='flex mx-auto max-w-[90%] gap-2'>
  <div className='flex flex-col items-center'>
    
      <img src="https://cdn-icons-png.flaticon.com/512/901/901049.png" width={100}/>
      <p className='text-2xl pt-2 pb-2 font-bold text-[#8B4513] '>Innovation</p>
      <p className='text-center text-2xl'> We continuously seek innovative solutions to address agricultural challenges. </p>
  </div>
  
  <div className='flex flex-col items-center'>
    
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNl1iSuJxamUanf3TnC42OMUQeKBk-Bnk7Q&s" width={100}/>
      <p className='text-2xl pt-6 pb-4 font-bold text-[#8B4513] '>Sustainability</p>
      <p className='text-center text-2xl '>Appreciating and celebrating the potential and power of differences and welcoming multiple perspectives, views, ideas and cultures </p>
  </div>
  
    <div className='flex flex-col items-center'>
      <img src="https://t4.ftcdn.net/jpg/02/42/42/53/360_F_242425396_LEK8SCyDZ76C5g8Ou0sDzl4afXcROoSa.jpg " width={100}/>
      <p className='text-2xl pt-3 pb-2 font-bold text-[#8B4513] '>Excellence</p>
      <p className='text-center text-2xl'>Following the highest quality standards and being commited to delivering the best to all stakeholders</p>
    </div>
  
    <div className='flex flex-col items-center'>
      <img src="https://static.thenounproject.com/png/3659714-200.png" width={100}/>
      <p className='text-2xl pt-3 pb-2 font-bold text-[#8B4513] '>Community</p>
      <p className='text-center text-2xl'>We believe in supporting and uplifting the communities we serve.</p>
    </div>
  
</div>


</div>


<div className='bg-[#FFFDD0]'>
  
  <h1 className='text-center pb-3 pt-3 text-3xl'>Our History</h1>
  <p className='mx-auto max-w-[40%] text-center'>AgriHub was founded in 2024 by a group of passionate individuals dedicated to revolutionizing the agricultural industry. Over the years, we have achieved significant milestones, including developing cutting-edge logistics solutions and establishing strong partnerships with key stakeholders in the agricultural sector.</p>
</div>

<div className='bg-[#8FBC8F] pb-16'>
  <h1 className='text-center pb-3 pt-3 text-3xl font-bold text-[#8B4513] '>Our Team</h1>
  <p className='mx-auto max-w-[40%] text-center text-2xl pb-5 '>Our team at AgriHub is comprised of experts in agriculture, logistics, and technology. Meet some of our key members:</p>

  
  
  <div className='flex gap-1 mx-auto max-w-[50%]  '>
    
    <div className='flex flex-col items-center border-2 border-[#8B4513] w-64 h-96 pt-2 rounded-lg hover:border-blue-600 transition duration-300 ease-in-out shadow-md hover:shadow-xl'>
      <img src="/ray11.jpg" width={80} className='rounded-full border-2 border-[#8B4513] mb-4 '/>
      <h1>Raymond Njagala</h1>
      <p className='pb-4'>CEO</p>
      
      <button className='pb-4 text-gray-800'>View more</button>

      <a href='https://www.linkedin.com/in/raymond-njagala-9a6309a8' target="_blank"

      i className="fa-brands fa-linkedin"></a>
      
      
      <p className=''></p>
    </div>
    
    <div className='flex flex-col items-center border-2 border-[#8B4513] w-64 h-96 pt-2 rounded-lg'>
      <img src="/ray11.jpg" width={80} className='rounded-full border-2 border-[#8B4513] mb-4'/>
      <h1>Grace Kyomuhendo</h1>
      <p className='pb-8'>Lead Agronomist</p>
      
      <a href='https://www.linkedin.com/in/raymond-njagala-9a6309a8' target="_blank"

      i className="fa-brands fa-linkedin "></a>
    </div>
    
    <div className='flex flex-col items-center border-2 w-64 h-96 border-[#8B4513] pt-2 rounded-lg'>
      <img src="/ray11.jpg" width={80} className='rounded-full border-2 border-[#8B4513] mb-4'/>
      <h1>David Tumusiime</h1>
      <p className='pb-8'>Soil Scientist</p>
      
      <a href='https://www.linkedin.com/in/raymond-njagala-9a6309a8' target="_blank"

      i className="fa-brands fa-linkedin"></a>
    </div>


<div className='flex flex-col items-center border-2 border-[#8B4513] w-64 h-96 pt-2 rounded-lg'>
  <img src="/ray11.jpg" width={80} className='rounded-full border-2 border-[#8B4513] mb-4'/>
        <h1 className=''>Sarah Nakyobe</h1>
      <p className='text-center pb-3'>Agri-Marketing Specialist</p>
      
      <a href='https://www.linkedin.com/in/raymond-njagala-9a6309a8' target="_blank"

      i className="fa-brands fa-linkedin"></a>
</div>
  </div>




</div>

<h1 className='text-center pb-3 pt-3 text-3xl'>What We Offer</h1>
<p className='mx-auto max-w-[40%] text-center'>We provide a range of services and products designed to support farmers and enhance agricultural efficiency:</p>
<p className='text-center'>AgriTransport: Reliable and efficient transportation services connecting farmers to markets.</p>
<p className='text-center'>AgriConnect: A digital platform that connects farmers with buyers and vendors.</p>
<p className='text-center'>AgriSupport: Comprehensive support services including training, resources, and consultancy.</p>





<h1 className='text-center pb-3 pt-3 text-3xl'>Our Commitment to the Community</h1>
<p className='mx-auto max-w-[40%] text-center'>We are dedicated to making a positive impact through various community initiatives and social responsibility programs. Our efforts include supporting local farming communities, promoting sustainable practices, and contributing to educational programs that empower the next generation of farmers.</p>
<h1 className='text-center pb-3 pt-3 text-3xl'>Looking Ahead</h1>
<p className='mx-auto max-w-[40%] text-center'>As we look to the future, we aim to expand our reach and continue to innovate. Our goals include developing new technologies to enhance agricultural efficiency, building stronger networks to support farmers, and making a lasting impact on the agricultural industry.

</p>

<h1 className='text-center pb-3 pt-3'>Get in Touch</h1>


    </div>
  )
}

export default About;







