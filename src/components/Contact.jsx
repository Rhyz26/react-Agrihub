import React, { useState } from "react";
import '@mantine/core/styles.css';
// import { IconAt } from '@tabler/icons-react';
import MapComponent from '../MapComponent';


import {
  BackgroundImage,
  Center,
  Text,
  Box,
  TextInput,
  Textarea,
  Button,
  MantineProvider,
} from "@mantine/core";

function Contact() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", // Matches backend field
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const { firstName, lastName, email, message } = formData;
    if (!firstName || !lastName || !email || !message) {
      setResponseMessage("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Thank you! Your message has been sent.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResponseMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setResponseMessage(
        "An error occurred while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="bg-[#FFFFE0] pt-8">
      <MantineProvider>
        <Box maw={1400} mx="auto">
          <BackgroundImage
            src="https://raisingthevillage.org/wp-content/uploads/2021/05/1-scaled-e1672834968651.jpg"
            radius="md"
            h={500}
          >
            <Center p="md">
              <Text c="white">
                <h1 className="text-5xl font-bold text-white pt-20 mr-16 mx-auto max-w-[40%]">
                  GET IN TOUCH <p>WITH US!</p>
                </h1>
                <p className="mx-auto max-w-[40%] mt-3 mr-16 font-bold text-3xl">
                  We'd Love to Hear From You!
                </p>
                {/* mx-auto max-w-[50%] */}
                <p className=" mt-3  mb-8 mx-auto max-w-[40%] mr-16 font-bold text-2xl">
                  We're here to help and answer any question you might have.
                  Whether you're curious about features, a free trial, or even
                  press-we're ready to answer any and all questions. We look
                  forward to hearing from you!
                </p>
              </Text>
            </Center>
          </BackgroundImage>
        </Box>



        {/* <div className='ml-8 mb-8'></div> */}
        <div className="ml-8 mb-8">
          <div className="flex justify-center items-center pt-16 pb-16 gap-36">
            <div className="flex flex-col text-xl">
              <h1 className="text-[#2E8B57] text-4xl font-bold mb-4">
                Contact us at:
              </h1>
              <p className="font-bold text-[#2E8B57] pb-2">Email:</p>
              <p>njagala.raymond@gmail.com</p>
              <p className="font-bold text-[#2E8B57] pb-2 pt-6">Phone No:</p>
              <p>+256703897243 / +256782924108</p>
              <p className="font-bold text-[#2E8B57] pb-2 pt-6">Address:</p>
              <p className="mb-4">Makerere, Kampala</p>

              <div className="flex gap-4 mb-4">
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


        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-7 text-[#2E8B57] text-4xl font-bold">Let's Talk</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <TextInput
              radius="md"
              placeholder="First name"
              className=""
              w={500}
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              
              
            />
            <TextInput
              radius="md"
              placeholder="Last name"
              w={500}
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />

            <TextInput
              radius="md"
              placeholder="Your email"
              
              w={500}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <TextInput
              radius="md"
              placeholder="Phone (optional)"
              w={500}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <Textarea
              size="xl"
              radius="md"
              placeholder="Message"
              w={500}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              
            />
            <Button
              variant="filled"
              color="green"
              className="bg-green-500 hover:bg-green-600 mb-4 rounded-md"
              
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Get in touch"}
            </Button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-lg text-[#2E8B57]">{responseMessage}</p>
          )}
        </div>
      </MantineProvider>
    </div>
  );
}

export default Contact;

