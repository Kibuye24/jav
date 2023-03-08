import { Typography, Box, Button } from "@mui/material";
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
      bgcolor="#efefef"
      className="w-96 p-4 my-4 rounded-lg justify-evenly leading-loose"
    >
      <img src={blogImage} alt="blog-img" />
      <Typography gutterBottom fontWeight={500} mt={2}>
        {date}
      </Typography>
      <Typography gutterBottom fontWeight={800} fontSize={20}>
        {title}
      </Typography>
      <Typography mb={2}>{description}</Typography>
      <Button variant="outlined" color="success" href={`blogs/${blogId}`}>
        Read more...
      </Button>
    </Box>
  );
};

export default PreviewCard;
