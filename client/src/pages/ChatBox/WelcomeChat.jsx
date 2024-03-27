import React from "react";
import GoogleSignin from "../../assets/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AppShell, Title, Center, Stack, Button} from '@mantine/core';
// import {GoogleHeader} from '../../components/Header/GoogleHeader';

const WelcomeChat = () => {

  const googleSignIn = async() => {
    const provider = new GoogleAuthProvider();
    const result= await signInWithPopup(auth, provider);
    console.log(result)
  };

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      >
      <AppShell.Header>
      {/* <GoogleHeader /> */}
      </AppShell.Header>

      <AppShell.Main>
     
      <Center>
      <Stack>
      <Title>Welcome to SkillSetGo Chat</Title>
      <p>Sign in with Google to chat with with your fellow SkillSetGoers</p>
      <Button variant="transparent">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
        />
      </Button>
      </Stack>
      </Center>
      
      </AppShell.Main>
      </AppShell>
  );
};

export default WelcomeChat;
