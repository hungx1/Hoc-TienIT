
import { useContext } from "react"
import { ThemeContext } from "./ThemContext"

function Paragraph() {

    const context = useContext(ThemeContext)
    return(
        <p className={context.theme}>123 456 123</p>
    )
}

export default Paragraph







