import Header from "../../components/Header";
import { NavbarSimple } from "../../components/Layout/NavbarSimple";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Center } from "@mantine/core";

export default function AppLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  // console.log('Welcome -> loggedIn', loggedIn);


  return (
    // // Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following:
    // loggedIn ? (
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 210,
          breakpoint: "sm",
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding= {{ base: 10, sm: 15, lg: 'xl' }}
      >
        {/* <Center inline> */}
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
        {/* </Center> */}

        <AppShell.Navbar p="sm">
          <NavbarSimple />
        </AppShell.Navbar>
        <Center>
        <AppShell.Main>
          {/* Main content goes here */}
        </AppShell.Main>
        </Center>
      </AppShell>
    // ) : (
    //   // If we are logged out, render no AppLayout:
    //   null
    // )
  );
}
