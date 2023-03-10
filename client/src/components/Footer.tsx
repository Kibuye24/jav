import { Box, Grid, IconButton, Typography } from "@mui/material";
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
        flex={1}
        sx={{
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        {" "}
        <Grid item>
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 object-cover rounded-full"
          />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Typography
              variant="body2"
              color="textSecondary"
              fontSize={40}
              fontWeight={600}
            >
              Quick Links
            </Typography>
            <Grid
              flex={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
              }}
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
          <Grid>
            <IconButton href="#">
              <Facebook className="text-blue-600" />
            </IconButton>
            <IconButton href="#">
              <Twitter className="text-sky-500" />
            </IconButton>
            <IconButton href="#">
              <Instagram className="text-red-600" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            textTransform="uppercase"
            fontSize={14}
            color="#252525"
            sx={{ justifyContent: "center" }}
          >
            © {currentYear} just a vision
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
