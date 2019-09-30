import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
 
export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "car" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
 
  return <Image fluid={data.file.childCloudinaryAsset.fluid} alt="car image" />;
};