import { Link } from "gatsby"
import React from "react"
// import CarImage from "../components/CarImage";
import Layout from "../components/layout"
import SEO from "../components/seo"

// const CarImage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       image: file(name: { eq: "car" }) {
//         cloudinary: childCloudinaryAsset {
//           fluid(maxWidth: 1920) {
//             ...CloudinaryAssetFluid
//           }
//         }
//       }
//     }
//   `)

//   return <Image fluid={data.image.cloudinary.fluid} alt="car image" />
// }

const PageTwo = () => (
  <Layout>
    <SEO title="Page 2" />

    <h1>Page 2</h1>

    <Link to="/">Home page</Link>
    <br />
  </Layout>
)

export default PageTwo
