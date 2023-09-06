import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/porshcelogo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBAr</Text>
    </HStack>
  );
};

export default NavBar;