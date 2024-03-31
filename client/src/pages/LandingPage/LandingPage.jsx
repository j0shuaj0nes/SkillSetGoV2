import cx from 'clsx';
import { Title, Text, Container, Button, Overlay, Center } from '@mantine/core';
import classes from './LandingPage.module.css';

export function LandingPage() {
  return (
    <Center h="100vh" className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          SkillSetGo{' '}
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            SkillSetGo connects you with a global community of professionals eager to trade a skill.
            Simply create a profile showcasing your talents, browse through a diverse range of skills offered by others, and connect instantly.

            Join Skills-book today and let's start sharing, learning, and growing together!

          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Log In
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Sign Up
          </Button>
        </div>
      </div>
    </Center>
  );
}