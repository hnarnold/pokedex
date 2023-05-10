/* import { auth } from "./firebase";

function handleLogin() {
  const email = "user@example.com";
  const password = "password123";
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User is signed in.
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      // An error occurred.
      console.log(error);
    });
}
*/

import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth();

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <Container className="mt-5">
      <h1>Sign In</h1>
      <Form onSubmit={handleSignIn}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </Container>
  );
};

export default SignIn;