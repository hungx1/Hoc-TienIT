import { useContext } from "react";
import Content from "./Content";
import { ThemeContext, ThemeProvider } from "./ThemContext";

//context Dùng để truyền giữ liệu từ component A xuống component C mà không qua gián tiếp
//Component A => Component B => Component C

//theme: Dark / light

//1. Create context
//2. Provider
//3. Consumer


function UseContext() {
    const context = useContext(ThemeContext);

    return (
            <div>
                <button onClick={context.toggleTheme}>Toggle theme</button>
                <Content/>
            </div>
    )
}

export default UseContext