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
  import {Link} from 'react-router-dom'
  export function Register() {
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Sign Up to SkillSetGo
          </Title>
  
          <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md">
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