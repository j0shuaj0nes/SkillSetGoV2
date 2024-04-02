
import React from 'react';
import { Container, Card, Text, Button } from '@mantine/core';


const Financers = [
  { id: 1, name: 'John DoeFinance', country: 'USA', skills: 'React, Node.js' },
  { id: 2, name: 'Jane Smith', country: 'Canada', skills: 'HTML, CSS, JavaScript' },
];


const Finance = () => {
  const handleFollow = (userId) => {
    // FOlloowwww buttonnnnn logicc --> add to array, addtoGroup mutation
    console.log(`User with ID ${userId} followed`);
  };

  return (
    <Container>
          <h1>Finance</h1>
          {Financers.map((user) => (
              <Card key={user.id} shadow="sm" style={{ marginBottom: 20 }}>
                  <Text weight={600} size="lg" style={{ marginBottom: 10 }}>
                      {user.name}
                  </Text>
                  <Text size="sm" color="gray" style={{ marginBottom: 10 }}>
                      {user.country}
                  </Text>
                  <Text size="sm" style={{ marginBottom: 20 }}>
                      Skills: {user.skills}
                  </Text>
                  <Button color="blue" onClick={() => handleFollow(user.id)}>
                      Follow
                  </Button>
              </Card>
          ))}
      </Container>
  );
};

export default Finance;