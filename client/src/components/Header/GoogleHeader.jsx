import React from "react";
// import GoogleSignin from "../../assets/btn_google_signin_dark_pressed_web";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Container, Title} from '@mantine/core';

const GoogleHeader = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <Container>
      <Title>SkillSetGo Chat</Title>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            // src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </Container>
  );
};

export default GoogleHeader;
