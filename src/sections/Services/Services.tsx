import React from "react";
import styled from "styled-components";

import webImage from "assets/services/web.png";
import digitalMarketingImage from "assets/services/social.png";
import designImage from "assets/services/design.png";
import mobileImage from "assets/services/mobile.png";
import seoImage from "assets/services/seo.png";
import ideaImage from "assets/services/idea.png";
import Service from "./Service/Service";
import Caption from "components/Caption/Caption";
import Heading from "components/Heading/Heading";

const services = [
  {
    id: "1",
    name: "Digital Marketing",
    description:
      "Digital marketing is the marketing element that utilizes modern technology focused on the internet and web, such as personal computers , cell phones, and other digital media and platforms to promote services and goods.",
    image: digitalMarketingImage,
  },
  {
    id: "2",
    name: "Idea Generation",
    description:
      "Stuck at any idea or need any guidance, Qubits Nepal gets it covered already. Highly experienced and educated members of Qubits will help you to enhance your existing idea or can guide your towards new idea generation.",
    image: ideaImage,
  },
  {
    id: "3",
    name: "UI & UX Design",
    description:
      "The first technical stage of any product is design and that's what a user sees. If design is outdated or overwhelmimg users won't be able to use your product, luckily we got it covered too.",
    image: designImage,
  },
  {
    id: "4",
    name: "Web/Software Development",
    description:
      "Every Business now-a-days need a software to effectively and digitally manage their business whether its a grocery store or bank. That's why Qubits focuses on the quality of software at any condition.",
    image: webImage,
  },
  {
    id: "5",
    name: "Android/Ios Development",
    description:
      "Who doesn't have a smart phone now-a-day, the more user base on smart phones the more business opportunity. That's why our Qubits members spend half of their time on mobile development",
    image: mobileImage,
  },
  {
    id: "6",
    name: "Content Writing & SEO",
    description:
      "My site is not visible on google, No that's not the case. If you product is not searchable then it has got no value, thats why here a Qubits we have a separate team for SEO & Content writing.",
    image: seoImage,
  },
];

const Services: React.FC = () => {
  return (
    <div id="services">
      <Heading>We Offer</Heading>
      <Caption>
        "From Idea to design, design to development, development to production
        and production to market we provide all services."
      </Caption>
      <Wrapper>
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 3rem;
`;

export default Services;
