import {
  Avatar,
  CssBaseline,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";
import ScreenLoader from "../../shared/ScreenLoader";
import initializeStripe from "../../utils/initializeStripe";
import toast from "react-hot-toast";

const SignUp = () => {
  const [checkBoxVal, setCheckBoxval] = useState<boolean>(true);
  const [isVisibile, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const APIURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : process.env.REACT_APP_API_URL;

    setIsVisible(true);
    try {
      const promoCodeValue = data.get("promoCode")?.toString().trim();
      let discount = 0;
      let promoMail = "";

      if (promoCodeValue && promoCodeValue !== "") {
        const verifiedPromo = await fetch(
          `${APIURL}/api/verifyPromoCode/${promoCodeValue}`
        );

        if (verifiedPromo?.ok !== true) {
          throw new Error("Promo Code not found!");
        }

        const promoCodeData = await verifiedPromo.json();

        discount = promoCodeData.data.discount || 0;
        promoMail = promoCodeData.data.email || "";
      }

      const res = await fetch(`${APIURL}/api/paynow`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          email: data.get("email"),
          discount,
          promoMail,
        }),
      });
      const resObj = await res.json();

      console.log(resObj);

      if (resObj.status !== "success") {
        throw new Error(resObj.error);
      }

      if (resObj?.manualRedirect) {
        return (window.location.href = resObj.manualRedirect);
      }

      const stripe = await initializeStripe();
      stripe?.redirectToCheckout({ sessionId: resObj.stripeId });
    } catch (error: any) {
      console.log(error);
      toast.error(error.toString());
    }
    setIsVisible(false);
  };

  return (
    <HomeLayout>
      <div className="SignUpNowSec">
        <ScreenLoader isVisible={isVisibile} />
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
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="fullName"
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="promoCode"
                    label="Promo Code"
                    name="promoCode"
                    autoComplete="promo-code"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="primary"
                        onChange={() =>
                          checkBoxVal
                            ? setCheckBoxval(false)
                            : setCheckBoxval(true)
                        }
                      />
                    }
                    label="I Agree to Terms & Condition."
                  />
                </Grid>
              </Grid>
              <button
                type="submit"
                disabled={checkBoxVal}
                className={`btn-own w-100 `}
              >
                Sign Up
              </button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login">Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </HomeLayout>
  );
};
export default SignUp;
