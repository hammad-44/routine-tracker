// src/App.js
import React, { useState,useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {
  Box,
  Button,
  Heading,
  Flex,
  useDisclosure,
  useColorMode,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const App = () => {


  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    // Request permission for notifications
    if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted');
        }
      });
    }
  }, []);


  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Heading as="h1" size="xl">
          Daily Routine Tracker
        </Heading>
        <IconButton
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          variant="outline"
          colorScheme={colorMode === 'light' ? 'blue' : 'orange'}
        />
      </Flex>

      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        maxWidth="1200px" 
        mx="auto" 
        p={4} 
        gap={4}
      >
            {/* Button to show/hide Task Form on small screens */}
      <Button 
        onClick={onToggle} 
        display={{ base: 'block', md: 'none' }} 
        colorScheme="blue" 
        mt={4}
      >
        {isOpen ? 'Hide Add Task Form' : 'Show Add Task Form'}
      </Button>
        <Box 
          flex={{ base: '1', md: '1' }} 
          display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        >
          <TaskForm />
        </Box>

        <Box flex={{ base: '1', md: '1' }}>
          <TaskList />
        </Box>
      </Flex>

  
    </Box>
  );
};

export default App;
