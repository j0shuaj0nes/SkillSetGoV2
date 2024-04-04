
import React from 'react';
import { Container, Card, Text, Button } from '@mantine/core';


const investors = [
  { id: 1, name: 'John DoeInvest', country: 'USA', skills: 'React, Node.js' },
  { id: 2, name: 'Jane Smith', country: 'Canada', skills: 'HTML, CSS, JavaScript' },
];


const Investing = () => {
  const handleFollow = (userId) => {
    // FOlloowwww buttonnnnn logicc --> add to array, addtoGroup mutation
    console.log(`User with ID ${userId} followed`);
  };

  return (
    <Container>
          <h1>Investing</h1>
          {investors.map((user) => (
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

export default Investing;