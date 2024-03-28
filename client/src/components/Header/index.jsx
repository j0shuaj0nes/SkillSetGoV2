import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Title,
  Burger,
  Group,
  Anchor,
  createTheme,
  Center,
} from "@mantine/core";
import Auth from "../../utils/auth";
import classes from "./header.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const theme = createTheme({
    components: {
      Container: Container.extend({
        classNames: (_, { size }) => ({
          root: { [classes.responsiveContainer]: size === "responsive" },
        }),
      }),
    },
  });

  return (
    <div className={classes.header}>
      <Container
        size="responsive"
        className={classes.inner}
      >
        
        <Group justify="space-between">
          <Title className={classes.title}>SkillSetGo</Title>
          <div>

            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/me">
                  {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                  {Auth.getProfile().authenticatedPerson.username}'s profile
                </Link>
                <Button
                  variant="outline"
                  color="gray"
                  className="btn-lg m-2"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button me={2} variant="filled">
                  <Anchor c="white" component={Link} to="/login">Login</Anchor>
                </Button>
                <Button  variant="filled">
                  <Anchor c="white" component={Link} to="/signup">Signup</Anchor>
                </Button>
              </>
            )}
          </div>
        </Group>
  
        {/* <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
        </Group> */}
      </Container>
    </div>
  );
};

export default Header;
