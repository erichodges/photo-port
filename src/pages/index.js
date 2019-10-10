import { Link } from "gatsby";
import React from "react";
import CarImage from "../components/CarImage";
// import Image from "../components/image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <CarImage />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `1920px`, marginBottom: `1.45rem` }}>

    </div>
    <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
