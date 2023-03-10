import { Typography, Box } from "@mui/material";
import { Form } from "../components";
import Layout from "../layout/Layout";

const Blogs = () => {
  return (
    <Layout>
      <Typography align="center" fontSize={28} fontWeight={700} gutterBottom>
        Join Us
      </Typography>
      <Box px="20%">
        <Typography align="left" fontSize={20} p={4}>
          Are you looking to make a difference in the lives of children in need?
          Join Just a Vision, an organization dedicated to improving the lives
          of children in children's homes.
        </Typography>
        <Typography align="left" fontSize={20} p={4}>
          As a member of Just a Vision, you'll have the opportunity to make a
          real impact in the lives of children by providing them with the
          support they need to thrive. Our organization visits children's homes
          and helps children with various matters such as education, health, and
          emotional support. We believe that every child deserves a chance to
          reach their full potential, and we work tirelessly to make that a
          reality for the children we serve.
        </Typography>
        <Typography align="left" fontSize={20} p={4}>
          By joining Just a Vision, you'll be part of a team of dedicated
          individuals who are passionate about making a difference in the world.
          You'll have the opportunity to work closely with children and see
          firsthand the impact of your efforts. Whether you have experience
          working with children or are just looking to make a difference, we
          welcome individuals from all backgrounds and skill levels.
        </Typography>
        <Typography align="left" fontSize={20} p={4}>
          Joining Just a Vision is more than just volunteering. It's an
          opportunity to be part of a community that is committed to making a
          positive difference in the world. So why wait? Join us today and help
          us make a lasting impact on the lives of children in need.
        </Typography>
      </Box>
      {/* //!Reasons to Join */}
      {/* TODO: Make a component for this information */}
      <Typography align="center" fontWeight={700} fontSize={28} p={2}>
        Reasons to Join Just a Vision
      </Typography>
      <Box px="20%" mb={8}>
        <ol className="list-decimal leading-10">
          <Typography fontSize={18} gutterBottom>
            <li>
              Make a real difference: As a member of Just a Vision, you'll have
              the opportunity to directly impact the lives of children in need.
              You'll be able to see the positive changes you make in their lives
              and know that you're making a real difference.
            </li>
          </Typography>
          <Typography fontSize={18} gutterBottom>
            <li>
              Gain new skills: Volunteering with Just a Vision can help you
              develop new skills, such as communication, teamwork, leadership,
              and problem-solving. These skills can be valuable in both your
              personal and professional life.
            </li>
          </Typography>

          <Typography fontSize={18} gutterBottom>
            <li>
              Meet new people: Joining Just a Vision is a great way to meet new
              people who share your passion for helping others. You'll have the
              opportunity to work alongside like-minded individuals and make new
              friends.
            </li>
          </Typography>

          <Typography fontSize={18} gutterBottom>
            <li>
              Improve your community: By volunteering with Just a Vision, you're
              contributing to the betterment of your community. You'll be
              helping to build a stronger, more caring community where everyone
              has the opportunity to succeed.
            </li>
          </Typography>

          <Typography fontSize={18} gutterBottom>
            <li>
              Boost your mental health: Studies have shown that volunteering can
              improve mental health by reducing stress, increasing happiness,
              and providing a sense of purpose and fulfillment.
            </li>
          </Typography>

          <Typography fontSize={18} gutterBottom>
            <li>
              Learn about different cultures: Just a Vision serves children from
              a variety of backgrounds, so you'll have the opportunity to learn
              about different cultures and gain a greater understanding of
              diversity.
            </li>
          </Typography>

          <Typography fontSize={18} gutterBottom>
            <li>
              Gain experience for your resume: Volunteering with Just a Vision
              can provide valuable experience that you can add to your resume.
              This can be particularly useful if you're looking for a job in the
              nonprofit sector or social services.
            </li>
          </Typography>

          <Typography fontSize={18} gutterBottom>
            <li>
              Have fun: Lastly, volunteering with Just a Vision can be a fun and
              rewarding experience. You'll have the opportunity to engage in
              activities with children and other volunteers that are enjoyable
              and fulfilling.
            </li>
          </Typography>
        </ol>
      </Box>
      {/* //*Registration Form */}
      <Box px="15%" my={8}>
        <Typography align="center" fontWeight={700} fontSize={24} gutterBottom>
          Register
        </Typography>
        <Form />
      </Box>
    </Layout>
  );
};
export default Blogs;
