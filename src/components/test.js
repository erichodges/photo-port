import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
 
export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "car.png" }) {
        allFile {
          nodes {
            childCloudinaryAsset {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  `);
 
  return <Image fluid={data.allFile.nodes.childCloudinaryAsset.fluid} alt="car image" />;
};