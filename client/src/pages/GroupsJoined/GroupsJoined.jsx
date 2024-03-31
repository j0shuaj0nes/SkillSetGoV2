import {
  Table,
  Group,
  Text,
  ActionIcon,
  rem,
  Container,
  Title
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import classes from "./GroupsJoined.module.css"
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries.js';
import Auth from '../../utils/auth.js';

export function GroupsJoined() {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
    const user = data?.me || data?.user || {};
  
    if (Auth.loggedIn() && Auth.getProfile().authenticatedPerson.username === userParam) {
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
    
    const groupdata = [{name: userParam ? user.groups : '',},];
    
    const rows = groupdata.map((item) => (
      <Table.Tr key={item.name}>
        <Table.Td>
          <Group gap="sm">
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>
  
        <Table.Td>
          <Group gap={0} justify="flex-end">
            <ActionIcon variant="subtle" color="red">
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