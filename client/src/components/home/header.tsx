import { Box, Typography, Stack, Button } from "@mui/material";
import backgroundImage from "../../assets/header.jpg";

const Header = () => {
  return (
    <Box
      sx={{
        height: 700,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Stack>
        <Box
          ml={20}
          mt={14}
          bgcolor="#20C997"
          sx={{
            height: 300,
            width: 700,
          }}
          className="rounded-lg"
        >
          <Typography fontSize={28} fontWeight={700} color="#fcfcfc" p={2}>
            We are a social business.
          </Typography>
          <Typography fontSize={18} fontWeight={500} color="#fcfcfc" p={2}>
            Our mission at Just a vission is to improve the lives of vulnerable
            children in Kenya through home visits and community outreach.
          </Typography>
          <Button
            variant="outlined"
            href="/about"
            size="large"
            color="inherit"
            sx={{
              marginTop: 4,
              marginLeft: 2,
              color: "#fff",
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
