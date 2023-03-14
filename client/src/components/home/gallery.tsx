import { Box, Typography, Stack, Button } from "@mui/material";
import backgroundImage from "../../assets/vision.jpg";

const Gallery = () => {
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
            We believe in consistencty.
          </Typography>
          <Typography
            fontSize={18}
            fontWeight={500}
            color="#fcfcfc"
            px={2}
            pb={2}
          >
            We strive to consistently meet our objectives and meet as a
            community to visit several children's home's.
          </Typography>
          <Button
            variant="outlined"
            href="/blogs"
            size="large"
            color="inherit"
            sx={{
              marginLeft: 2,
              color: "#fff",
              marginBottom: 4,
            }}
          >
            Read About Our Impact
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Gallery;
