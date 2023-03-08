import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <Box
      className="flex justify-between py-4 text-white"
      style={{
        background: "linear-gradient(to right, #2BC0E4, #20C997)",
        display: "flex",
        justifyContent: "justify-between",
        color: "#fff",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "3%",
        paddingRight: "3%",
      }}
    >
      <Grid item>
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 ml-6 object-cover rounded-full"
        />
      </Grid>
      <Box
        className="flex items-center mx-auto"
        sx={{ display: "flex", alignItems: "center", mx: "auto" }}
      >
        <Button className="mx-4" sx={{ mx: 1 }}>
          <NavLink to="/" className="text-white font-bold">
            Home
          </NavLink>
        </Button>
        <Button className="mx-4 text-white">
          <NavLink to="/about" className="text-white font-bold">
            About Us
          </NavLink>
        </Button>
        <Button className="mx-4">
          <NavLink to="/blogs" className="text-white font-bold">
            Blogs
          </NavLink>
        </Button>
        <Button className="mx-4">
          <NavLink to="/gallery" className="text-white font-bold">
            Gallery
          </NavLink>
        </Button>
        <Button className="mx-4">
          <NavLink to="/join" className="text-white font-bold">
            Join Us
          </NavLink>
        </Button>
      </Box>
      <Grid item sx={{ display: "flex", alingItems: "justify-end" }}>
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
    </Box>
  );
}

export default Navbar;
