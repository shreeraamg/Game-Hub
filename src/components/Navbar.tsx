import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" p="10px">
      <Image src={logo} boxSize="60px" alt="Game Hub Logo" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
