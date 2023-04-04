import { Box, Grid, IconButton, Typography, Hidden } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      py={4}
      sx={{
        backgroundColor: "#fcfcfc",
        height: 200,
      }}
      className="shadow-lg"
    >
      <Grid
        container
        alignItems="center"
        className="flex flex-col md:flex-row justify-evenly flex-wrap"
      >
        {" "}
        <Hidden smDown>
          <Grid item>
            <img
              src={logo}
              alt="logo"
              className="w-24 h-24 object-cover rounded-full"
            />
          </Grid>
        </Hidden>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          mb={2}
        >
          <Grid>
            <Hidden smDown>
              <Typography
                variant="body2"
                color="textSecondary"
                fontSize={40}
                fontWeight={600}
              >
                Quick Links
              </Typography>
            </Hidden>
            <Grid
              className="flex gap-4"
              direction={{ md: "column", sm: "row" }}
            >
              <Link to="/" color="inherit" className="text-black no-underline">
                Home
              </Link>
              <Link to="/faqs" className="text-black no-underline">
                FAQ
              </Link>
              <Link to="/contact" className="text-black no-underline">
                Contact
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Hidden smDown>
            <Grid>
              <Typography
                variant="body2"
                color="textSecondary"
                fontSize={40}
                fontWeight={600}
                mb={8}
              >
                Connect
              </Typography>
            </Grid>
          </Hidden>

          <Grid item sx={{ display: "flex", alingItems: "justify-end" }} mb={2}>
            <IconButton href="#" target="_blank">
              <Facebook className="text-blue-600" />
            </IconButton>
            <IconButton
              href="https://twitter.com/JustaVision_KE"
              target="_blank"
            >
              <Twitter className="text-sky-500" />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/just.a.vision_/"
              target="_blank"
            >
              <Instagram className="text-red-600" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            textTransform="uppercase"
            fontSize={14}
            color="#252525"
            mt={2}
            ml={6}
          >
            © {currentYear} just a vision
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
