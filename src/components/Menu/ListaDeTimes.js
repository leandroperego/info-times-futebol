import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { List, ListItem, Card } from "@material-tailwind/react";

export default function ListaDeTimes() {
    const query = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        time
                        slug
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
                            <ListItem>{node.frontmatter.time}</ListItem>
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
