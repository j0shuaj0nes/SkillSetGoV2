import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    Center
  } from '@mantine/core';
  import classes from './LogIn.module.css';
  import {Link} from 'react-router-dom'
  import React from "react";
  import GoogleSignin from "../../assets/btn_google_signin_dark_pressed_web.png";
  import { auth } from "../../utils/firebase";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  

  export function LogIn() {
   
      const googleSignIn = async() => {
        const provider = new GoogleAuthProvider();
        const result= await signInWithPopup(auth, provider);
        console.log(result)
      };

    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome back to Mantine!
          </Title>
  
          <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md">
            Login
          </Button>

          <Text ta="center" mt="md">or Login with Google</Text>
          <Center>
          <Button >
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
        />
      </Button>
      </Center>
          <Text ta="center" mt="md">
            Don't have an account?{' '}
            <Anchor component={Link} to="/signup" fw={700} >
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }