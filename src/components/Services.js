import React from 'react';
import styled from 'styled-components';

const services = [
    { name: 'Free Consultation', description: 'Basic consultation with limited scope', cost: 'Free' },
    { name: 'In-depth Consultation', description: 'Initial consultation to assess your needs. The consultation fee will be deducted from future service costs.', cost: '$100/hr' },
    { name: 'Game Design Review', description: 'In-depth review of your game design', cost: '$500' },
    { name: 'Level Design Mentorship', description: 'Guidance and feedback on level design', cost: '$300/hr' },
    { name: 'Full Game Development', description: 'End-to-end game development services', cost: 'Starting at $5000' },
];

const ServicesContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.mediumGray};
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ServiceName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.mediumGray};
`;

const ServiceCost = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <h2>Our Services</h2>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <ServiceName>{service.name}</ServiceName>
          <ServiceDescription>{service.description}</ServiceDescription>
          <ServiceCost>{service.cost}</ServiceCost>
        </ServiceCard>
      ))}
    </ServicesContainer>
  );
};

export default Services;
