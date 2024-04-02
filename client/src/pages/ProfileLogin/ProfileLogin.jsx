import {
  Title,
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
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries.js';
import Auth from '../../utils/auth.js';

const ProfileLogin = () => {
  const theme = useMantineTheme();
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // if (Auth.loggedIn() && Auth.getProfile().authenticatedPerson.username === userParam) {
  //   return <Navigate to="/dashboard" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  const userdata = [
    {
      username: userParam ? user.username : '',
      givenName: userParam ? user.givenName : '',
      familyName: userParam ? user.familyName : '',
      email: userParam ? user.email : '',
      country: userParam ? user.country : '',
    },
  ];

  const skillsData = [
    {
      title: 'Skills Offering',
      description: userParam ? user.skillsOffering: '',
      icon: IconSwords,
    },
    {
      title: 'Skills interested in acquiring',
      description: userParam ? user.sillsInterestedIn : '',
      icon: IconWorldStar,
    }
  ];

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
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Profile
      </Title>
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
