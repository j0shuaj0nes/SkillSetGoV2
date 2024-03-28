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
import CameraRecording from "../../assets/CameraRecording.jpg";
import Collaboration from "../../assets/Collaboration.jpg";
import Library from "../../assets/Library.jpg";
import Mentorship from "../../assets/Mentorship.jpg";
import PortfolioCreation from "../../assets/PortfolioCreation.jpg";
import Questions from "../../assets/Questions.jpg";

const cardContents = [
  {
    img: CameraRecording,
    imgAlt: "Camera recording image by vectorjuice on Freepik",
    title: "Create a 'How-To-Series'",
    desc: "Create an instructional video to show off your expertise and create a following.",
    button: "Create",
  },
  {
    img: PortfolioCreation,
    imgAlt: "Create a portfolio image by vectorjuice on Freepik",
    title: "Portfolio Building",
    desc: "Build your professional portfolio to showcase your skills and projects to potential clients and employers.",
    button: "Build",
  },
  {
    img: Collaboration,
    imgAlt: "Collaboration image by stockgiu on Freepik",
    title: "Collaborate",
    desc: "Collaborate with your fellow SkillSetGoers on interesting projects.",
    button: "Collaborate",
  },
  {
    img: Mentorship,
    imgAlt: "Mentor image by jcomp on Freepik",
    title: "Mentorship",
    desc: "Find mentors or offer mentorship to those looking to learn from your expertise.",
    button: "Find",
  },
  {
    img: Library,
    imgAlt: "Learning library image by vectorjuice on Freepik",
    title: "Learning Library",
    desc: "Browse through SkillSetGo's comprehensive library for tutorials, resources and workshops to up-skill yourself.",
    button: "Browse",
  },
  {
    img: Questions,
    imgAlt: "Question image by vectorjuice on Freepik",
    title: "Q&A and Discussions",
    desc: "Participate in discussions, ask questions and seek advice from experts or the community.",
    button: "Participate",
  },
];

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
      <Center inline>
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
      </Center>


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

        {/* Content Cards */}
        <Grid>
          {cardContents.map((content) => (
            <Grid.Col key={content.title} span={4}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image src={content.img} height={160} alt={content.imgAlt} />
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
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}
