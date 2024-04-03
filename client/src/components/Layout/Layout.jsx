import Header from "../../components/Header";
import { NavbarSimple } from "../../components/Layout/NavbarSimple";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Center } from "@mantine/core";
import { Outlet, useNavigate } from "react-router-dom";
import auth from "../../utils/auth";


const isLoggedIn = auth.loggedIn();

export default function AppLayout({loggedIn, setLoggedIn}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  console.log('Welcome -> loggedIn', loggedIn);


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

      <AppShell.Navbar p="sm" zIndex={3}>
        <NavbarSimple />
      </AppShell.Navbar>

      <AppShell.Main>
        {/* Main content goes here */}
        <Outlet/>
      </AppShell.Main>

    </AppShell>
    
  );
}