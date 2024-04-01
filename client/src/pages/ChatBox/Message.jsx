import React from "react";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, Text, Group, Container } from '@mantine/core';


const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
   
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
  );
};

export default Message;
