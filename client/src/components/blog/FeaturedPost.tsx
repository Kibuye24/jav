import { Box, Typography, Button } from "@mui/material";

interface FeaturedPostProps {
  date: String;
  title: String;
  content: String;
}

const FeaturedPost = ({ date, title, content }: FeaturedPostProps) => {
  return (
    <Box flex={1} flexDirection="column">
      <Typography>{date}</Typography>
      <Typography fontWeight={800} fontSize={48}>
        {title}
      </Typography>
      <Typography gutterBottom>{content}</Typography>
      <Button variant="contained" color="info">
        Read more...
      </Button>
    </Box>
  );
};

export default FeaturedPost;
