import { Navbar, Footer } from "../../components";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const showBlogs = () => {
  const { _id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleBlog"],
    queryFn: async () => {
      const response = await Axios.get(
        `http://localhost:8080/api/v1/blogs/${_id}`
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

  if (error) return error;

  console.log(data);

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default showBlogs;
