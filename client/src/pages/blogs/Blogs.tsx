import { Typography, Box, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import PreviewCard from "../../components/blog/PreviewCard";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Layout from "../../layout/Layout";
import { Pagination } from "../../components/index";
import { useSearchParams } from "react-router-dom";

const Blogs = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await Axios.get(
        `https://just-a-vision.onrender.com/api/v1/blogs/`
      );

      return response.data;
    },
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: any) => {
    setSearchParams(value);
  };

  if (isLoading)
    return (
      <Typography align="center" my={40}>
        <CircularProgress color="primary" size={40} thickness={5} />;
      </Typography>
    );

  return (
    <Layout>
      <Box px={10}>
        <Typography variant="h1" my={4} gutterBottom>
          Our Blogs
        </Typography>
        <Box
          bgcolor="#fcfcfc"
          width="full"
          sx={{ display: "flex", flexDirection: "row" }}
          gap={4}
          p={4}
          className="shadow-lg rounded-lg flex-wrap"
        >
          <Box
            sx={{ background: "linear-gradient(to right, #2BC0E4, #20C997)" }}
            width={500}
          >
            <Typography>Featured Blog</Typography>
          </Box>
          <Box flex={1}>
            <Typography>2nd March, 2023</Typography>
            <Typography fontWeight={800} fontSize={24} gutterBottom>
              All You need to Know About the Coming Pad Drive
            </Typography>
            <Typography gutterBottom variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur!
            </Typography>
            <Button variant="contained" color="info">
              Read more...
            </Button>
          </Box>
        </Box>
        <Typography variant="h3" align="center" my={4} fontWeight={600}>
          Latest Blogs
        </Typography>
        <Box
          bgcolor="#fff"
          className="flex flex-wrap rounded-lg shadow-lg mb-8 justify-evenly"
        >
          {data.results.map((blog: any) => {
            return (
              <PreviewCard
                title={blog.title}
                description={blog.description.slice(0, 99)}
                date={blog.createdAt}
                blogId={blog._id}
              />
            );
          })}
        </Box>
        <Pagination
          totalPages={data.totalPages}
          pageNumber={data.page}
          change={() => handleChange}
        />
      </Box>
    </Layout>
  );
};

export default Blogs;
