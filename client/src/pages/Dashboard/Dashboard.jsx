import {
  Button,
  Card,
  Center,
  Grid,
  Group,
  Image,
  Text,
  Title,
  Stack,
} from "@mantine/core";
import classes from "./Dashboard.module.css";
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
  return (
    <div>
      <Center>
        <Stack h={100}>
          <Title className={classes.title}>Welcome</Title>
          <Title order={2}> SkillSetGo Dashboard</Title>
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
                {content.button}
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
