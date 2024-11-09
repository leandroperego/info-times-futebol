import * as React from "react"
import Menu from "../Menu/Menu"

export default function TimesAside({ initial }) {

    return (
        <div className="mx-auto max-w-screen-xl flex flex-col">
            <Menu initial={initial} />
        </div>
    )
}