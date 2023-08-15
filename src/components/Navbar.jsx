import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% {
    border-color: rgba(255, 255, 255, 0.1);
  }
  50% {
    border-color: rgba(255, 255, 255, 0.3);
  }
  100% {
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 15px 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.img`
  height: 50px;
  filter: brightness(0) invert(1);
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  animation-delay: ${({ index }) => index * 0.1}s;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.3s;

  &:hover {
    color: #ff9800;
    animation: ${shine} 1s infinite;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  display: none;

  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  color: #333;
  transition: 0.3s;

  &:hover {
    background: #f5f5f5;
  }
`;

const GradientButton = styled.button`
  background: linear-gradient(to right, #780206 0%, #061161 51%, #780206 100%);
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(DropdownButton)`
  display: none; /* Hide the mobile menu button by default */

  @media only screen and (max-width: 768px) {
    display: block; /* Show the mobile menu button only in mobile view */
  }
`;

const MobileIcon = styled(Icon)`
  display: none; /* Initially hidden on larger screens */

  @media only screen and (max-width: 768px) {
    display: block; /* Display on smaller screens */
  }
`;


const Navbar = () => {
  const menuItems = ["Home", "Studio", "Works", "Contact"];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" alt="Logo" />
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} index={index}>
                {item}
              </ListItem>
            ))}
          </List>
          <MobileMenuButton onClick={() => setDropdownOpen(!dropdownOpen)}>
            <MobileIcon src="./img/mobile-menu-icon.png" alt="Mobile Menu" />
          </MobileMenuButton>
        </Links>
        <Icons>
          <Dropdown>
            <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
              <Icon src="./img/desktop-menu-icon.png" alt="Desktop Menu" />
            </DropdownButton>
            <DropdownContent>
              {menuItems.map((item, index) => (
                <DropdownItem key={index}>{item}</DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>
          <GradientButton>Hire Now</GradientButton>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
