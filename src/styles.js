import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.mediumGray};
  min-height: 100vh;
  padding: 20px;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ServicesContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ServiceName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const ServiceCost = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
`;