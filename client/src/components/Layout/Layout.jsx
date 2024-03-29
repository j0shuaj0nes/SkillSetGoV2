import { AppShell, Burger, Group } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import Header from "../../components/Header";
import { NavbarSimple } from "../../components/Layout/NavbarSimple";

export default function AppLayout({children} : PropsWithChildren) {

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
      
    
      </AppShell.Main>
    </AppShell>
  );
}
