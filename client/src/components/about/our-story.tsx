import { Box, Hidden, Typography } from "@mui/material";

interface OurStoryProps {
  imageSrc: string;
  title: string;
  text: string;
}

const OurStory = ({ imageSrc, title, text }: OurStoryProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Hidden smDown>
        <Box className="md:w-[50%]">
          <img src={imageSrc} alt="Our Story" style={{ maxWidth: "100%" }} />
        </Box>
      </Hidden>
      <Box className="md:ml-4 md:w-[50%]">
        <Typography variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default OurStory;
