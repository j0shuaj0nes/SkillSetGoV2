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
import { QUERY_USER, QUERY_ME } from "../../utils/queries.js";
import { LEAVE_GROUP } from "../../utils/mutations";
import Auth from "../../utils/auth.js";

export function GroupsJoined() {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  // Log the loaded data and user information
  console.log("Loading:", loading);
  console.log("Data:", data);
  console.log("User:", user);

  // Redirect if the user is not authenticated
  if (
    Auth.loggedIn() &&
    Auth.getProfile().authenticatedPerson.username === userParam
  ) {
    return <Navigate to="/groups-joined" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const [leaveGroupMutation] = useMutation(LEAVE_GROUP, {
    refetchQueries: [
      {
        query: userParam ? QUERY_USER : QUERY_ME,
        variables: { username: userParam },
      },
    ],
  });

  const handleLeaveGroup = async (groupId) => {
    try {
      await leaveGroupMutation({
        variables: { groupId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const rows = user.groups.map((group) => (
    <Table.Tr key={group.id}>
      <Table.Td>
        <Group gap="sm">
          <Text fz="sm" fw={500}>
            {group.name}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon
            variant="subtle"
            color="red"
            onClick={() => handleLeaveGroup(group.id)}
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
