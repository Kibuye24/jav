import { Box, Typography, Stack, Button } from "@mui/material";
import backgroundImage from "../../assets/support.jpg";
const Support = () => {
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
          We Appreciate Your Support!
        </Typography>
        <Typography variant="body2" fontWeight={500} color="#fcfcfc" px={2}>
          At Just a Vision, we believe that every child deserves a bright and
          happy future. We work tirelessly to provide children in need with the
          support, resources, and opportunities they need to thrive. We are
          deeply grateful for the support of our community and donors who share
          our passion for making a difference in the lives of children. Your
          generosity helps us to continue our important work, providing
          essential services such as education, healthcare, and shelter to
          children who need it most. Whether you choose to make a financial
          contribution, volunteer your time and skills, or spread the word about
          our organization, every effort helps us to make a positive impact on
          the lives of children in need. We appreciate every donation, no matter
          the size, and we value the support of every individual who contributes
          to our cause. At Just a Vision, we believe that together, we can
          create a better world for all children. We thank you for your ongoing
          support and for helping us to make a meaningful difference in the
          lives of children who need it most.
        </Typography>
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

export default Support;
