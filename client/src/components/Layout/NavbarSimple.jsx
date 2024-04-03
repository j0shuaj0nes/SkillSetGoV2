import { useState } from "react";
import {
  IconFriends,
  IconLogout,
  IconMessageChatbot,
  IconUserCircle,
  IconPlugConnected,
  IconUsersGroup,
  IconHome,
} from "@tabler/icons-react";
import { Box, NavLink, Burger, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import classes from "./NavbarSimple.module.css";
import Auth from "../../utils/auth";

const data = [
  { href: "/", label: "", icon: IconHome},
  { href: "/profile-login", label: "Profile", icon: IconUserCircle },
  { href: "/groups-joined", label: "Groups", icon: IconUsersGroup },
  { href: "/user-following", label: "Following", icon: IconFriends },
  { href: "/groups", label: "Connect", icon: IconPlugConnected },
  { href: "/chatbox", label: "Chatbox", icon: IconMessageChatbot },
];

export function NavbarSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  console.log(logout)

  const items = data.map((item, index) => (
    <NavLink
      component={Link} to={item.href}
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

      <div className="logout">
      <Anchor className={classes.link} onClick={logout} component={Link} to="/logout">
          <IconLogout className={classes.linkIcon} size="1rem" stroke={1.5} />
          <span>Logout</span>
          </Anchor>


      </div>

    </Box>
  );
}
