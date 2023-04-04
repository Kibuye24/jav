import { Box, Hidden, Typography } from "@mui/material";

interface ObjectivesProps {
  imageSrc: string;
  title: string;
  objectives: string[];
}

const Objectives = ({ imageSrc, title, objectives }: ObjectivesProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "40px",
      }}
    >
      <Hidden smDown>
        <Box sx={{ width: "50%" }}>
          <img src={imageSrc} alt="Objectives" style={{ maxWidth: "100%" }} />
        </Box>
      </Hidden>
      <Box className="md:ml-4 md:w-[50%]">
        <Typography variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Box sx={{ border: "1px solid black", borderRadius: "4px", p: 2 }}>
          {objectives.map((objective, index) => (
            <Typography variant="body1" key={index}>
              - {objective}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Objectives;
