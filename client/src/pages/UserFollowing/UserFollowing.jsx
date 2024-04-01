import { Avatar, Table, Group, Text, ActionIcon, Anchor, rem, Container, Title, Grid, Center } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { useQuery, useMutation } from '@apollo/client'; 
import classes from "./UserFollowing.module.css"
import { QUERY_ME } from '../../utils/queries.js';
import { DELETE_FOLLOWER } from '../../utils/mutations.js';

export function UserFollowing() {
  const { loading, data } = useQuery(QUERY_ME);
  const followers = data?.followers || [];
  
  const [deleteFollowerMutation] = useMutation(DELETE_FOLLOWER, {
    refetchQueries: [{ query: QUERY_ME }] // Refetch QUERY_ME after mutation
  });

  const handleDeleteFollower = (followerId) => {
    deleteFollowerMutation({
      variables: { _id: followerId }
    });
  };

  const rows = followers.map((follower) => (
    <Table.Tr key={follower._id}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={30} src={follower.avatar} radius={30} />
          <Text fz="sm" fw={500}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              follower.username
            )}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{follower.groups}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="center">
          <ActionIcon variant="subtle" color="red" onClick={() => handleDeleteFollower(follower._id)}>
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="xxl" py="xs">
      <Center>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Following
        </Title>
      </Center>
      <Grid>
        <Grid.Col span={4}></Grid.Col>
        <Grid.Col span={7}>
          <Table.ScrollContainer minWidth={200}>
            <Table verticalSpacing="sm">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Username</Table.Th>
                  <Table.Th>Group</Table.Th>
                  <Table.Th>Action</Table.Th>
                  <Table.Th />
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Grid.Col>
      </Grid>
    </Container>
  );
}