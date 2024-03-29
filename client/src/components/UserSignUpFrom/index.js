import React, { useState, useEffect } from 'react';
import { Form, Label, TextInput, SubmitButton } from './style';


export default function UserSignUpForm(props) {
  // Form input states
  const [ name, setName ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ email, setEmail ] = useState("");
  // all the rest
  const [ allUsersName, setAllUsersName ] = useState([]);

  useEffect(() => {
    const fetchRequest = async () => {
      const response = await fetch('/users/all', {
        method: 'GET',
      }).catch(error => console.error('Error:', error));
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data)
      } else return Promise.reject("Could not connect to API.")
    };
    fetchRequest().then(res => {
      let allNames = [];
      for (let name of res.body) {
        allNames.push(name.name)
      }
      setAllUsersName(allNames)
    })
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    if (allUsersName.includes(name)) {
      alert(`User name ${name} is already taken.`);
      return
    }
    const fetchRequest = async () => {
      const response = await fetch('/users/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user: {
            name: name,
            password: password,
            email: email
          }
        })
      }).catch(error => console.error('Error:', error));
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data)
      } else return Promise.reject("Could not connect to API.")
    };
    fetchRequest().then(() => cleanUpForm())
      .catch(err => console.log(err.message))
  }

  const handleNameChange = event => setName(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)
  const handleConfirmPasswordChange = event => setConfirmPassword(event.target.value)
  const handleEmailChange = event => setEmail(event.target.value)

  const validateForm = () => name.length < 1 || name.length > 50 || password.length < 1 || password !== confirmPassword

  const cleanUpForm = () => {
    setName("");
    setPassword("");
    setEmail("");
    props.close();
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <Label htmlFor="username">Name:</Label>
      <TextInput type={"text"}
                 name={"username"}
                 onChange={handleNameChange}
                 value={name}
      />
      <Label htmlFor="password">Password:</Label>
      <TextInput type={"password"}
                 name={"password"}
                 onChange={handlePasswordChange}
                 value={password}
      />
      <Label htmlFor="confirmPassword">Confirm Password:</Label>
      <TextInput type={"password"}
                 name={"confirmPassword"}
                 onChange={handleConfirmPasswordChange}
                 value={confirmPassword}
      />
      <Label htmlFor="email">Email:</Label>
      <TextInput type={"email"}
                 name={"email"}
                 onChange={handleEmailChange}
                 value={email}
      />
      <SubmitButton type="submit"
                    value={"Submit"}
                    disabled={validateForm()}
      />
    </Form>
  );
}
