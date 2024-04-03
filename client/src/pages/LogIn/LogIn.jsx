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

import { useState, useEffect } from 'react';
import classes from './LogIn.module.css';
import { Link, useNavigate } from 'react-router-dom';

export function LogIn() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const navigate = useNavigate()

  const handleChange = async (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('formState', formState);
  }, [formState]);


  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form...');
    console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      console.log('Login successful!');
      console.log('Received token:', data.login.token);


      Auth.login(data.login.token);
      navigate('/dashboard');
    } catch (e) {
      console.error('Login failed:', e);
    }

    // clear form values
    console.log('Clearing form values...');
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className={classes.wrapper}>
      {data ? (
        <p>
          Success! You may now head{' '}
          <Link to="/dashboard">to the dashboard.</Link>
        </p>
      ) : (
        <form onSubmit={handleFormSubmit}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome back to SkillSetGo!
          </Title>

          <TextInput name="email" onChange={(e) => handleChange(e)} label="Email address" placeholder="hello@gmail.com" size="md" />
          <PasswordInput onChange={handleChange} label="Password" placeholder="Your password" name="password" mt="md" size="md" />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md" type="submit">
            Login
          </Button>

          <Text ta="center" mt="md">
            Don't have an account?{' '}
            <Anchor component={Link} to="/signup" fw={700}>
              Register
            </Anchor>
          </Text>

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </Paper>
        </form>
      )}

    </div>
  );
}
