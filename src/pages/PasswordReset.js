import { useRef, useState } from "react";
import { useAuth } from "../supabase/AuthProvider";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await passwordReset(emailRef.current.value);
      if (!error) {
        setMsg("Password reset has been sent to your email");
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            {msg && (
              <Alert variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </Alert>
            )}
            <div>
              <Button disabled={loading} type="submit">
                Send Reset Link
              </Button>
            </div>
          </Form>
        </Card.Body>
        <div>
          ¿Quieres iniciar sesion? <Link to={"/"}>Login</Link>
        </div>
      </Card>
    </>
  );
};

export default PasswordReset;
