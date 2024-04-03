import React from 'react';
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
} from '@mantine/core';
import { IconSwords, IconWorldStar, IconPencil } from '@tabler/icons-react';
import classes from './Profile.module.css';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries.js';

const ProfileLogin = () => {
  const theme = useMantineTheme();
  const { loading, error, data } = useQuery(QUERY_ME);
  const { me } = data || {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const userdata = [
    {
      username: me.username || '',
      givenName: me.givenName || '',
      familyName: me.familyName || '',
      email: me.email || '',
      country: me.country || '',
    },
  ];
 console.log(userdata)

  const skillsData = [
    {
      title: 'Skills Offering',
      description: me ? me.skillsOffering : '',
      icon: IconSwords,
    },
    {
      title: 'Skills interested in acquiring',
      description: me ? me.skillsInterestedIn : '',
      icon: IconWorldStar,
    }
  ];

  console.log(skillsData)

  const features = skillsData.map((feature, index) => (
    <Card key={index} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  const rows = userdata.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Text fz="sm" fw={500}>
          {item.username}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.givenName}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.familyName}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.email}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.country}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

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
          {features}
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default ProfileLogin;
