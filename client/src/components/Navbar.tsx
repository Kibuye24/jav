import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  Hidden,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import logo from "../assets/logo.jpeg";
import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <Box
      className="flex justify-between py-2 text-white"
      style={{
        background: "linear-gradient(to right, #2BC0E4, #20C997)",
        display: "flex",
        justifyContent: "justify-between",
        color: "#fff",
        paddingLeft: "3%",
        paddingRight: "3%",
      }}
    >
      <Grid item>
        <img
          src={logo}
          alt="logo"
          className="w-14 h-14 ml-6 object-cover rounded-full"
        />
      </Grid>
      <Box
        className="flex items-center mx-auto sm:hidden"
        sx={{ display: "flex", alignItems: "center", mx: "auto" }}
      >
        <Hidden only={"xs"}>
          <Button className="mx-4" sx={{ mx: 1 }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline underline-offset-8"
                  : "text-white font-bold"
              }
            >
              Home
            </NavLink>
          </Button>
          <Button className="mx-4 text-white">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline underline-offset-8"
                  : "text-white font-bold"
              }
            >
              About Us
            </NavLink>
          </Button>
          <Button className="mx-4">
            <NavLink
              to="/blogs?page=1"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline underline-offset-8"
                  : "text-white font-bold"
              }
            >
              Blogs
            </NavLink>
          </Button>
          <Button className="mx-4">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline underline-offset-8"
                  : "text-white font-bold"
              }
            >
              Gallery
            </NavLink>
          </Button>
          <Button className="mx-4">
            <NavLink
              to="/join"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline underline-offset-8"
                  : "text-white font-bold"
              }
            >
              Join Us
            </NavLink>
          </Button>
        </Hidden>
      </Box>
      <Grid item sx={{ display: "flex" }}>
        <IconButton href="#" target="_blank">
          <Facebook className="text-blue-600" />
        </IconButton>
        <IconButton href="https://twitter.com/JustaVision_KE" target="_blank">
          <Twitter className="text-sky-500" />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/just.a.vision_/"
          target="_blank"
        >
          <Instagram className="text-red-600" />
        </IconButton>
      </Grid>
      <Grid className="pt-3 ml-20">
        <Hidden smUp>
          <Hamburger />
        </Hidden>
      </Grid>
    </Box>
  );
}

export default Navbar;
