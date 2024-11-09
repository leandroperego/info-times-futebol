import * as React from "react"
import Layout from "../../components/Layout"
import TimesAside from "../../components/Aside/TimesAside"

export default function Hinos() {
    return (
        <Layout>
            <h3 className="p-4 pl-0 pb-0">Hinos dos clubes</h3>
            <TimesAside />
        </Layout>
    )
}

export const Head = () => <title>Hinos</title>