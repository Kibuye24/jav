import { Navbar, Footer } from "../../components";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Typography, Box, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import blogImage from "../../assets/support.jpg";

const ShowBlog = (): JSX.Element => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleBlog"],
    queryFn: async () => {
      const response = await Axios.get(
        `http://localhost:8080/api/v1/blogs/${id}`
      );

      return response.data;
    },
  });

  if (isLoading)
    return (
      <Typography align="center" fontSize={20} fontWeight={600}>
        Loading...
      </Typography>
    );

  return (
    <>
      <Navbar />
      <Grid
        container
        direction="row"
        className="w-full p-[3%] grid grid-cols-1 lg:grid-cols-12 gap-12"
        gap={4}
      >
        <Grid
          item
          direction="column"
          width={4 / 6}
          p={3}
          className="bg-white shadow-lg rounded-lg pd-0 lg:p-8 pb-12 mb-8'"
        >
          <Grid item p={2} className="relative overflow-hidden shadow-mb mb-6">
            <img
              src={blogImage}
              alt={data.title}
              className="object-top h-full w-full rounded-t-lg"
            />
          </Grid>
          <Grid item>
            <Typography
              fontSize={28}
              fontWeight={700}
              p={2}
              className="mb-8 text-3xl font-semibold"
            >
              {data.title}
            </Typography>
          </Grid>
          <Grid item p={2}>
            <Typography>{data.createdAt}</Typography>
            <Typography className="inline align-middle text-gray-700 ml-2 text-lg">
              {data.author}
            </Typography>
          </Grid>
          <Grid item p={2}>
            <Typography>{data.content}</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          width={1 / 6}
          className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 relative lg:sticky top-8 h-48 w-[60px]"
        >
          <Typography
            align="center"
            fontSize={20}
            fontWeight={500}
            className="text-xl mb-8 font-semibold border-b pb-4"
          >
            Recent Blogs
            {}
            <Link to={`/${id}`}></Link>
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default ShowBlog;
