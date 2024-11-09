import * as React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-screen-xl min-h-[calc(100lvh-15rem)] px-4">
                {children}
            </main>
            <Footer />
        </>
    )
}