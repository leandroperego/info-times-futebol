import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import TimesAside from "../../components/Aside/TimesAside";

export default function HinosPage({ data, children }) {
    return (
            <Layout title={"Hino do " + data.mdx.frontmatter.time}>
                <TimesAside initial={false} />
                <br />
                <h2 className="font-extrabold text-2xl">Hino do {data.mdx.frontmatter.time}</h2>
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
            }
            
        }
    }
`;

export const Head = ({ data }) => <title>Hino do {data.mdx.frontmatter.time}</title>