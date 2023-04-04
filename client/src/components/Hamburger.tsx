import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

export default function Hamburger() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <MenuIcon onClick={handleClick} className="cursor-pointer" />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold underline underline-offset-8"
              : "text-black font-bold"
          }
        >
          <Typography px={4}>Home</Typography>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold underline underline-offset-8"
              : "text-black font-bold"
          }
        >
          <Typography px={4}>About</Typography>
        </NavLink>
        <NavLink
          to="/blogs?page=1"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold underline underline-offset-8"
              : "text-black font-bold"
          }
        >
          <Typography px={4}>Blogs</Typography>
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold underline underline-offset-8"
              : "text-black font-bold"
          }
        >
          <Typography px={4}>Gallery</Typography>
        </NavLink>
        <NavLink
          to="/join"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold underline underline-offset-8"
              : "text-black font-bold"
          }
        >
          <Typography px={4}>Join Us</Typography>
        </NavLink>
      </Popover>
    </div>
  );
}
