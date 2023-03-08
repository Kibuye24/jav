import { Box, Typography } from "@mui/material";

interface OurStoryProps {
  imageSrc: string;
  title: string;
  text: string;
}

const OurStory = ({ imageSrc, title, text }: OurStoryProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "50%" }}>
        <img src={imageSrc} alt="Our Story" style={{ maxWidth: "100%" }} />
      </Box>
      <Box sx={{ width: "50%", ml: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default OurStory;
