import { Link } from "gatsby"
import React from "react"
// import BgImage from "../components/BgImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data }) => (
  <Layout>
    {/* <BgImage title="car" fluid={data.image.cloudinary.fluid} overlayColor="">
      <h1 style={{ color: "white" }}>Headline goes here</h1>
    </BgImage> */}
    <div>
      <SEO title="Page two" />
      <h1>Home page</h1>
      <p>Welcome</p>
      <Link to="/page-2">Page 2</Link>
    </div>
  </Layout>
)

// export const query = graphql`
//   query {
//     image: file(name: { eq: "evija-hero" }) {
//       cloudinary: childCloudinaryAsset {
//         fluid(maxWidth: 1920) {
//           ...CloudinaryAssetFluid
//         }
//       }
//     }
//   }
// `
export default Index
