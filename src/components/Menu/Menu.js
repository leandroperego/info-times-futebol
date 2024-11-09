import * as React from "react"
import {
    Menu,
    MenuHandler,
    MenuList,
    Button,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import ListaDeTimes from "./ListaDeTimes";

export default function MenuWithScrollingContent({ initial=true }) {

    return (
        <Menu>
            <MenuHandler>
                <Button variant="text" className="flex items-center gap-1 ml-0 mt-3">{initial ? "Escolha o time" : "Ver de outros times"} {<ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3 w-3`}
                />}</Button>
            </MenuHandler>
            <MenuList>
                <ListaDeTimes />
            </MenuList>
        </Menu>
    );
}