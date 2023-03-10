import { Grid, Typography } from "@mui/material";
import Layout from "../layout/Layout";

const Blogs = () => {
  return (
    <Layout>
      <Typography align="center" fontSize={28} fontWeight={700}>
        Gallery
      </Typography>
      <Grid container className="px-[3%]"></Grid>
    </Layout>
  );
};

export default Blogs;
