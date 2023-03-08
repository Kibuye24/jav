import { Box, Typography, Stack, Button } from "@mui/material";
import backgroundImage from "../../assets/support.jpg";

interface RightieProps {
  title: String;
  description: String;
  list: string[];
}

const Rightie = ({ list, title, description }: RightieProps) => {
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
            {title}
          </Typography>
          <Typography fontSize={18} fontWeight={500} color="#fcfcfc" p={2}>
            {description}
          </Typography>
          <ol className="text-white px-4">
            {list.map((li) => (
              <li>{li}</li>
            ))}
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

export default Rightie;
