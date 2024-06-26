import { Paper, Button, Title, Anchor, Text } from "@mantine/core";
import classes from "./Logout.module.css";
import { Link } from "react-router-dom";
export function LogOut() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Logged out!
        </Title>
        <p>Thankyou for using SkillSetGo</p>

        <Button fullWidth mt="xl" size="md">
          <Anchor c="white" component={Link} to="/login" fw={700}>
            Login again
          </Anchor>
        </Button>

        <Text ta="center" mt="md">
          Having issues? {" "}
          <Anchor component={Link} to="/contact-us" fw={700}>
            Contact us
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
