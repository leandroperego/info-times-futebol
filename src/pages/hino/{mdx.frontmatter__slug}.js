import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import TimesAside from "../../components/Aside/TimesAside";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function HinosPage({ data, children }) {
    return (
        <Layout title={"Hino do " + data.mdx.frontmatter.time}>
            <TimesAside initial={false} />
            <br />
            <div className="flex items-center gap-4">
                <h2 className="font-extrabold text-2xl">Hino do {data.mdx.frontmatter.time}</h2>
                <GatsbyImage image={getImage(data.mdx.frontmatter.hero_logo)} alt={data.mdx.frontmatter.hero_logo_alt} />
            </div>
            <br />
            {children}
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                time
                hero_logo_alt
                hero_logo {
                    childImageSharp {
                        gatsbyImageData(width: 50, placeholder: BLURRED, formats: WEBP)
                    }
                }  
            }
            
        }
    }
`;

export const Head = ({ data }) => <title>Hino do {data.mdx.frontmatter.time}</title>