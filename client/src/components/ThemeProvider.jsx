
import { useSelector } from "react-redux"
// eslint-disable-next-line react/prop-types
function ThemeProvider({children}) {
    const theme = useSelector((state)=>state.theme.theme)
    return (
        <div className={theme}>
            <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen" >
                {children}
            </div>
        </div>
    )
}

export default ThemeProvider
