import { Box, Container, Grid, Typography } from "@mui/material";
import founder1 from "../assets/vision.jpg";
import founder2 from "../assets/vision.jpg";
import member1 from "../assets/vision.jpg";
import { Navbar, Footer, OurStory, Objectives } from "../components/index";
import Layout from "../layout/Layout";

const About = () => {
  const objectives = [
    "Provide emotional support and companionship to children living in homes or institutions",
    " Organize fun and educational activities for children",
    "Provide material and financial support",
    "Advocate for children's rights",
    "Work with local authorities and organizations",
    "Recruit and train volunteers",
  ];

  return (
    <Layout>
      <Box py={4}>
        <Container maxWidth="lg">
          {/* Page Title */}
          <Typography variant="h2" align="center" gutterBottom>
            About Us
          </Typography>
          <Box sx={{ bgcolor: "#F6F6F6", marginBottom: 10, padding: 4 }}>
            <OurStory
              imageSrc={founder1}
              title="Our Story"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum urna sit amet diam interdum ultrices. Pellentesque
              vitae nibh libero. Nam eu urna non libero convallis eleifend."
            />
          </Box>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="bg-white p-6 shadow-md">
                <Typography variant="h4" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dictum urna sit amet diam interdum ultrices. Pellentesque
                  vitae nibh libero. Nam eu urna non libero convallis eleifend.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="bg-white p-6 shadow-md">
                <Typography variant="h4" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dictum urna sit amet diam interdum ultrices. Pellentesque
                  vitae nibh libero. Nam eu urna non libero convallis eleifend.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/*Founders Section */}
          <Box py={10}>
            <Typography variant="h4" align="center" gutterBottom>
              Founders
            </Typography>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box className="bg-white p-6 shadow-md">
                  <img src={founder1} alt="Founder 1" />
                  <Typography variant="subtitle1">Keith Emali</Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Co-Founder & Chairperson
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="bg-white p-6 shadow-md">
                  <img src={founder2} alt="Founder 2" />
                  <Typography variant="subtitle1">Lucy Wairimu</Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Co-Founder & Vice Chairperson
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="bg-white p-6 shadow-md">
                  <img src={founder2} alt="Founder 2" />
                  <Typography variant="subtitle1">Pamela Kathigani</Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Co-Founder & Vice Chairperson
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/*Members Sections */}
          <Box py={10}>
            <Typography variant="h4" align="center" gutterBottom>
              Members
            </Typography>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={3}>
                <img
                  src={member1}
                  alt="Member 1"
                  className="w-48 h-48 rounded-full mb-2"
                />
                <Typography variant="subtitle1">Eddy Ratemo</Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  Events
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <img
                  src={member1}
                  alt="Member 1"
                  className="w-48 h-48 rounded-full mb-2"
                />
                <Typography variant="subtitle1">Feizal Barasa</Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  Community Outreach
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <img
                  src={member1}
                  alt="Member 1"
                  className="w-48 h-48 rounded-full mb-2"
                />
                <Typography variant="subtitle1">Hillary Mwangi</Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  Graphics Design
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <img
                  src={member1}
                  alt="Member 1"
                  className="w-48 h-48 rounded-full mb-2"
                />
                <Typography variant="subtitle1">Jean Riuki</Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  Treasurer
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <img
                  src={member1}
                  alt="Member 1"
                  className="w-48 h-48 rounded-full mb-2"
                />
                <Typography variant="subtitle1">Kyambi Mutua</Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  Social Media
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <img
                  src={member1}
                  alt="Member 1"
                  className="w-48 h-48 rounded-full mb-2"
                />
                <Typography variant="subtitle1">Oscar Aluso</Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  Planning
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#F6F6F6", marginBottom: 10, padding: 4 }}>
        <Objectives
          imageSrc={founder1}
          title="Our Objectives"
          objectives={objectives}
        />
      </Box>
    </Layout>
  );
};

export default About;
