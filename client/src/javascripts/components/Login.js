import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = ({ onSubmit }) => (
  <div className="Login">
    <h1 className="text-center">Welcome to Djello</h1>
    <main className="container">
      <h2 className="text-center">Please Login</h2>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Your email address..." />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Your password..." />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </main>
  </div>
);

export default Login;
