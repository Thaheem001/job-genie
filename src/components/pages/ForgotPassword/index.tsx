import React, { useState } from "react";
import {
  Avatar,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";
import ScreenLoader from "../../shared/ScreenLoader";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const APIURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : process.env.REACT_APP_API_URL;

    if (data.get("email") === " " || !data.get("email")) {
      toast.error("Please fill Emty Field");
      setLoading(false);
      return false;
    } else {
      fetch(`${APIURL}/api/createAndSendResetPasswordUrl`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data?.error) {
            toast.error(data?.error);
          }
          if (data?.message) {
            toast.success(data?.message);
            navigate("/login");
          }
          console.log(data);
        })
        .catch((err) => console.log(err, "errorr"))
        .finally(() => setLoading(false));
    }
  };

  return (
    <HomeLayout>
      <div className="loginPage">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Forgot Your Password !
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <button type="submit" className="btn-own w-100">
                Forgot Password
              </button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login">&#8592;{" Back to Login"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <ScreenLoader isVisible={loading} />
      </div>
    </HomeLayout>
  );
};

export default ForgotPassword;
