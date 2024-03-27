import React from "react";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, Text, AppShell, Group, Container } from '@mantine/core';
import { NavbarSimple } from '../Dashboard/NavbarSimple';
import GoogleHeader from '../../components/Header';

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <AppShell
    header={{ height: 60 }}
    padding="md"
    >
      <AppShell.Header>
      <GoogleHeader/>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">
      <NavbarSimple />
      </AppShell.Navbar> */}

        <Container>
      <Group className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <Avatar
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <Text size="xs" >{message.name}</Text>
        <Text>{message.text}</Text>
        </div>
      </Group>
      </Container>

</AppShell>
  );
};

export default Message;
