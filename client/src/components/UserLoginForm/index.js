import React, { useState } from 'react';
import { Form, Label, TextInput } from './style';
import { SubmitButton } from "./style";


export default function UserLoginForm(props) {
  const [ nameText, setNameText ] = useState("");
  const [ passwordText, setPasswordText ] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const fetchData = async () => {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user: {
            name: nameText,
            password: passwordText
          }
        })
      }).catch(error => console.error('Error:', error));
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data)
      }
      else if (response.status === 401) return Promise.reject(new Error("Name or password is incorrect."))
      else return Promise.reject("Could not connect to API.")
    };
    fetchData().then(res => props.setUser(res.user[0]))
      .then(() => cleanUpForm())
      .then(() => props.setSignInStatus())
      .catch(err => alert(err))
  }

  const handleNameChange = event => setNameText(event.target.value);
  const handlePasswordChange = event => setPasswordText(event.target.value);

  const validateForm = () => nameText.length < 1 || nameText.length > 50 || passwordText.length < 1

  const cleanUpForm = () => {
    setNameText("");
    setPasswordText("");
    props.close();
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <Label htmlFor="username">Name:</Label>
      <TextInput name={"username"}
                 onChange={handleNameChange}
                 value={nameText}
      />
      <Label htmlFor="password">Password:</Label>
      <TextInput name={"password"}
                 onChange={handlePasswordChange}
                 value={passwordText}
      />
      <SubmitButton type="submit"
                    value={"Submit"}
                    disabled={validateForm()}
      />
    </Form>
  );
}
