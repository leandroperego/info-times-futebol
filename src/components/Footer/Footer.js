import * as React from "react";
import { Typography } from "@material-tailwind/react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function SimpleFooter() {

    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    copy
                }
            }
        }
    `);

    return (
        <footer className="mx-auto max-w-screen-xl flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <Typography color="blue-gray" className="font-normal">
                {query.site.siteMetadata.copy}
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Link to="/">
                        <Typography
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Home
                        </Typography>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Typography
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Sobre nós
                        </Typography>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Typography
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribua
                        </Typography>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Typography
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Fale conosco
                        </Typography>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}