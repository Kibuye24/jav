import { Box, Typography, Stack, Button } from "@mui/material";
import backgroundImage from "../../assets/contact.jpg";

const Contact = () => {
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
          mt={15}
          bgcolor="#20C997"
          sx={{
            height: 300,
            width: 700,
          }}
          className="rounded-lg"
        >
          <Typography fontSize={28} fontWeight={700} color="#fcfcfc" p={2}>
            We believe in consistencty.
          </Typography>
          <Typography fontSize={18} fontWeight={500} color="#fcfcfc" p={2}>
            We strive to consistently meet our objectives and meet as a
            community to visit several children's home's.
          </Typography>
          <Button
            variant="outlined"
            href="/blogs"
            size="large"
            color="inherit"
            sx={{
              marginTop: 4,
              marginLeft: 2,
              color: "#fff",
            }}
          >
            Read About Our Impact
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
