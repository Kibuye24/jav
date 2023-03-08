import { Box, Typography, Grid } from "@mui/material";
import { useRouteError } from "react-router-dom";
import backgroundImage from "../assets/error.jpg";
import Layout from "../layout/Layout";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  const routes: Record<string, {}> = {
    "/": {},
    "/users": {},
  };

  return (
    <Layout>
      <Box
        height="100vh"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 0,
          alignItems: "center",
        }}
      >
        <Grid>
          <Typography fontSize={28} fontWeight={800} align="center" p={18}>
            Ooops... Something went wrong!
          </Typography>
          <Typography fontSize={28} fontWeight={800} align="center">
            Error {error.status}...{error.statusText || error.message}!
          </Typography>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ErrorPage;
