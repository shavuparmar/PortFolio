import { useState } from "react"
import "./Header.css"

import { Link } from "react-router-dom"


export default function Header() {
    const [ShowMenu, SetShowMenu] = useState(false)
    const ToggleMenu = () => {
        SetShowMenu(!ShowMenu)

    }
    return (
        <div className="Main-Section">

            <div className="Navigation">
                <div className="Grid NavBar-grid">
                    <div className="Logos">
                        <h1>ShavuParmar </h1>
                    </div>
                    <nav className={ShowMenu ? "Mobile-Web" : "Web-Menu"}>
                        <ul>
                            <li>  <Link to={"/"}>Home</Link>       </li>
                            <li>  <Link to={"/about"}>About</Link>         </li>
                            <li>  <Link to={"/Projects"}>Project</Link>       </li>
                            <li>  <Link to={"/Contacts"}>ContactUs</Link>       </li>
                        </ul>
                    </nav>
                    <div className="Hamburger">
                        <button onClick={ToggleMenu}>
                            {ShowMenu ?
                                <h2>&times;</h2>
                                :
                                <h2>&#9776;</h2>
                            }
                        </button>
                    </div>
                </div>
            </div>






















        </div>
    )
}
