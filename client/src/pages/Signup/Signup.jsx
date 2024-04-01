import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,

  MultiSelect
} from "@mantine/core";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";


import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import { useState } from "react";

import Auth from "../../utils/auth";

export function Signup() {
  const [formState, setFormState] = useState({

    username: "",
    givenName: "",
    familyName: "",
    email: "",
    password: "",
    country: "",
    skillsOffering: [],
    skillsInterestedIn: [],

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

      console.log(data);
      Auth.login(data.addUser.token);

      // Redirect to dashboard after successful signup
      // history.push("/dashboard");
      window.location.href = '/dashboard';
    } catch (e) {
      console.error('Login failed:', e);

    }
  };
  return (
    <div className={classes.wrapper}>

      {data ? (
        <p>
          Success! You may now head{" "}
          <Anchor component={Link} to="/dashboard">
            to the dashboard.

          </Anchor>
        </p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <Paper className={classes.form} radius={0} p={30}>
            <Title
              order={2}
              className={classes.title}
              ta="center"
              mt="md"
              mb={50}
            >
              Sign Up to SkillSetGo
            </Title>
            <TextInput
              name="username"
              label="User Name"
              onChange={handleChange}
              placeholder="Enter your user name"
              classNames={classes}
            />
            <TextInput
              name="givenName"
              label="Given Name"
              onChange={handleChange}
              placeholder="Jane"
              classNames={classes}
            />
            <TextInput
              name="familyName"
              label="Family Name"
              onChange={handleChange}
              placeholder="Doe"
              classNames={classes}
            />
            <TextInput
              name="email"
              label="Email address"
              onChange={handleChange}
              placeholder="hello@gmail.com"
              size="md"
            />
            <PasswordInput
              name="password"
              label="Password"
              onChange={handleChange}
              placeholder="Your password"
              mt="md"
              size="md"
            />
            <TextInput
              name="country"
              label="Country"
              onChange={handleChange}
              placeholder="Antarctica"
              classNames={classes}
            />

            <MultiSelect
              name="skillsOffering"
              label="Skills Offering"
              onChange={handleChange}
              placeholder="Select one or more"
              data={[
                "SQL",
                "JavaScript",
                "Debugging",
                "React",
                "Full Stack Developer",
                "Verbal Communication",
                "Written Commumication",
                "Active Listening",
                "Empathy",
                "Presentation Skills",
                "Budgeting",
                "Financial Planning",
                "Financial Literacy",
                "Saving",
                "Tax",
                "Asset Allocation",
                "Portfolio Diversification",
                "Due Diligence",
                "Long-term Investing Strategy",
                "Market Monitoring",
              ]}
            />
            <MultiSelect
              name="skillsInterestedIn"
              label="Skills Interested In"
              onChange={handleChange}
              placeholder="Select one or more"
              data={[
                "SQL",
                "JavaScript",
                "Debugging",
                "React",
                "Full Stack Developer",
                "Verbal Communication",
                "Written Commumication",
                "Active Listening",
                "Empathy",
                "Presentation Skills",
                "Budgeting",
                "Financial Planning",
                "Financial Literacy",
                "Saving",
                "Tax",
                "Asset Allocation",
                "Portfolio Diversification",
                "Due Diligence",
                "Long-term Investing Strategy",
                "Market Monitoring",
              ]}
            />
            <Checkbox label="Keep me logged in" mt="xl" size="md" />
            {/* <Anchor component={Link} to="/dashboard"> */}
              <Button fullWidth mt="xl" size="md" type="submit">

                Register

              </Button>
            {/* </Anchor> */}

            <Text ta="center" mt="md">
              Already have an account?{" "}
              <Anchor component={Link} to="/login" fw={700}>
                Log In
              </Anchor>
            </Text>
          </Paper>
        </form>
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
}
