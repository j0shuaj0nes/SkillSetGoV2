import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Select,
  MultiSelect,
} from '@mantine/core';
import classes from './Signup.module.css';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { useState } from 'react';

import Auth from '../../utils/auth';

export function Signup() {
  const [formState, setFormState] = useState({
    username: '',
    givenname: '',
    familyname: '',
    email: '',
    password: '',
    country: '',
    skillsoffering: '',
    skillsinterestedin: '',
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


        <TextInput label="User Name" placeholder="Enter your user name" classNames={classes} />
        <TextInput label="Given Name" placeholder="Jane" classNames={classes} />
        <TextInput label="Family Name" placeholder="Doe" classNames={classes} />
        <TextInput label="Email address" onChange={handleChange} placeholder="hello@gmail.com" size="md" />
        <PasswordInput label="Password" onChange={handleChange} placeholder="Your password" mt="md" size="md" />
        <TextInput label="Country" placeholder="Antarctica" classNames={classes} />

        <MultiSelect
          label="Skills Offering"
          placeholder="Select one or more"
          data={['SQL', 'JavaScript', 'Debugging', 'React', 'Full Stack Developer','Verbal Communication','Written Commumication','Active Listening', 'Empathy', 'Presentation Skills', 'Budgeting', 'Financial Planning', 'Financial Literacy', 'Saving', 'Tax', 'Asset Allocation', 'Portfolio Diversification', 'Due Diligence', 'Long-term Investing Strategy', 'Market Monitoring']}
        />
        <MultiSelect
          label="Skills Interested In"
          placeholder="Select one or more"
          data={['SQL', 'JavaScript', 'Debugging', 'React', 'Full Stack Developer','Verbal Communication','Written Commumication','Active Listening', 'Empathy', 'Presentation Skills', 'Budgeting', 'Financial Planning', 'Financial Literacy', 'Saving', 'Tax', 'Asset Allocation', 'Portfolio Diversification', 'Due Diligence', 'Long-term Investing Strategy', 'Market Monitoring']}
        />
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