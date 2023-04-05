import { Box, Typography, Stack, Button } from "@mui/material";
import backgroundImage from "../../assets/contact.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
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
            You can become a valuable member.
          </Typography>
          <Typography
            fontSize={18}
            fontWeight={500}
            color="#fcfcfc"
            px={2}
            pb={2}
          >
            Have any ideas that can help us? Are you interested in forming a
            partnership with us? We would love to hear from you. Contact us
            Today!
          </Typography>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            sx={{
              marginLeft: 2,
              color: "#fff",
              marginBottom: 4,
            }}
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
