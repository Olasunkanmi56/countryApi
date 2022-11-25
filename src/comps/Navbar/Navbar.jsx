import React, {useState, useEffect} from 'react'
import { FaMoon } from 'react-icons/fa';
const Navbar = () => {
    const [theme, setTheme] = useState("light")

    useEffect(() =>{
        if(theme === "dark") {
            document.documentElement.classList.add("dark")
        }else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])
    const handletheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <nav className='flex dark:text-white flex-row justify-between align-center p-10'>
              <h1 className='font-extrabold text-lg text-gray-900 dark:text-white'>Where in the world?</h1>
              <div className="flex flex-row justify-between align-center text-center">
                  <FaMoon className='mr-3' onClick={handletheme} />
                  <h2 className='font-bold text-lg -mt-2'>Dark mode</h2>
              </div>
        </nav>
    )
}

export default Navbar
