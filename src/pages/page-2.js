import { graphql, Link } from "gatsby";
import React from "react";
import BgImage from "../components/BgImage";
import Layout from "../components/layout";
import SEO from "../components/seo";


const SecondPage = ({ data }) => (
  <Layout>
    <BgImage 
      title="car"
      fluid={data.image.cloudinary.fluid}
      overlayColor=""
    >
      <h1 style={{color: "white" }}>Headline goes here</h1>
    </BgImage>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)


export const query = graphql`
		query {
			image: file(name: { eq: "car" }) {
				cloudinary: childCloudinaryAsset {
					fluid(maxWidth: 1920) {
						...CloudinaryAssetFluid
					}
				}
			}
		}
`;
export default SecondPage
