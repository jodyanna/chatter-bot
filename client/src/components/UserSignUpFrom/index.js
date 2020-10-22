import React, { useState } from 'react';
import { Form, TextInput } from './style';
import { SubmitButton } from "./style";


export default function UserSignUpForm(props) {
  const [ name, setName ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ isSent, setIsSent ] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const fetchData = async () => {
      const response = await fetch('http://localhost:9000/users/signup', {
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

    fetchData().then(res => {
      console.log(res)
    })
      .then(() => cleanUpForm())
      .catch(err => alert(err.message))
  }

  const handleNameChange = event => setName(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const handleConfirmPasswordChange = event => setConfirmPassword(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value)

  const validateForm = () => name.length < 1 || name.length > 50 || password.length < 1 || password !== confirmPassword

  const cleanUpForm = () => {
    setName("");
    setPassword("");
    setEmail("");
    setIsSent(true);
    setTimeout(() => setIsSent(false), 1000);
    props.close();
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Name:</label>
      <TextInput name={"username"}
                 onChange={handleNameChange}
                 value={name}
      />
      <label htmlFor="password">Password:</label>
      <TextInput name={"password"}
                 onChange={handlePasswordChange}
                 value={password}
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <TextInput name={"confirmPassword"}
                 onChange={handleConfirmPasswordChange}
                 value={confirmPassword}
      />
      <label htmlFor="email">Email:</label>
      <TextInput name={"email"}
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
