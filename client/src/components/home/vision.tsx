import { Box, Typography, Container, Button } from "@mui/material";
import backgroundImage from "../../assets/gallery.jpg";
const Vision = () => {
  return (
    <Box className="flex flex-row flex-wrap justify-evenly space-x-8 py-8 space-y-4 md:space-y-0">
      <Box
        sx={{
          height: 500,
          width: 500,
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="bg-cover bg-center md:w-[500px] w-[90%]"
      ></Box>
      <Box
        bgcolor="#2BC0E4"
        sx={{
          width: 500,
        }}
        className="rounded-lg"
      >
        <Typography fontSize={24} fontWeight={700} color="#fcfcfc" p={2}>
          Vision Statement and Objectives.
        </Typography>
        <Typography fontSize={18} fontWeight={500} color="#fcfcfc" px={2}>
          Our mission at Just a vission is to create an environment whereby
          children have the opportunity to live safe, healthy, and fullfilling
          lives. We aim to achieve the following objectives:
        </Typography>
        <ol className="text-white px-8 list-decimal leading-loose">
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
    </Box>
  );
};

export default Vision;
