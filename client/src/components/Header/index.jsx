import { Link } from "react-router-dom";
import { Avatar, Container, Button, Title, Group, Anchor, Menu, UnstyledButton, rem, Text } from "@mantine/core";
import Auth from "../../utils/auth";
import classes from "./header.css";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from "@tabler/icons-react";
import { useState } from "react"

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const user = {
    name: "Jane Doe",
    email: "jandoen@fighter.dev",
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
  };

  const [userMenuOpened, setUserMenuOpened] = useState(false)

  return (
    <div className={classes.header}>
      <Container size="responsive" className={classes.inner}>
        <Group justify="space-between">
          <Title className={classes.title}>SkillSetGo</Title>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/me">
                  {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                  {Auth.getProfile().authenticatedPerson.username}'s profile
                </Link>
                {/* <Button
                  variant="outline"
                  color="gray"
                  className="btn-lg m-2"
                  onClick={logout}
                >
                  Logout
                </Button> */}
              </>
            ) : (
              <>
                {/* <Button me={2} variant="filled">
                  <Anchor c="white" component={Link} to="/login">
                    Login
                  </Anchor>
                </Button>
                <Button variant="filled">
                  <Anchor c="white" component={Link} to="/signup">
                    Signup
                  </Anchor>
                </Button> */}
              </>
            )}
          
          <Menu
        width={260}
        position="bottom-end"
        transitionProps={{ transition: "pop-top-right" }}
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton
            className={(classes.user, {
              [classes.userActive]: userMenuOpened,
            })}
          >
            <Group gap={7}>
              <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
              <Text fw={500} size="sm" lh={1} mr={3}>
                {user.name}
              </Text>
              <IconChevronDown
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconHeart
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Liked posts
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconStar
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Saved posts
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconMessage
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Your comments
          </Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item
            leftSection={
              <IconSettings
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSwitchHorizontal
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Change account
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            leftSection={
              <IconPlayerPause
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Pause subscription
          </Menu.Item>
          <Menu.Item
            color="red"
            leftSection={
              <IconTrash
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
          
          </div>
        </Group>
      </Container>
      
    </div>
  );
};

export default Header