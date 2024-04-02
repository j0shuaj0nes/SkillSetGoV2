import React from 'react';
import { Container, Card, Text, Button, Paper, Avatar } from '@mantine/core';


const investors = [
  { id: 1, name: 'John DoeInvest', country: 'USA', skills: 'React, Node.js' },
  { id: 2, name: 'Jane Smith', country: 'Canada', skills: 'HTML, CSS, JavaScript' },
];


const Following = () => {
  const handleFollow = (userId) => {
    // FOlloowwww buttonnnnn logicc --> add to array, addtoGroup mutation
    console.log(`User with ID ${userId} followed`);
  };

  return (
    <><h1></h1><Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
          <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              size={120}
              radius={120}
              mx="auto" />
          <Text ta="center" fz="lg" fw={500} mt="md">
              Jane Fingerlicker
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
              jfingerlicker@me.io • Art director
          </Text>

          <Button variant="default" fullWidth mt="md">
              Send message
          </Button>
      </Paper></>
  );
};

export default Following;