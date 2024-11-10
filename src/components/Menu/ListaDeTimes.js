import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { List, ListItem, Card } from "@material-tailwind/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ListaDeTimes() {
    const query = useStaticQuery(graphql`
        query {
            allMdx(sort: {frontmatter: {time: ASC}}) {
                nodes {
                    frontmatter {
                        time
                        slug
                        hero_logo_alt
                        hero_logo {
                            childImageSharp {
                                gatsbyImageData(width: 25, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                            }
                        }  
                    }
                }
            }
        }`);

    return (
        <Card className="w-96">
            <List>
                {
                    query.allMdx.nodes.map((node) => (
                        <Link to={`/hino/${node.frontmatter.slug}`} key={node.frontmatter.time}>
                            <ListItem className="flex items-center gap-2 py-2 pr-4">
                                <GatsbyImage image={getImage(node.frontmatter.hero_logo)} alt={node.frontmatter.hero_logo_alt} />
                                {node.frontmatter.time}
                            </ListItem>
                        </Link>
                    ))
                }
                <br />
                <Link to={`/`}>
                    <ListItem className="text-sm font-extrabold text-blue-800">Voltar pra Home</ListItem>
                </Link>
            </List>
        </Card>
    );
}
