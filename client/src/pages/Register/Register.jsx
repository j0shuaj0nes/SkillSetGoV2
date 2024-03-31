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
  import classes from './Register.module.css';
  import {Link} from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { useState } from 'react';

import Auth from '../../utils/auth';

  export function Register() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
    return (
      <div className={classes.wrapper}>
        <Paper onSubmit={handleFormSubmit} className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Sign Up to SkillSetGo
          </Title>
  
          <TextInput label="Email address" onChange={handleChange} placeholder="hello@gmail.com" size="md" />
          <PasswordInput label="Password" onChange={handleChange} placeholder="Your password" mt="md" size="md" />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md" type="submit">
            Register
          </Button>
          <Text ta="center" mt="md">
            Already have an account? {' '}
            <Anchor component={Link} to="/login" fw={700} >
              Log In
            </Anchor>
          </Text>
  
        </Paper>
      </div>
    );
  }