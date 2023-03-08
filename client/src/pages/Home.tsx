import Gallery from "../components/home/gallery";
import Header from "../components/home/header";
import Support from "../components/home/support";
import Vision from "../components/home/vision";
import Contact from "../components/home/contact";
import Leftie from "../components/home/leftie";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Vision />
      <Gallery />
      <Support />
      <Contact />
    </Layout>
  );
};

export default Home;
