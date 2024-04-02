import React from "react";
import {
  Table,
  Group,
  Text,
  ActionIcon,
  rem,
  Container,
  Title,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, Navigate } from "react-router-dom"; // Import Navigate for redirection
import { QUERY_ME } from "../../utils/queries.js";
import { LEAVE_GROUP } from "../../utils/mutations";
import Auth from "../../utils/auth.js";

export function GroupsJoined() {
  const { loading, error, data } = useQuery(QUERY_ME);
  const { me } = data || {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const rows = data.groups.map((me, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Group gap="sm">
          <Text fz="sm" fw={500}>
            {me.group}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon
            variant="subtle"
            color="red"
            // onClick={() => handleLeaveGroup(group.id)}
          >
            <IconTrash
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Groups Joined
      </Title>
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Group</Table.Th>
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
