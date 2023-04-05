import {
  Typography,
  Box,
  Grid,
  Stack,
  IconButton,
  Button,
  Hidden,
} from "@mui/material";
import Layout from "../layout/Layout";
import contact from "../assets/call.jpg";
import contactSun from "../assets/contactSun.png";
import contactClouds from "../assets/contactClouds.png";
import contactAnimal from "../assets/contactAnimal2.png";
import { Navbar } from "../components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          background: "linear-gradient(to right, #2BC0E4, #20C997)",
        }}
        className="h-96 relative"
      >
        <Typography
          align="center"
          variant="h3"
          gutterBottom
          className="text-white font-serif"
        >
          Let's Have a Chat
        </Typography>
        <img
          src={contactAnimal}
          alt="contact-sun"
          className="absolute bottom-0 z-10"
        />
        <img
          src={contactClouds}
          alt="contact-sun"
          className="absolute bottom-0"
        />
        <img src={contactSun} alt="contact-sun" className="absolute bottom-0" />
      </Box>
      <Grid container className="h-96">
        <Hidden smDown>
          <Grid item xs={12} md={4} className="h-96">
            <img src={contact} alt="contact" className="h-full w-full" />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={4} className="md:h-96 py-20 px-4">
          <Typography align="center" variant="h4">
            Meet Us
          </Typography>
          <Stack className="mt-10 w-full" direction="row">
            {/* <LocalPhoneIcon /> */}
            <Typography align="center">+254 708 087 126</Typography>
          </Stack>
          <Stack className="mt-10 w-full" direction="row">
            {/* <EmailIcon /> */}
            <Typography align="center">info@justavision.com</Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          className="md:h-96 bg-slate-100/50 py-20 px-4"
        >
          <Typography align="center" variant="h4" gutterBottom>
            Pitch Us
          </Typography>
          <Typography>
            Hello my name is <span className="text-cyan-400">your name</span>{" "}
            and my email is <span className="text-cyan-400">your email</span>{" "}
            and I would like to pitch you{" "}
            <span className="text-cyan-400">my idea</span>.
          </Typography>
          <Button
            sx={{
              background: "linear-gradient(to right, #2BC0E4, #20C997)",
              borderRadius: 100,
              marginTop: 4,
            }}
            variant="contained"
            size="small"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
