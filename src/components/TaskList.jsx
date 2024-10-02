// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  IconButton,
  Divider,
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const tasksData = [];
      snapshot.forEach((doc) => tasksData.push({ ...doc.data(), id: doc.id }));
      setTasks(tasksData);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    toast({
      title: 'Task deleted.',
      description: "Your task has been successfully deleted.",
      status: 'info',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={4} maxWidth="700px" mx="auto" my={6}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Task List
      </Heading>
      {tasks.length === 0 ? (
        <Text>No tasks available. Add a task to get started.</Text>
      ) : (
        <VStack spacing={4} align="stretch">
          {tasks.map((task) => (
            <Box key={task.id} p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <Text fontWeight="bold">{task.title}</Text>
                  <Text>{task.description}</Text>
                  <Text fontSize="sm" color="gray.500">
                    Time: {task.time}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Category: {task.category}
                  </Text>
                </VStack>
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleDelete(task.id)}
                  aria-label="Delete Task"
                />
              </HStack>
              <Divider mt={4} />
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default TaskList;
