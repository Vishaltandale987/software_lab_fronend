import React from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";

import {
  Box,
  Flex,
  Button,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import User_Auth from "./User_Auth";


const Links = [
  { url: "man", title: "Man" },
  { url: "women", title: "Women" },
  { url: "admin", title: "Admin Panel" },

];

let Auth = true;

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("#DADBDD", "gray.900")} px={4} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} 
        
      // pos="fixed"
      >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to="/">
              <Box mr={100}>
                <img src="https://attryb.com/assets/attrybNavLog.svg" alt="" />
              </Box>
            </NavLink>
            <HStack
              as={"nav"}
              spacing={30}
              display={{ base: "none", md: "flex" }}
     
              ml={50}
            >
              <NavLink to="/man">
                <Button>Man</Button>
              </NavLink>

              <NavLink to="/women">
                <Button>Women</Button>
              </NavLink>

              <NavLink to="/admin">
                <Button>Admin Panel</Button>
              </NavLink>

            

            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Button mr={4} onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MoonIcon className="icon" />
              ) : (
                <SunIcon className="icon" />
              )}
            </Button>
            <Menu>
              <User_Auth />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.url}
                  to={`/${link.url}`}
                  onClick={() => {
                    onClose();
                  }}
                >
                  {link.title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;