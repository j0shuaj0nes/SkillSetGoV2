import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "../Dashboard/NavbarSimple";
import {
  AppShell,
  Burger,
  Group,
  Center,
  Title,
  Grid,
  Card,
  Image,
  Text,
  Stack,
  Button,
} from "@mantine/core";
import classes from "./Dashboard.module.css";
import Header from "../../components/Header";
import CaneraRecording from "../../assets/CameraRecording.jpg";

const cardContents = [
  {
    img: CaneraRecording,
    imgAlt: 'Camera recording image by vectorjuice on Freepik',
    title: "Create a 'How-To-Series'",
    desc: "Create an instructional video to show off your expertise and create a following."
  },
]

export function Dashboard() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const WelcomeMessage = (props) => {
    const { isLoggedIn, user } = props;
    return (
      <div>
        {isLoggedIn ? (
          <h2>Welcome back, {user}!</h2>
        ) : (
          <p>Please log in to continue </p>
        )}
      </div>
    );
  };
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header bg="var(--mantine-color-blue-light)">
        <Header />
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavbarSimple />
      </AppShell.Navbar>

      <AppShell.Main>
        <Center>
          <Stack h={100}>
            <Title className={classes.title}>
              Welcome
              {/* <WelcomeMessage user={user} isLoggedIn = {isLoggedIn}/> */}
            </Title>
            <Text className={classes.title}> SkillSetGo Resources</Text>
          </Stack>
        </Center>

        {/*Create a video card*/}
        <Grid>
          {cardContents.map((content) => (

            <Grid.Col key={content.title} span={4}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={content.img}
                    height={160}
                    alt={content.imgAlt}
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>{content.title}</Text>
                </Group>

                <Center>
                  <Text size="sm" c="dimmed">
                    {content.desc}
                  </Text>
                </Center>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Create
                </Button>
              </Card>
            </Grid.Col>
          ))}

          {/*Portfolio building card*/}
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Create a portfolio image by vectorjuice on Freepik"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Portfolio Building</Text>
              </Group>
              <Center>
                <Text size="sm" c="dimmed">
                  Build your professional portfolio to showcase your skills &
                  projects to potential clients and employers
                </Text>
              </Center>
              <Button color="blue" fullWidth mt="md" radius="md">
                Build
              </Button>
            </Card>
          </Grid.Col>

          {/*Collaboration card*/}
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Collaboration image by stockgiu on Freepik"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Collaborate & Projects</Text>
              </Group>
              <Center>
                <Text size="sm" c="dimmed">
                  Collaborate with your fellow SkillSetGoers on interesting
                  projects.
                </Text>
              </Center>
              <Button color="blue" fullWidth mt="md" radius="md">
                Collaborate
              </Button>
            </Card>
          </Grid.Col>

          {/*Mentorship card*/}
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Mentor image by jcomp on Freepik"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Mentorship</Text>
              </Group>
              <Center>
                <Text size="sm" c="dimmed">
                  Find mentors or offer mentorship to those looking to learn
                  from your expertise.
                </Text>
              </Center>
              <Button color="blue" fullWidth mt="md" radius="md">
                Find
              </Button>
            </Card>
          </Grid.Col>

          {/*Library card*/}
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Learning library image by vectorjuice on Freepik"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Learning Library</Text>
              </Group>

              <Text size="sm" c="dimmed">
                Browse through SkillSetGo's comprehensive library for tutorials,
                resources and workshops to up-skill yourself.
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Browse
              </Button>
            </Card>
          </Grid.Col>

          {/*Q&A card*/}
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Learning library image by vectorjuice on Freepik"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Q&A and Discussions</Text>
              </Group>

              <Text size="sm" c="dimmed">
                Participate in discussions, ask questions and seek advice from
                experts or the community.
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Participate
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}
