import { Link } from 'react-router-dom';
import { Container, Button, Title, Burger, Group, Anchor, MantineProvider,createTheme } from '@mantine/core';
import Auth from '../../utils/auth';
import classes from './header.css' 

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const theme = createTheme({
    components: {
      Container: Container.extend({
        classNames: (_, { size }) => ({
          root: ({ [classes.responsiveContainer]: size === 'responsive' }),
        }),
      }),
    },
  });


  return (
    <header className={classes.header}>
  
      <MantineProvider theme={theme}>
        <Container size="responsive" bg="var(--mantine-color-blue-light)" className={classes.inner}>
        <Group justify="flex-start">
        <Title className={classes.title}>SkillSetGo</Title>
        </Group>
        <Group justify="flex-end" gap={5} visibleFrom="xs">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                {Auth.getProfile().authenticatedPerson.username}'s profile
              </Link>
              <Button variant="outline" color="gray" className="btn-lg m-2" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="filled">
                <Anchor href="/login">Login</Anchor>
              </Button>
              <Button variant="filled">
               <Anchor href="/signup">Signup</Anchor>
              </Button>
            </>
          )}
        </Group>
        {/* <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
        </Group> */}
      </Container>
      </MantineProvider>
    </header>
  );
};

export default Header;