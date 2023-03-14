import { Box, Typography, Stack, Button } from "@mui/material";
import backgroundImage from "../../assets/header.jpg";

const Header = () => {
  return (
    <Box
      sx={{
        height: 500,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Stack>
        <Box
          bgcolor="#20C997"
          className="rounded-lg shadow-lg md:mx-10 mx-auto mt-10 md:w-[500px] w-[90%] justify-center"
        >
          <Typography fontSize={24} fontWeight={700} color="#fcfcfc" p={2}>
            We are a social business.
          </Typography>
          <Typography
            fontSize={18}
            fontWeight={500}
            color="#fcfcfc"
            px={2}
            pb={2}
          >
            Our mission at Just a vission is to improve the lives of vulnerable
            children in Kenya through home visits and community outreach.
          </Typography>
          <Button
            variant="outlined"
            href="/about"
            size="large"
            color="inherit"
            sx={{
              marginLeft: 2,
              color: "#fff",
              marginBottom: 4,
            }}
          >
            Learn About Us
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
