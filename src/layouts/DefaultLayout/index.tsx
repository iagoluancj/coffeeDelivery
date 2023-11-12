import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./styles"
import { NavBar } from '../../components/navBar/NavBar'

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <NavBar/>
            <Outlet />
        </LayoutContainer>
    )
}