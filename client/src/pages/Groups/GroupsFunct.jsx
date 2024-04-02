import React from 'react';
import { Container, Heading, Button, TextInput, Group, Col } from '@mantine/core';

const MyPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // form submmiitttttt logiiccc
    console.log('Form submitted!');
  };

  return (
    <Container style={{ backgroundImage: 'url(https://www.designscene.net/wp-content/uploads/2023/07/Zoom-Backgrounds-1-730x487.jpg)' }}>
      <Heading align="center" order={1} style={{ marginBottom: 20 }}>
        Welcome to My Mantine Page
      </Heading>

      <Group position="center">
        <Col span={12}>
          <Button color="teal" fullWidth>
            Button 1
          </Button>
        </Col>
        <Col span={12}>
          <Button color="red" fullWidth>
            Button 2
          </Button>
        </Col>
        <Col span={12}>
          <Button color="blue" fullWidth>
            Button 3
          </Button>
        </Col>
        <Col span={12}>
          <Button color="green" fullWidth>
            Button 4
          </Button>
        </Col>
        <Col span={12}>
          <Button color="purple" fullWidth>
            Button 5
          </Button>
        </Col>
        <Col span={12}>
          <Button color="yellow" fullWidth>
            Button 6
          </Button>
        </Col>
      </Group>

      <form onSubmit={handleSubmit}>
        <TextInput placeholder="Enter your name" />
        <Button type="submit" color="blue" fullWidth style={{ marginTop: 20 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default MyPage;