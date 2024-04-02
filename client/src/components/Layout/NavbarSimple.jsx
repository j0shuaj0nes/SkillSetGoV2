import { useState } from "react";
import {
  IconFriends,
  IconLogout,
  IconMailbox,
  IconMessageChatbot,
  IconUserCircle,
  IconPlugConnected,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Box, NavLink, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const data = [
  { href: "/profile", label: "Profile", icon: IconUserCircle },
  { href: "/groups-joined", label: "Groups", icon: IconUsersGroup },
  { href: "/user-following", label: "Following", icon: IconFriends },
  { href: "/groups", label: "Connect", icon: IconPlugConnected },
  { href: "/chatbox", label: "Chatbox", icon: IconMessageChatbot },
  { href: "/contact-us", label: "Contact us", icon: IconMailbox },
  { href: "/logout", label: "Logout", icon: IconLogout },
];

export function NavbarSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      href={item.href}
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Box w={200}>
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        aria-label="Toggle navigation"
      />
      {items}
    </Box>
  );
}
