import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import FlipkartLogo from "./Flipkart_logo";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError("");

    const uppercaseRegex = /(?=.*[A-Z])/;
    const numericRegex = /(?=.*[0-9])/;
    const specialCharRegex = /(?=.*[!@#$%^&*])/;

    if (!uppercaseRegex.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!numericRegex.test(password)) {
      setError("Password must contain at least one numeric character.");
      return;
    }
    if (!specialCharRegex.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }

    const res = await fetch(
      "https://flipkart-backend-os9f.onrender.com/auth/signup",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setError(data.error || "Signup failed");
    }
  };

  return (
    <>
      <FlipkartLogo />
      <Box maxWidth={400} mx="auto" p={2}>
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        {error && (
          <Box color="red" my={1}>
            {error}
          </Box>
        )}
        <Button
          onClick={handleSignup}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
        <Box mt={3} textAlign="center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Signup;
