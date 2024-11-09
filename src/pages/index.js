import * as React from "react"
import Layout from "../components/Layout"

export default function HomePage() {
  return (
    <div>
      <Layout title={"Home Page"}/>
    </div>
  )
}

export const Head = () => <title>Home Page</title>
