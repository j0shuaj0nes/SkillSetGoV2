import React from 'react';
import classes from './Groups.css';
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
    Button,
    rgba,
  } from '@mantine/core';
  import { IconCode, IconGavel, IconCash, IconMessage2Share, IconCategory2, IconChartPie } from '@tabler/icons-react';
  import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

  

const data = [
  {
    title: 'Coding',
    description:
      'Coding is essential for innovation and problem-solving in todays digital world.',
    icon: IconCode,
  },
  {
    title: 'Communication',
    description:
      'Effective communication is crucial for fostering understanding and collaboration.',
    icon: IconMessage2Share,
  },
  {
    title: 'Investing',
    description:
      'Investing is key to building wealth and achieving financial goals',
    icon: IconCash,
  },
  {
    title: 'Finance',
    description:
      'Finance plays a vital role in economic growth and financial stability',
    icon: IconChartPie,
  },{
    title: 'Entrepreneurship',
    description:
      'Entrepreneurship drives innovation, job creation, and economic development',
    icon: IconCategory2,
  },
  {
    title: 'Business Law',
    description:
      'Ensuring fair and ethical business practices, protecting rights and promoting trust',
    icon: IconGavel,
  },
];



const MyPage = () => {
    const theme = useMantineTheme();
    const categories = ['coding', 'communication', 'investing', 'finance', 'entrepreneurship', 'business-law']
    // const {loading, data} = useQuery ()
    const { loading, error, data } = useQuery(QUERY_ME);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const { me } = data;

    const features = data.map((feature, index) => (
        <Card key={feature.title} shadow="md" radius="md" padding="xl">
          <feature.icon
            style={{ width: rem(50), height: rem(50) }}
            stroke={2}
            color={theme.colors.blue[6]}
          />
          <Text fz="lg" fw={500} mt="md">
            {feature.title}
            {me.username}
            const { data } = await
          </Text>
          <Text fz="sm" c="dimmed" mt="sm">
            {feature.description}
          </Text>
          <Link to={`/groups/${categories[index]}`}>
            <Button fullWidth className={classes.button}>
              <div className={classes.label}>Meet Experts</div>
            </Button>
          </Link>
        </Card>
      ));
      return (
        <Container size="lg" py="xl">
          <Group justify="center">
            <Badge variant="filled" size="xl">
              SkillSetGo
            </Badge>
          </Group>
    
          <Title order={2} className={classes.title} ta="center" mt="sm">
          Connect and exchange expertise with professionals from all over the world
          </Title>
    
          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            
          </Text>
    
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
            {features}
          </SimpleGrid>
        </Container>
  );
};

export default MyPage;
