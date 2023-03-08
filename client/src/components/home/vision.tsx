import { Box, Typography, Stack, Button } from "@mui/material";
import backgroundImage from "../../assets/gallery.jpg";
const Vision = () => {
  return (
    <Box
      sx={{
        height: 700,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Stack direction="row">
        <Box
          ml={20}
          mt={20}
          sx={{
            height: 500,
            width: 500,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></Box>
        <Box
          ml={18}
          mt={20}
          bgcolor="#2BC0E4"
          sx={{
            height: 500,
            width: 500,
          }}
          className="rounded-lg"
        >
          <Typography fontSize={28} fontWeight={700} color="#fcfcfc" p={2}>
            Vision Statement and Objectives.
          </Typography>
          <Typography fontSize={18} fontWeight={500} color="#fcfcfc" p={2}>
            Our mission at Just a vission is to create an environment whereby
            children have the opportunity to live safe, healthy, and fullfilling
            lives. We aim to achieve the following objectives:
          </Typography>
          <ol className="text-white px-4">
            <li>
              Provide emotional support and companionship to children living in
              homes or institutions
            </li>
            <li>Organize fun and educational activities for children</li>
            <li>Provide material and financial support</li>
            <li>Advocate for children's rights</li>
            <li>Work with local authorities and organizations</li>
            <li>Recruit and train volunteers</li>
          </ol>
          <Button
            variant="outlined"
            href="/join"
            size="large"
            color="inherit"
            sx={{
              marginTop: 4,
              marginLeft: 2,
              color: "#fff",
            }}
          >
            Join Us
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Vision;
