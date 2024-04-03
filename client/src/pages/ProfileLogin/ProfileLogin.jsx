import React, { useState } from 'react';
import {
  Badge,
  Text,
  Card,
  Center,
  SimpleGrid,
  Container,
  rem,
  Table,
  Group,
  ActionIcon,
  useMantineTheme,
  TextInput,
} from '@mantine/core';
import { IconSwords, IconWorldStar, IconPencil, IconCheck, IconX } from '@tabler/icons-react';
import classes from './Profile.module.css';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries.js';
import { UPDATE_USER } from '../../utils/mutations.js';

const ProfileLogin = () => {
  const theme = useMantineTheme();
  const { loading, error, data, refetch } = useQuery(QUERY_ME);
  const { me } = data || {};

  const [editIndex, setEditIndex] = useState(null); // Store the index of the row being edited
  const [editedValues, setEditedValues] = useState({}); // Store edited values temporarily

  const [updateUser] = useMutation(UPDATE_USER, {
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedValues({
      username: me.username || '',
      givenName: me.givenName || '',
      familyName: me.familyName || '',
      email: me.email || '',
      country: me.country || '',
    });
  };

  const handleSave = async () => {
    try {
      await updateUser({
        variables: {
          username: editedValues.username,
          givenName: editedValues.givenName,
          familyName: editedValues.familyName,
          email: editedValues.email,
          country: editedValues.country,
        },
      });
      await refetch();
      setEditIndex(null); // Exit edit mode
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleCancel = () => {
    setEditIndex(null); // Exit edit mode
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const rows = me ? (
    <Table.Tr>
      <Table.Td>
        {editIndex !== 0 ? (
          <Text fz="sm" fw={500}>
            {me.username}
          </Text>
        ) : (
          <TextInput
            value={editedValues.username}
            onChange={handleChange}
            name="username"
            size="xs"
          />
        )}
      </Table.Td>
      <Table.Td>
        {editIndex !== 0 ? (
          <Text fz="sm">{me.givenName}</Text>
        ) : (
          <TextInput
            value={editedValues.givenName}
            onChange={handleChange}
            name="givenName"
            size="xs"
          />
        )}
      </Table.Td>
      <Table.Td>
        {editIndex !== 0 ? (
          <Text fz="sm">{me.familyName}</Text>
        ) : (
          <TextInput
            value={editedValues.familyName}
            onChange={handleChange}
            name="familyName"
            size="xs"
          />
        )}
      </Table.Td>
      <Table.Td>
        {editIndex !== 0 ? (
          <Text fz="sm">{me.email}</Text>
        ) : (
          <TextInput
            value={editedValues.email}
            onChange={handleChange}
            name="email"
            size="xs"
          />
        )}
      </Table.Td>
      <Table.Td>
        {editIndex !== 0 ? (
          <Text fz="sm">{me.country}</Text>
        ) : (
          <TextInput
            value={editedValues.country}
            onChange={handleChange}
            name="country"
            size="xs"
          />
        )}
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          {editIndex !== 0 ? (
            <ActionIcon variant="subtle" color="gray" onClick={() => handleEdit(0)}>
              <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </ActionIcon>
          ) : (
            <>
              <ActionIcon variant="subtle" color="green" onClick={handleSave}>
                <IconCheck style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="red" onClick={handleCancel}>
                <IconX style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              </ActionIcon>
            </>
          )}
        </Group>
      </Table.Td>
    </Table.Tr>
  ) : null;

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="xl">
          Profile
        </Badge>
      </Group>
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Username</Table.Th>
              <Table.Th>Given name</Table.Th>
              <Table.Th>Family name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Country</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <Center>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          <Card key={1} shadow="md" radius="md" className={classes.card} padding="xl">
            <IconSwords
              style={{ width: rem(50), height: rem(50) }}
              stroke={2}
              color={theme.colors.blue[6]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
              Skills Offering
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
              {me ? me.skillsOffering : ''}
            </Text>
          </Card>
          <Card key={2} shadow="md" radius="md" className={classes.card} padding="xl">
            <IconWorldStar
              style={{ width: rem(50), height: rem(50) }}
              stroke={2}
              color={theme.colors.blue[6]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
              Skills interested in acquiring
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
              {me ? me.skillsInterestedIn : ''}
            </Text>
          </Card>
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default ProfileLogin;
