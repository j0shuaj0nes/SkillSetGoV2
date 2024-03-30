import { Avatar, Table, Group, Text, ActionIcon, Anchor, rem, Container, Title } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import classes from "./UserFollowing.module.css"

const data = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    username: 'robbie',
    givenName: 'Robbie',
    familyName: 'Wolf',
    group: 'Coding',
    email: 'rob_wolf@gmail.com',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    username: 'jj',
    givenName: 'Jill',
    familyName: 'Breaker',
    group: 'Communication',
    email: 'jj@breaker.com',
  }
];


export function UserFollowing() {
  const rows = data.map((item) => (
    <Table.Tr key={item.username}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text fz="sm" fw={500}>
            {item.username}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.givenName}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.familyName}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.group}</Text>
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {item.email}
        </Anchor>
      </Table.Td>
      
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="red">
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Following
      </Title>
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Username</Table.Th>
            <Table.Th>Given name</Table.Th>
            <Table.Th>Family name</Table.Th>
            <Table.Th>Group</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Action</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
    </Container>
  );
}