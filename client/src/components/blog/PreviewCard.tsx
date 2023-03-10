import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import blogImage from "../../assets/support.jpg";

interface PreviewCardProps {
  title: String;
  date: string;
  description: String;
  blogId: String;
}

const PreviewCard = ({
  title,
  date,
  description,
  blogId,
}: PreviewCardProps) => {
  return (
    <Box
      bgcolor="#fcfcfc"
      className="w-96 p-4 mx-8 my-6 rounded-lg justify-evenly leading-loose shadow-lg"
    >
      <img src={blogImage} alt="blog-img" />
      <Typography gutterBottom fontWeight={500} mt={2}>
        {date}
      </Typography>
      <Typography gutterBottom fontWeight={800} fontSize={20}>
        {title}
      </Typography>
      <Typography mb={2}>{description}</Typography>
      <Button variant="outlined" color="success">
        <Link to={`${blogId}`}>Read more...</Link>
      </Button>
    </Box>
  );
};

export default PreviewCard;
