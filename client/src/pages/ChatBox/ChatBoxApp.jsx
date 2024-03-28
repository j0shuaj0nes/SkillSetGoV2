import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "./ChatBox";
import Welcome from "./WelcomeChat";
import { Group} from '@mantine/core';

function ChatBoxApp() {
  const [user] = useAuthState(auth);

  return (
    <Group>
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </Group>
  );
}

export default ChatBoxApp;
