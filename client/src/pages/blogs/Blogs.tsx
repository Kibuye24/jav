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
        <CircularProgress color="primary" size={40} thickness={5} />
      </Typography>
    );

  return (
    <Layout>
      <Box px={10}>
        <Typography variant="h1" my={4} gutterBottom>
          Our Blogs
        </Typography>
        <Typography>Featured Post</Typography>
        <Box
          bgcolor="#fcfcfc"
          width="full"
          gap={4}
          p={4}
          className="shadow-lg rounded-lg flex flex-wrap"
        >
          <Box
            sx={{ background: "linear-gradient(to right, #2BC0E4, #20C997)" }}
            width={500}
          ></Box>
          <Box flex={1}>
            <Typography>5th April, 2023</Typography>
            <Typography fontWeight={800} fontSize={24} gutterBottom>
              All You need to Know About the Coming Pad Drive
            </Typography>
            <Typography gutterBottom variant="body2">
              Sanitary pads are a necessity for girls, but unfortunately, many
              girls from low-income families do not have access to them. This
              leads to them missing school during their menstrual cycle, which
              can lead to educational setbacks and even dropouts. In an effort
              to combat this problem, our organization has embarked on a project
              to donate 1000 sanitary pads to girls in schools. Our vision is to
              ensure that all girls, regardless of their socioeconomic
              background, have access to basic hygiene products. We believe that
              this will help to eliminate the stigma and shame associated with
              menstruation, and empower girls to take control of their bodies
              and their education. However, we cannot do this alone. We humbly
              appeal to individuals and organizations who share our vision to
              join us in making a difference in the lives of these girls. We are
              accepting donations of both monetary funds and sanitary pads.
              Every little bit counts, and your support can help us achieve our
              goal of empowering these girls to reach their full potential. We
              are committed to ensuring that every donated pad goes to a girl in
              need, and we will work tirelessly to ensure that our project is
              successful. We believe that by working together, we can make a
              difference in the lives of these girls and create a brighter
              future for them. Join us in this noble cause and be a part of the
              change you want to see in the world.
            </Typography>
            {/* <Button variant="contained" color="info">
              Read more...
            </Button> */}
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
        {/* <Pagination
          totalPages={data.totalPages}
          pageNumber={data.page}
          change={() => handleChange}
        /> */}
      </Box>
    </Layout>
  );
};

export default Blogs;
