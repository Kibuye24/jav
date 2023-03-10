import { Typography, Box, Button, Grid } from "@mui/material";
import { Navbar, Footer } from "../../components";
import blogImage from "../../assets/support.jpg";
import PreviewCard from "../../components/blog/PreviewCard";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Layout from "../../layout/Layout";

const Blogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await Axios.get("http://localhost:8080/api/v1/blogs");

      return response.data;
    },
  });

  if (isLoading) return <Typography align="center">Loading...</Typography>;

  if (error) return error;
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
          className="shadow-lg rounded-lg"
        >
          <Box
            sx={{ background: "linear-gradient(to right, #2BC0E4, #20C997)" }}
            width={500}
          >
            <Typography>Featured Blog</Typography>
          </Box>
          <Box flex={1} flexDirection="column">
            <Typography>2nd March, 2023</Typography>
            <Typography fontWeight={800} fontSize={48}>
              All You need to Know About the Coming Pad Drive
            </Typography>
            <Typography gutterBottom>
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
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis.
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
          gap={4}
          className="w-full flex flex-wrap rounded-lg shadow-lg mb-8"
        >
          {data.map((blog: any) => {
            return (
              <PreviewCard
                title={blog.title}
                description={blog.description}
                date={blog.createdAt}
                blogId={blog._id}
              />
            );
          })}
        </Box>
      </Box>
    </Layout>
  );
};

export default Blogs;
