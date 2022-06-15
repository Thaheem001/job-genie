import React from "react";
import { Avatar, CssBaseline, TextField, Box, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";

const ForgotPassword = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
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
      </div>
    </HomeLayout>
  );
};

export default ForgotPassword;
