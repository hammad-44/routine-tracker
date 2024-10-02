// src/components/TaskForm.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  useToast,
} from '@chakra-ui/react';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const toast = useToast();

  const scheduleNotification = (task) => {
    const notificationTime = new Date(`1970-01-01T${task.time}:00Z`); // Create a date object for the specified time
    const timeToNotification = notificationTime.getTime() - Date.now();

    if (timeToNotification > 0) {
      setTimeout(() => {
        new Notification('Task Reminder', {
          body: `Time to: ${task.title}`,
        });
      }, timeToNotification);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = { title, description, time, category, createdAt: new Date() };
      
      // Add task to Firestore
      await addDoc(collection(db, 'tasks'), newTask);

      // Schedule notification for the task
      scheduleNotification(newTask);

      toast({
        title: 'Task added.',
        description: "Your task has been successfully added.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset form fields
      setTitle('');
      setDescription('');
      setTime('');
      setCategory('');
    } catch (error) {
      toast({
        title: 'Error adding task.',
        description: "There was an issue adding the task.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <FormControl id="title" isRequired>
          <FormLabel>Task Title</FormLabel>
          <Input
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl id="description">
          <FormLabel>Task Description</FormLabel>
          <Textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl id="time" isRequired>
          <FormLabel>Task Time</FormLabel>
          <Input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </FormControl>

        <FormControl id="category" isRequired>
          <FormLabel>Task Category</FormLabel>
          <Select
            placeholder="Select category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Health">Health</option>
            <option value="Exercise">Exercise</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Posture">Posture</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>

        <Button colorScheme="blue" type="submit" width="full">
          Add Task
        </Button>
      </VStack>
    </Box>
  );
};

export default TaskForm;
