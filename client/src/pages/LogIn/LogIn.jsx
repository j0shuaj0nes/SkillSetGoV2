import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import { useState } from 'react';
import classes from './LogIn.module.css';
import {Link} from 'react-router-dom'
export function LogIn() {
  const [formState, setFormState] = useState({ email: '', password: '' });
const [login, { error, data }] = useMutation(LOGIN_USER);

const handleChange = (event) => {
  const { name, value } = event.target;

  setFormState({
    ...formState,
    [name]: value,
  });
};

// submit form
const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);
  try {
    const { data } = await login({
      variables: { ...formState },
    });

    Auth.login(data.login.token);
  } catch (e) {
    console.error(e);
  }

  // clear form values
  setFormState({
    email: '',
    password: '',
  });
};
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30} onSubmit={handleFormSubmit}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to SkillSetGo!
        </Title>

        <TextInput onChange={handleChange} label="Email address" placeholder="hello@gmail.com" size="md" />
        <PasswordInput onChange={handleChange} label="Password" placeholder="Your password" mt="md" size="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" type="submit">
          Login
        </Button>

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