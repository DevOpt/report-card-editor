import Head from "next/head";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import SearchBar from "../components/searchbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Report Card Editor</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <SectionTitle
        pretitle="Welcome to RCE!"
        title="Why should you use this editing software?">
        Report Card Editor is a free text editing tool that is designed to help teachers submit their report cards faster.
      </SectionTitle>
      <SearchBar />
      <Footer />
    </>
  );
}

export default Home;