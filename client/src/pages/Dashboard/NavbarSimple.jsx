import { useState } from 'react';
import {
  IconFriends,
  IconLogout,
  IconMailbox,
  IconMessageChatbot, 
  IconUserCircle,
  IconUsersGroup,
} from '@tabler/icons-react';

import classes from './NavbarSimple.module.css';

const data = [
  { link: '', label: 'Profile', icon: IconUserCircle },
  { link: '/groups', label: 'Groups', icon: IconUsersGroup },
  { link: '/following', label: 'Following', icon: IconFriends},
  { link: '/chatbox', label: 'Chatbox', icon: IconMessageChatbot },
];

export function NavbarSimple() {
  const [active, setActive] = useState();

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        
        {links}
      </div>

      <div className={classes.footer}>
        <a href="/contact-us" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconMailbox className={classes.linkIcon} stroke={1.5} />
          <span>Contact Us</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}